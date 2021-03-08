import "./search-box.css"

const SearchBox = (props) => {
return (
  <input type="search" placeholder={props.placeholder} onChange={props.inputSearch } />
)
}

export default SearchBox;