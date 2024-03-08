import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
},[])

  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>
      <p>Jokes:  {jokes.length}</p>

      {
        jokes.map((jokes)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <h3>{jokes.content}</h3>
          </div>
        ))
      }

     
    </>
  )
}

export default App
