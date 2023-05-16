import ImgNumberblocksProporcional from '../ImgNumberblocksProporcional';
import styled from 'styled-components';

const Paragrafo = styled.p`
  font-size: 4rem;
  margin: 0;

  @media only screen and (max-width: 768px) {
    .display-none-mobile{
      display: none;
    }
  }
`

export const OperacaoMatematica = (props) => {
  return (
    <Paragrafo className="calculo-alvo">
      <ImgNumberblocksProporcional numero={props.primeiroNumero} escala={props.escala}/>
      <span> {props.sinal} </span>
      <ImgNumberblocksProporcional numero={props.segundoNumero} escala={props.escala}/>
      <span className='display-none-mobile'> = ?</span>
    </Paragrafo>
  )
}