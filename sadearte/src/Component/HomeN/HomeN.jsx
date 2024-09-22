import React from 'react'
import './HomeN.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo 1.png'

const HomeN = () => {
  return (
    <>
      <div class='header-home-n'>
        <img src={logo} alt="logo" />
        <div>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'>Trabalhos</button>
          <button  class='btnETD'>Desafios</button>
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='btnlogin'>Fazer Login</button>
          <button class='btncadastro'>Cadastrar-se</button>
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
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
        <div class='evento'>
          <p>Evento de coisa tal</p>
        </div>
      </div>

      <h1 class='titulo'>Em alta</h1>
      
      <div class='desenhosHome'>
        <div class='desenho'>a</div>
        <div class='desenho'>s</div>
        <div class='desenho'>d</div>
        <div class='desenho'>g</div>
        <div class='desenho'>q</div>
        <div class='desenho'>r</div>
        <div class='desenho'>w</div>
        <div class='desenho'>o</div>
      </div>


    </>
  )
}

export default HomeN