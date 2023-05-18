import styled from 'styled-components';
import LinksNavegacao from '../../components/LinksNavegacao';

const Erro404Container = styled.div`
  background: url('./img/background2.webp');
  background-size: cover;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  height: 70vh;
  margin: 5vh 10vw;
  padding: 5vh 5vw;
  width: 80vw;

  .mensagem-erro{
    background: rgba(0,0,0,0.9);
    color: #FAEBD7;
    padding: 1rem;
    text-align: center;
  }

  @media screen and (min-width: 1024px) {
    width: 40vw;
    height: 55vh;
    margin: auto;
  }
`

export const Erro404 = () => {
  return(
    <Erro404Container>
      <div className="mensagem-erro">
        <h2>Erro404</h2>
        <p>Muitos Numberblocks procuraram sua página, mas não encontraram.<br/>
        Talvez um desses links possa te ajudar:</p>
      </div>
      <LinksNavegacao/>
    </Erro404Container>
  )
}