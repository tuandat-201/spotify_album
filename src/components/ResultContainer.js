import Album from "./Album";
import AddAlbum from "./AddAlbum";

function ResultContainer(props) {
  return (
    <div className="main-container">
      <Album
        album={props.album}
        playlist={props.playlist}
        setPlaylist={props.setPlaylist}
      />
      <AddAlbum playlist={props.playlist} setPlaylist={props.setPlaylist} />
      {props.playlist.length !== 0 && (
        <button className="save-btn" onClick={props.onClick}>
          Save
        </button>
      )}
    </div>
  );
}

export default ResultContainer;
