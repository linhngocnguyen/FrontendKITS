import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [now, setNow] = useState(new Date());
  useEffect(() =>{
    setTimeout(() =>{
      setNow(new Date());
    }, 1000)
}, [now]);

  return (
    <>
      Hello World
      <div>{now.toLocaleTimeString()}</div>
    </>
  )
}

export default App
