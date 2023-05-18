import ImgNumberblocksProporcional from '../ImgNumberblocksProporcional';
import styled from 'styled-components';

const Paragrafo = styled.p`
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    .destaque {
      font-size: 5rem;
      color: black;
    }
  }
`

export const OperacaoMatematica = (props) => {
  return (
    <Paragrafo>
      <div className="area-img-numeros">
        <ImgNumberblocksProporcional numero={props.primeiroNumero} escala={props.escala} />
        <span className="destaque"> {props.sinal} </span>
        <ImgNumberblocksProporcional numero={props.segundoNumero} escala={props.escala} />
        <span className="destaque apenas-desktop"> = ?</span>
      </div>
    </Paragrafo>
  )
}