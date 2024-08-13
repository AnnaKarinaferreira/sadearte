import React from 'react'
import { useState } from 'react';
import "./Cadastro.css";

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
        <div className='input1'>Nome de usuário<br/><input type="username" placeholder='Nome de usuário'/></div>
        <div className='input2'>Seu email <br /><input type="email" placeholder='Email'/></div>
        <div className='input3'>Seu Número <br /><input className='input4' type="number" placeholder='(DDD)'/> <input className='input5' type="number" placeholder='+xx xxxxx-xxxx' /></div>
        <div className='input6'>a <br /><input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Confirme sua senha'/></div>
        <div className='recall-forget'>
            <label htmlFor="">
                <input type="checkbox"/>
                Lembre de mim
            </label> <br />
            <link rel="stylesheet" href="./Cadastro.jsx" />
        </div>

        <button className='Button1'>Continuar</button>

        <div className="signup-link">
            <p>Já possuí uma conta? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
