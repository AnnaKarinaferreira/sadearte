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
        <div className='input2'>Seu email <br /><input type="email"/></div>
        <div className='input2'>Nome de usuário <br /><input type="email"/></div>
        <div className='input3'>Número de telefone <br /><input className='input5' type="number"/></div>
        <div className='senhaCadastro'>
          <div className='input6'>Senha <br /><input type="password"/>
          <div className='input7'>Confirmar senha <br/> <input type="password"/></div></div>
        </div>
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
