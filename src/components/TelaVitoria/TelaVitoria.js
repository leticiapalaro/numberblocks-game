import BotaoSubmit from "../../components/BotaoSubmit"

import styled from 'styled-components';
import FormStyles from "../../styles/shared/FormStyles"

const Formulario = styled(FormStyles)`
  color: rgb(25, 118, 210);
  font-weight: 900;
  text-transform: uppercase;
`

export const TelaVitoria = (props) => {
  return(
    <Formulario>
      <form className="formulario">
        <p>Pressione <span className="destaque-vermelho">ENTER</span><br />para tentar novamente</p>
        {props.resultado}<br />
        <input type='hidden' />
        <BotaoSubmit descricao={'Tentar Novamente'} onClick={props.onClick} />
      </form>
    </Formulario>
  )
}