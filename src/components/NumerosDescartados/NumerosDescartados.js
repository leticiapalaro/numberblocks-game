import ImgNumberblocksProporcional from "../ImgNumberblocksProporcional"
import styled from 'styled-components';

const NumerosDescartadosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  width: 25vw;
  padding: 0.5rem;
  margin-top: 2rem;
  background: rgba(255, 0, 0, 0.5);
`

export const NumerosDescartados = (props) => {
  if (props.numerosDescartados.length === 0) {
    return null;
  }

  const renderizar = props.numerosDescartados.map((item) => (
    <div key={item}>
      <img src={`./img/errado.png`} style={{ width: '1rem' }} alt={`imagem de um X indicando que o número ${item} já foi escolhido`} />
      <ImgNumberblocksProporcional numero={item} escala={0.6} />
    </div>
  ))

  return (
    <div className="apenas-desktop">
      <NumerosDescartadosContainer>
        {renderizar}
      </NumerosDescartadosContainer>
    </div>
  )
}