import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "vishal singh",
    age : 19
  }

  let newArr = [1,2,3,4,5,6]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5' >Taildwind Test</h1>
      <Card username = "Xp Tech" btnText="Subscribe"  />
      <Card username="Liraa" btnText="Follow" />
     
    </>
  )
}

export default App
