import styled from 'styled-components';

const PistaResultadoContainer = styled.p`
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    img {
      width: 20vw;
    }
  }
`

export const PistaResultado = (props) => {
  return(
    <PistaResultadoContainer>
        {/* <img src="./img/numberblocks-logo.webp" className="logo-numberblocks apenas-desktop" alt='logo numberblocks'/><br /> */}
        {props.pista}
    </PistaResultadoContainer>
  )
}