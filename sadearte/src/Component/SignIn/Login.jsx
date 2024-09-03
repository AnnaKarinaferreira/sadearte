import React from 'react';
import { useState } from 'react';
import "./Login.css";
import Cadastro from '../SignUp/Cadastro';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';



const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit=(event) => {
  event.preventDefault();

  console.log("Envio");
};

  return (
    <div className='Conteiner'>
      <form onSubmit={handleSubmit}>
      <h1 className='titulo'>Bom te ver de volta!</h1>
      <div className='input1'>Seu email <br /><input type="email" placeholder='Email'/></div>
      <div className='input2'>Senha <br /><input type="string" placeholder='Digite sua senha'/></div>
      <div className='forget-link'><a href="dsfsf">Esqueceu sua senha</a></div>
      <button className='Button1'>Continuar</button>
      </form>
    </div>
  )
}

export default Login;
