import styled from 'styled-components';

const PistaResultadoContainer = styled.p`
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const PistaResultado = (props) => {
  return(
    <PistaResultadoContainer>
        {props.pista}
    </PistaResultadoContainer>
  )
}