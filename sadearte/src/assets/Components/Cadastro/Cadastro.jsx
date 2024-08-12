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
        <div><input type="username" placeholder='Nome de usuário'/></div>
        <div><input type="email" placeholder='Email'/></div>
        <div><input type="password" placeholder='Senha'/></div>
        <div> <input type="password" placeholder='Confirme sua senha'/></div>
        <div className='recall-forget'>
            <label htmlFor="">
                <input type="checkbox"/>
                Lembre de mim
            </label> <br />
            <a href="">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>Já possuí uma conta? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
