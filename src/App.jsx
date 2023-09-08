import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)
  console.log(hash)
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');  
      const json = await response.json();
      setUsers(json)
    }
    fetchData()
  }, [])

  useEffect(() => {
    window.addEventListener('hashchange', ()=> {
      setHash(window.location.hash.slice(1) * 1)
    })
  }, [])

  const user = users.find( user => hash === user.id ) 

  console.log(user)
  

  return (
    <>
      {hash ? <h1>{user.name}</h1> : null}
      {hash ? <h3>User Name: {user.username}</h3> : null}
      {hash ? <h3>T: {user.phone} </h3> : null}

      <ul>
        {
          users.map(user => {
           return <li key={user.id}><a href={`#${user.id}`}>{user.name}</a></li>
          })
        }
      </ul>
    </>
  )
}

export default App
