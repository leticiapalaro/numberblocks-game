import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  border-radius: 20px;
  box-sizing: border-box;
  font-family: 'Dosis', sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  margin: 0;
  padding: 0;
  text-decoration: none;

  body {
    background: url('./img/background.webp');
  }

  img {
    max-width: 70vw;
  }


  .destaque {
    font-size: 1.5rem;
  }

  .destaque-verde {
    color: green;
  }

  .destaque-vermelho {
    color: red;
  }

  .destaque-laranja {
    color: #F08E39;
  }

  .destaque-amarelo {
    color: yellow;
  }

  .area-img-numeros{
    background: #1976D2;
    border-radius: 50%;
    color: white;
    margin: auto;
    padding: 10px;
    width: 60vw;
  }

  @media screen and (min-width: 1024px) {
    .apenas-mobile {
      display: none;
    }

    .destaque {
      font-size: 5rem;
    }

    .area-img-numeros{
      width: 40vw;
      background: #FAEBD7;
    }
  }

  @media screen and (max-width: 1023px) {
    .apenas-desktop {
      display: none;
    }
  }
}
`;