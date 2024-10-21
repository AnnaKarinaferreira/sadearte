import React from 'react';
import { useState } from 'react';
import "./Meuperfil.css";
import { Link } from 'react-router-dom';
import '../barraL.css'

const Meuperfil = () => {
    return(
        <>
        <div class='barraLogado'>
        <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'>Trabalhos</button>
          <button  class='btnETD'>Desafios</button>
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='not'><a href="/LogIn"><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="/MeuPerfil"><img class='imgPerfil' src={user} /></a></button>
        </div>
      </div>

        </>
    )
}

export default Meuperfil;