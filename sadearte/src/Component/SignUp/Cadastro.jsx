import React, { useState } from 'react';
import "./Cadastro.css";
import voltar from "../SignUp/voltar.png";

const Cadastro = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [confSenha, setConfSenha] = useState("");
   const [message, setMessage] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();
    
      if (password !== confSenha) {
         setMessage("As senhas não coincidem. Tente novamente.");
      } else {
         setMessage("Cadastro realizado com sucesso!");
      }
      console.log({ password });
   };

   return (
      <>
         <div className='Conteiner'>
            <form className="formCadastro" onSubmit={handleSubmit}>
               <div className='alinhamento1'>
                  <img src={voltar} alt="Voltar" className='seta'/>
                  <a href="/" className='voltar'>voltar</a>
               </div>
               <h1 className='titulo'>Seja bem-vindo ao Brighid!</h1>
               <h1 className='descricao'>Cadastre-se para se juntar à nossa comunidade de artistas!</h1>
               
               <div className='input2'>
                  Seu email <br />
                  <input type="email" required onChange={(e) => setUsername(e.target.value)} />
               </div>
               <div className='input2'>
                  Nome de usuário <br />
                  <input type="text" required onChange={(e) => setUsername(e.target.value)} />
               </div>
               <div className='input3'>
                  Número de telefone <br />
                  <input className='input5' type="number" required />
               </div>
               <div className='senhaCadastro'>
                  <div>
                     <label htmlFor="senha">Senha</label>
                     <input type="password" name="senha" id="senha" required onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div>
                     <label htmlFor="confsenha">Confirmar senha</label>
                     <input type="password" name="confsenha" id="confsenha" required onChange={(e) => setConfSenha(e.target.value)} />
                  </div>
               </div>
               <div className='recall-forget'>
                  <label>
                     <input type="checkbox"/>
                     Lembre de mim
                  </label> <br />
               </div>
               <button type="submit">Cadastrar</button>
               {message && <p>{message}</p>}
            </form>
         </div>
      </>
   );
};

export default Cadastro;