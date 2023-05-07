import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultContainer from "./components/ResultContainer";

function App() {
  const [query, setQuery] = useState("");
  const [token, setToken] = useState("");
  const [album, setAlbum] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const hash = window.location.hash.replace("#access_token=", "");
    const value = hash.split("&").at(0);
    setToken(value);
  }, []);

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleClickSearch() {
    const fetchData = async () => {
      const keyword = query.replace(" ", "%20");
      const endpoint = `https://api.spotify.com/v1/search?q=${keyword}&type=album&market=VN&limit=5`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setAlbum(data.albums.items);
    };

    if (query !== "") {
      fetchData();
      setQuery("");
    } else {
      alert("Please enter keyword");
    }
  }

  async function handleClickSave() {
    const ids = playlist.map((item) => item.id);
    const endpointCheck = `https://api.spotify.com/v1/me/albums/contains?ids=${ids.join(
      "%2C"
    )}`;
    const responseCheck = await fetch(endpointCheck, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await responseCheck.json();
    const check = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i]) {
        check.push(playlist[i].name);
      }
    }

    if (check.length === 0) {
      const endpointAdd = `https://api.spotify.com/v1/me/albums?ids=${ids.join(
        "%2C"
      )}`;
      await fetch(endpointAdd, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert("Thêm vào playlist thành công");
      setPlaylist([]);
    } else {
      alert(
        `Đã có album ${check.join(
          ", "
        )} trong playlist. Vui lòng xoá khỏi yêu cầu`
      );
    }
  }

  return (
    <React.StrictMode>
      <Header token={token} />
      {token !== "" && (
        <main>
          <SearchBar
            value={query}
            onChange={handleQueryChange}
            onClick={handleClickSearch}
          />
          <ResultContainer
            album={album}
            playlist={playlist}
            setPlaylist={setPlaylist}
            onClick={handleClickSave}
          />
        </main>
      )}
    </React.StrictMode>
  );
}

export default App;
