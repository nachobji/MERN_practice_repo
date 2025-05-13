import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [ users, setUsers ] = useState([]);
  const getUsers = async () => {
    const response = await axios.get('http://localhost:3600/api/v1/users');
    console.log(response.data.response);
    setUsers(response.data.response);
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <main>
    {users.map((user) => (
      <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.age}</p>
      </div>
    ))}
    </main>
  )
}

export default App
