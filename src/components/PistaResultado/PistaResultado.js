import styled from 'styled-components';

const PistaResultadoContainer = styled.p`
    padding: 1rem;
    border-radius: 50%;
    margin: 0px;
    margin-bottom: 1rem;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  .logo-numberblocks{
    max-height: 20vh;
    max-width: 20vw;
  }

  @media only screen and (max-width: 768px) {
    .logo-numberblocks{
      display: none;
    }
  }
`

export const PistaResultado = (props) => {
  return(
    <PistaResultadoContainer>
        <img src="./img/numberblocks-logo.webp" className="logo-numberblocks" alt='logo numberblocks'/><br />
        {props.pista}
    </PistaResultadoContainer>
  )
}