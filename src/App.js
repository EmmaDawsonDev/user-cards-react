import {useState, useEffect} from "react"
import './App.css';
import Cardlist from "./components/card-list/card-list"

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
        
  }, [])

  return (
    <div className="App">
     <Cardlist userList={users} />
    </div>
  );
}

export default App;
