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
          <button>Explorar</button>
          <button>Trabalhos</button>
          <button>Desafios</button>
        </div>
        <div>
          <input type="search" name="" id="" />
        </div>
        <div>
          <button>Fazer Login</button>
          <button>Cadastrar-se</button>
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
      
    </>
  )
}

export default HomeN