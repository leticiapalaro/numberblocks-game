import ImgNumberblocksProporcional from "../ImgNumberblocksProporcional"
import styled from 'styled-components';

const NumerosDescartadosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:baseline;

  .numero-descartado{
    padding: 5px;
  }
`

export const NumerosDescartados = (props) => {
  return(
    <NumerosDescartadosContainer>
      {props.numerosDescartados.map((item) => (
        <div key={item} className="numero-descartado">
          <img src={`./img/errado.png`} style={{ width: '1rem' }} alt={`imagem de um X indicando que o número ${item} já foi escolhido`}/>
          <ImgNumberblocksProporcional numero={item} escala={1}/>
        </div>
      ))}
    </NumerosDescartadosContainer>
  )
}