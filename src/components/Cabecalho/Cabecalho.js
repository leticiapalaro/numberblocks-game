import { Link } from "react-router-dom";
import styled from 'styled-components';

const CabecalhoContainer = styled.nav`
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0 0 50% 50%;

  .cabecalho__menu__link {
    text-decoration: none;
    color: white;
    font-weight: 900;
    display: inline-block;
    width: 10ch;
    margin: 0.5rem;
    padding: 0.5rem;
    transition: 0.7s ease;
  }

  .cabecalho__menu__link:hover {
    border-radius: 0 0 50% 50%;
    background-color: #03285c;
  }

  .uppercase {
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  .cabecalho__menu__link__img {
    height: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    .display-none-mobile{
      display: none;
    }
  }
`

export const Cabecalho = () => {
  return (
    <CabecalhoContainer>
        <Link className={"cabecalho__menu__link"} to='/'><img className={"cabecalho__menu__link__img"} src='./img/home.png' alt='imagem botão home'/><br/>Home</Link>
        <span className="display-none-mobile">
          <Link className={"cabecalho__menu__link"} to='/adivinhar'>Jogo de <span className="uppercase">Adivinhar</span></Link>
          <Link className={"cabecalho__menu__link"} to='/somar'>Jogo de <span className="uppercase">Somar</span></Link>
          <Link className={"cabecalho__menu__link"} to='/subtrair'>Jogo de <span className="uppercase">Subtrair</span></Link>
          <Link className={"cabecalho__menu__link"} to='/multiplicar'>Jogo de <span className="uppercase">Multiplicar</span></Link>
        </span>
    </CabecalhoContainer>
  )
}