import BotaoSubmit from "../../components/BotaoSubmit"
import styled from 'styled-components';
import FormStyles from "../../styles/shared/FormStyles"
import BotaoHomeFlutuante from "../BotaoHomeFlutuante";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = styled(FormStyles)`
  position: relative;
  z-index: 1;
  color: #1976D2;
  text-transform: uppercase;

  .contador{
    color: white;
  }
`
const StyledContador = styled.p`
  background: rgba(0,0,0,0.9);
  color: white;
  margin: auto;
  padding: 1vh 0;
  text-align: center;
  width: 70vw;

  @media screen and (min-width: 1024px) {
    margin-top: 1rem;
    width: 40vw;
  }
`

export const TelaVitoria = (props) => {
  const [contador, setContador] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/")
    }, 5000);

    const intervalId = setInterval(() => {
      setContador((prevContador) => prevContador - 1)
    }, 1000);

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    };
  }, [navigate]);

  return (
    <>
      <Formulario>
        <BotaoHomeFlutuante />
        <form className="formulario">
          <p className="apenas-desktop">Pressione <span className="destaque-vermelho">ENTER</span> para tentar novamente</p>
          {props.resultado}<br />
          <input type='hidden' />
          <BotaoSubmit descricao={'Tentar Novamente'} onClick={props.onClick} />
        </form>
      </Formulario>
      <StyledContador>Você será direcionado para a página inicial em <span className="destaque-vermelho">{contador}</span> segundos...</StyledContador>
    </>
  )
}