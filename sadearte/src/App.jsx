import { useState } from 'react'
import Cadastro from './assets/Components/Cadastro'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
  <>
   <div className='geral'> 
      <p className='Title1'>Seja bem-vindo ao Brighid!</p>
      <p className='Title2'>Cadastre-se para se juntar à nossa comunidade de artistas!</p>
      <Cadastro></Cadastro>
    </div>
  </>
)
}

export default App