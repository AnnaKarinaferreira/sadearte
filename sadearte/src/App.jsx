import { useState } from 'react'
import Cadastro from './assets/Components/Cadastro/Cadastro'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Container'>
        <p>Tela de cadastro</p>
        <Cadastro></Cadastro>
      </div>
    </>
  )
}

export default App
