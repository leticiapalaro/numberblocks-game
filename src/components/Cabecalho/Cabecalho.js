import { Link } from "react-router-dom";
import styled from 'styled-components';

const CabecalhoContainer = styled.nav`
  background: rgba(0,0,0,0.9);
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 50% 50%;
  margin-bottom: 1rem;
  padding: 0.5rem;

  .cabecalho__menu__link{
    margin: 0 1rem;
    transition: 0.8s ease;
  }

  .cabecalho__menu__link:hover{
    background: rgb(25, 77, 209);
    margin: 0 1rem;
    border-radius: 0 0 50% 50%;
  }

  img{
    height: 1rem;
  }

  a:visited {
    color: white;
  }
`

export const Cabecalho = () => {
  return (
    <CabecalhoContainer className="apenas-desktop">
          <Link className={"cabecalho__menu__link"} to='/'>
            <img className={"cabecalho__menu__link__img"} src='./img/home.webp' alt='imagem botão home'/>
            <br/>Home
          </Link>

          <Link className={"cabecalho__menu__link"} to='/adivinhar'>
            Jogo de <br/><span className="uppercase">Adivinhar</span>
          </Link>

          <Link className={"cabecalho__menu__link"} to='/somar'>
            Jogo de <br/><span className="uppercase">Somar</span>
          </Link>

          <Link className={"cabecalho__menu__link"} to='/subtrair'>
            Jogo de <br/><span className="uppercase">Subtrair</span>
          </Link>

          <Link className={"cabecalho__menu__link"} to='/multiplicar'>
            Jogo de <br/><span className="uppercase">Multiplicar</span>
            </Link>
    </CabecalhoContainer>
  )
}