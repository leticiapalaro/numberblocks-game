import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 9999;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 5px rgba(25, 118, 210, 1);
  color: white;
  font-size: 0.5rem;
  text-align: center;
  /* text-transform: uppercase; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 30px;
  }
`

export const BotaoHomeFlutuante = () => {
  return(
    <StyledLink className="apenas-mobile" to='/'>
      <p>Home</p>
      <img src='./img/home.webp' alt='botão home'/>
    </StyledLink>
  )
}