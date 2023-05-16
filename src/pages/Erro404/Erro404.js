import styled from 'styled-components';
import LinksNavegacao from '../../components/LinksNavegacao';

const Erro404Container = styled.div`
  background: url('./img/background2.png');
  background-size: cover;
  color: black;
  width: 50vw;
  height: 50vh;
  margin: 1rem auto;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  align-items: center;
  font-weight: bolder;

  .mensagem-erro{
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.8);
    width: 80%;
    margin: auto;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 1rem;
  }

  h2 {
    color: red;
    font-size: 2rem;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 85vw;
    height: 80vh;
  }
`

export const Erro404 = () => {
  return(
    <Erro404Container>
      <div className="mensagem-erro">
        <h2>Erro404</h2>
        <p>Muitos Numberblocks procuraram sua página mas não encontraram.<br/>
        Talvez um desses links possa te ajudar:</p>
        <LinksNavegacao/>
      </div>
    </Erro404Container>
  )
}