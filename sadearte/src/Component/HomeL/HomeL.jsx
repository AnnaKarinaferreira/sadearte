import React from 'react'
import '../HomeN/HomeN.css'
import '../Desafios/Desafios.jsx'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo 1.png'
import '../barraL.css'
import not from '../../assets/not.png'
import user from '../../assets/user.png'

const HomeN = () => {
  return (
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
          <button class='btnPerfil' ><a href="#"><img class='imgPerfil' src={user} /></a></button>
        </div>
      </div>

      <div class='eventos'>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
      </div>

      <h1 class='titulo'>Em alta</h1>
      
      <div class='desenhosHome'>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
        <div class='desenho'></div>
      </div>


    </>
  )
}

export default HomeN