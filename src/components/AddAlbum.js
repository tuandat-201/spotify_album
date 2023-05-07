function AddAlbum(props) {
  function handleRemoveAlbum(album) {
    props.setPlaylist((currentPlaylist) =>
      [...currentPlaylist].filter((item) => item !== album)
    );
  }

  return (
    <div className="album-container">
      <h3 className="title">Playlist</h3>
      <div className="result-container">
        {props.playlist.map((item) => {
          return (
            <div className="item-album-container" key={item.id}>
              <img src={item.images[1].url} alt="" />
              <div>
                <h2>{item.name}</h2>
                <h3>{item.artists[0].name}</h3>
              </div>
              <button onClick={() => handleRemoveAlbum(item)}>&#45;</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddAlbum;
