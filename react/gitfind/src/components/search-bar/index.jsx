import "./searchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="@usuario" value={props.value} onChange={props.onChange}/>
      <button onClick={props.onClick}>buscar</button>
    </div>
  );
};

export default SearchBar;
