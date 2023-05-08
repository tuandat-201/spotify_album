function Header(props) {
  return (
    <header>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="Logo"
        className="logo"
      />
      {props.token === "" ? (
        <a
          href="https://accounts.spotify.com/authorize?response_type=token&client_id=f702a0640fac4e2ebb17f91691b971d1&scope=user-library-modify%20user-library-read&redirect_uri=https://spotify-add-album.netlify.app"
          className="account-link"
        >
          Login
        </a>
      ) : (
        <a
          href="https://spotify-add-album.netlify.app/"
          className="account-link"
        >
          Log out
        </a>
      )}
    </header>
  );
}

export default Header;
