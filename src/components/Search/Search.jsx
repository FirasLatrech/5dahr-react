import "./Search.css";
import searchIcon from "../../assets/icons/search.svg";
function Search() {
  return (
    <div className="search_header">
      <input type="text" />
      <span>
        <img src={searchIcon} alt="" />
      </span>
    </div>
  );
}

export default Search;
