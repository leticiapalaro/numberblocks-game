import styled from 'styled-components';
import FormStyles from '../../styles/shared/FormStyles';
import PistaResultado from '../PistaResultado';
import OperacaoMatematica from '../OperacaoMatematica';
import CampoInput from '../CampoInput';
import BotaoSubmit from '../BotaoSubmit';
import NumerosDescartados from '../NumerosDescartados';

const Formulario = styled(FormStyles)`
  .destaque-roxo {
    font-size: 4rem;
    color: #705EA0;
    text-shadow: 2px 0px 0px rgb(255, 255, 255, 1);
  }

  @media only screen and (max-width: 1024px) {
    .destaque-roxo{
      font-size: 2rem;
    }
  }
`
export const FormularioTentativas = (props) => {
  return(
    <Formulario onSubmit={props.onSubmit}>

    <PistaResultado pista={props.pista}/>

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

    {props.mostrarNumerosDescartados &&
      <NumerosDescartados numerosDescartados={props.numerosDescartados}/>
    }

  </Formulario>
  )
}