import React from 'react'
import './PerfilArtista.css'
import '../PerfilOutroArt/OutroArt.css'
import '../HomeN/HomeN.css'
import '../barraL.css'
import logo from '../../assets/logo 1.png'
import user from '../../assets/user.png'


const PerfilArtista = () => {
    return (
      <>
        <div class='barraLogado'>
        <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p className='trabalhos'><a href="/Trabalhos">Trabalhos</a></p></button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='not'><a href="/LogIn"><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="/OutroArt"><img class='imgPerfil' src={user} /></a></button>
        </div>
      </div>
       <div class='tudo'>
            <div class='infos'>
                <div class='centro'>
                    <img class='userimg' src={user} alt='user'/>
                    <h2>Nome do artista</h2>
                    <p>user</p>
                </div>
                <div class='maisinfos'>
                    <p>seguidores: xxxx</p>
                    <p>seguindo: xxx</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non iaculis eros. Proin...</p>
                    <p>mostrar mais</p>
                </div>
            </div>
            <div class='cima'>
                <div class='retangulo'></div>
                <div class='menuC'>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Competições</p>
                </div>
                <div class='desenhosOutroArt'>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                </div>
            </div>
       </div>
    
    
    
    
    
    </>
    )
}      

export default PerfilArtista