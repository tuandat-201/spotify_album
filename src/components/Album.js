function Album(props) {
  function handleAddAlbum(album) {
    if (props.playlist.includes(album)) {
      alert("Đã có bài hát trong album");
    } else {
      props.setPlaylist((currentPlaylist) => [...currentPlaylist, album]);
    }
  }

  return (
    <div className="album-container">
      <h3 className="title">Result</h3>
      <div className="result-container">
        {props.album.map((item) => {
          return (
            <div className="item-album-container" key={item.id}>
              <img src={item.images[1].url} alt="" />
              <div>
                <h2>{item.name}</h2>
                <h3>{item.artists[0].name}</h3>
              </div>
              <button onClick={() => handleAddAlbum(item)}>&#43;</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
