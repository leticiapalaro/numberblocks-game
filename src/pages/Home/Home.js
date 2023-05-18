import styled from 'styled-components';
import LinksNavegacao from '../../components/LinksNavegacao';

const HomeContainer = styled.div`
  background: url('./img/background2.webp');
  background-size: cover;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  height: 70vh;
  margin: 5vh 10vw;
  padding: 5vh 5vw;
  width: 80vw;

  .img-logo {
      width: 70vw;
    }

  @media screen and (min-width: 1024px) {
    width: 40vw;
    height: 80vh;
    margin: auto;

    .img-logo {
      width: 30vw;
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