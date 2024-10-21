import React from 'react'
import './HomeN.css'
import { Link } from 'react-router-dom'
import Desafios from '../Desafios/Desafios.jsx'
import logo from '../../assets/logo 1.png'
import seta from '../HomeN/seta.svg'

const HomeN = () => {
  return (
    <>
      <div class='header-home-n'>
        <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'>Trabalhos</button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='btnlogin'><p className='login' ><a href="/Login">Fazer Login</a></p></button>
          <button class='btncadastro'><p className='cadastro'><a href="/Cadastro">Cadastrar-se</a></p></button>
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

      <h1 class='titulo'>Em alta  <img src={seta} alt="" className='seta' /> </h1>
     
      
      <div class='desenhosHome'>
        <div class='desenho'>
          <h1 className='aviso' >Aviso conteúdo sensível</h1>
          <button className='vizualizar'>Vizualizar</button>
        </div>
        <a href="/OutroArt"><div class='desenho'></div></a>
        <div class='desenho1'><h1></h1></div>
        <div class='desenho2'></div>
        <div class='desenho3'></div>
        <div class='desenho4'></div>
        <div class='desenho5'></div>
        <div class='desenho6'></div>
      </div>


    </>
  )
}

export default HomeN