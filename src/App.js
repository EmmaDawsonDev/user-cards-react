import {useState, useEffect} from "react"
import './App.css';
import Cardlist from "./components/card-list/card-list"
import SearchBox from "./components/search-box/search-box";



function App() {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
        
  }, [])

  const searchHandler = (e) => {
    setSearchField(e.target.value)
  }

  const filteredMonsters = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1>Cats Directory</h1>
      
     <SearchBox inputSearch={searchHandler} placeholder="Search cats" />
     <Cardlist userList={filteredMonsters} />
    </div>
  );
}

export default App;
