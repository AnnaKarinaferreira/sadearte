import React from 'react'
import './Desafios.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo 1.png'


const Desafios = () => {
    return(
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
        <button class='btnPerfil' ><a href="#"><img class='imgPerfil' src={user} /></a></button>
      </div>
      <div className='box1'>
      <H1>Evento tal aqui</H1>
      </div>

    
    
    </div>
    )
}

export default Desafios;