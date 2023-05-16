import ImgNumberblocksProporcional from '../ImgNumberblocksProporcional';
import styled from 'styled-components';

const Paragrafo = styled.p`
  font-size: 4rem;
  margin: 0;
`

export const OperacaoMatematica = (props) => {
  return (
    <Paragrafo className="calculo-alvo">
      <ImgNumberblocksProporcional numero={props.primeiroNumero} escala={props.escala}/>
      <> {props.sinal} </>
      <ImgNumberblocksProporcional numero={props.segundoNumero} escala={props.escala}/>
      <span> = ?</span>
    </Paragrafo>
  )
}