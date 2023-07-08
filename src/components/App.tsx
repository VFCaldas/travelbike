import { useState } from 'react'
// import { DatabaseService } from '../services/DatabaseService'

import './App.css'

function App() {
  const [texto, setTexto] = useState("OI");

  // DatabaseService.insert({ 
  //   teste: 1,
  //   teste2: "ASDJAKSDJLK"
  // }, "teste/")

  // let response = DatabaseService.select("teste/")
  // response.then((value)=>{
  //   setTexto(JSON.stringify(value.toJSON()))
  // });

  return (
    <>
      <h1>TRAVEL BIKE</h1>
      <p>{texto}</p>
    </>
  )
}

export default App
