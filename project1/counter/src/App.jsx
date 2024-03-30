import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter ,setCounter]= useState(15)
 
  // let counter = 15;

  const addValue=()=>{
    // console.log("value Added" , counter);
    // counter=counter+1;
    setCounter(counter+1)
  }

   const removeValue = ()=>{
    if(counter==0){
      setCounter(counter+15)
    }
    else{setCounter(counter-1)}
   }

  return (
    <>
    
      <h1>Xp Tech</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br />
      <button  onClick={removeValue}>Remove Value :{counter}</button>

      <header>{counter}</header>


    
    </>
  )
}

export default App
