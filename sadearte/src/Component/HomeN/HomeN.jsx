import React from 'react'
import './HomeN.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo 1.png'

const HomeN = () => {
  return (
    <>
      <div class='header-home-n'>
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
          <button class='btnlogin'><a href="/LogIn">Fazer Login</a></button>
          <button class='btncadastro'><a href="/Cadastro">Cadastrar-se</a></button>
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
        <div class='desenho'>
          <h1 className='aviso' >Aviso conteúdo sensível</h1>
          <button className='vizualizar'>Vizualizar</button>
        </div>
        <a href="/OutroArt"><div class='desenho'></div></a>
        <div class='desenho'><h1></h1></div>
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