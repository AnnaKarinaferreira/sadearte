import React from 'react'
import { useState } from 'react';
import "./Cadastro.css";
import Login from "../SignIn/Login.jsx"
import voltar from "../SignUp/voltar.png"
import { Link } from 'react-router-dom';



const Cadastro = () => {

   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Envio");
   };


  return (
    <div className='Conteiner'>
      <form onSubmit={handleSubmit}>
        <div className='alinhamento1'>
        <img src={voltar} alt="" className='seta'/>
        
        <a href="/HomeI" className='voltar'>voltar</a>
        </div>
        <h1 className='titulo'>Seja bem-vindo ao Brighid!</h1>
        <h1 className='descricao'>Cadastre-se para se juntar à nossa comunidade de artistas!</h1>
        <div className='input2'>Seu email <br /><input type="email" placeholder='Email'/></div>
        <div className='input3'>Seu Número <br /><input className='input4' type="number" placeholder='(DDD)'/> <input className='input5' type="number" placeholder='+ xx xxxxx-xxxx' /></div>
        <div className='input6'>Crie sua senha <br /><input type="password" placeholder='Senha'/>
        <div className='input7'><input type="password" placeholder='Confirme sua senha'/></div></div>
        <div className='recall-forget'>
            <label htmlFor="">
                <input type="checkbox"/>
                Lembre de mim
            </label> <br />
        </div>

        <button className='Button1'>Continuar</button>

        <div className="signup-link">
          <a href="Login">Já possuí uma conta? </a>
            
        </div>
      </form>
    </div>
  )
}

export default Cadastro
