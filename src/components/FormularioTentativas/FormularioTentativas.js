import styled from 'styled-components';
import FormStyles from '../../styles/shared/FormStyles';
import PistaResultado from '../PistaResultado';
import OperacaoMatematica from '../OperacaoMatematica';
import CampoInput from '../CampoInput';
import BotaoSubmit from '../BotaoSubmit';
import NumerosDescartados from '../NumerosDescartados';
import BotaoHomeFlutuante from '../BotaoHomeFlutuante';

const Formulario = styled(FormStyles)`
  color: #1976D2;
  position: relative;
  z-index: 1;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('./img/one-agent.webp') no-repeat right bottom;
    background-size: contain;
    z-index: -1;
  }

  @media screen and (min-width: 1024px) {
    ::before {
      background-size: 40vh;
    }
  }
`
export const FormularioTentativas = (props) => {
  return (
    <>
      <Formulario onSubmit={props.onSubmit}>

        <BotaoHomeFlutuante />

        <PistaResultado pista={props.pista} />

        {props.mostrarOperacaoMatematica &&
          <OperacaoMatematica
            primeiroNumero={props.primeiroNumero}
            segundoNumero={props.segundoNumero}
            escala={props.escala}
            sinal={props.sinal}
          />
        }

        <CampoInput
          textoAjuda={props.textoAjuda}
          label='Resultado'
          type='number'
          rangeMin={0}
          rangeMax={props.rangeMax}
          tamanhoMax={props.tamanhoMax}
          pattern={'[0-9]*'}
          value={props.value}
          onChange={(event) => props.onChange(() => parseInt(event.target.value))}
          autoFoco={true}
        /><br />

        <BotaoSubmit descricao='Enviar' />

        {/* <img src='./img/one-agent.webp' alt='numberblock 1 caracterizado de detetive' /> */}
        {props.mostrarNumerosDescartados &&
          <NumerosDescartados numerosDescartados={props.numerosDescartados} />
        }
      </Formulario>
    </>
  )
}