import React from 'react';
import { useState } from 'react';
import "./Login.css";
import Cadastro from '../SignUp/Cadastro';
import HomeN from '../HomeN/HomeN';
import voltar from "../SignUp/voltar.png"
import { Link } from 'react-router-dom';




const Login = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit=(event) => {
  event.preventDefault();

  console.log("Envio");
};

  return (
    <>
      <div className="loginPage">
        <div className='Conteiner'>
          <form onSubmit={handleSubmit}>
          <div className='alinhamento1'>
        <img src={voltar} alt="" className='seta'/>
        <a href="/HomeI" className='voltar'>voltar</a>
        </div>
            <h1 className='titulo'>Bom te ver de volta!</h1>
            <h1 className='descricao'>Faça login para voltar à nossa comunidade de artistas!</h1>
            <div className='input1'>Seu email <br /><input type="email" placeholder='Email'/></div>
            <div className='input2'>Senha <br /><input type="string" placeholder='Digite sua senha'/></div>
            <div className='recall-forget'>
            <label htmlFor="">
                <input type="checkbox"/>
                Lembrar senha
            </label> <br />
        </div>

            <div className='forget-link'>Esqueceu sua senha?<a href="dsfsf">Clique aqui</a></div>
            <button className='Button1'> <Link to="HomeN">Faça login aqui</Link></button>
          </form>
        </div>
      </div>
    </>
    
  )
}

export default Login;
