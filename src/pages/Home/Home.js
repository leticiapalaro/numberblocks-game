import styled from 'styled-components';
import LinksNavegacao from '../../components/LinksNavegacao';

const HomeContainer = styled.div`
  width: 40vw;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  background: url('./img/background2.png');
  background-size: cover;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;

  .img-logo {
    width: 30vw;
    margin: auto;
  }

  @media only screen and (max-width: 768px) {
    width: 85vw;

    .img-logo {
      width: 80vw;
    }
  }
`

export const Home = () => {
  return(
    <HomeContainer>
      <img className="img-logo" src='./img/numberblocks-logo.webp' alt='logo numberblocks'/>
      <LinksNavegacao/>
    </HomeContainer>
  )
}