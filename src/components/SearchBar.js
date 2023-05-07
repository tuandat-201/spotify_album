function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        required
        onChange={props.onChange}
        value={props.value}
      />
      <button className="search-btn" onClick={props.onClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
