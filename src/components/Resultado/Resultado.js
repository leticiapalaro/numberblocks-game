import styled from 'styled-components';

const ResultadoContainer = styled.div`
  .destaque-vermelho {
    font-size: 2rem;
    color: red;
    text-shadow: 2px 2px 0px rgba(255, 255, 0, 1);
  }

  .destaque-laranja {
    font-size: 2rem;
    color: #ff9000;
    text-shadow: 2px 2px 0px rgba(255, 255, 0, 1);
  }

  .destaque-verde {
    font-size: 2rem;
    color: green;
    text-shadow: 2px 2px 0px rgba(255, 255, 0, 1);
  }

  .resultado__img-dinamica {
    max-width: 80vw;
    max-height: 50vh;
  }

  .resultado-estatico {
    font-size: 30vh;
    margin: 0 auto;
    background: #1976d2;
    border-radius: 50%;
    width: 40vh;
    color: white;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  }

  @media only screen and (max-width: 768px) {
    .destaque-vermelho {
      font-size: 1.5rem;
    }

    .destaque-laranja {
      font-size: 1.5rem;
    }

    .destaque-verde {
      font-size: 1.5rem;
    }

    .resultado__img-dinamica {
      max-width: 80vw;
      max-height: 30vh;
    }
  }
`

export const Resultado = (numeroAlvo, numeroEscolhido, numerosEscolhidos, contador, imgDinamica) => {
  if (numeroEscolhido == numeroAlvo) {
    return(
      <ResultadoContainer>
        {imgDinamica && <img src={`./img/${numeroAlvo}.webp`} className="resultado__img-dinamica" alt={`imagem do número ${numeroAlvo}`}/>}
        {!imgDinamica &&
          <p className="resultado-estatico">{numeroAlvo}</p>
        }
        <br />
        Parabéns!<br />
        Você acertou em<br />
        <span className="destaque-verde">{contador} {contador == 1 ? 'tentativa' : 'tentativas'}</span>
      </ResultadoContainer>
    )
  }else{
    let frasePista = (
      <>O número misterioso é<br />
        {numeroEscolhido < numeroAlvo ?
          (<><span className="destaque-vermelho">MAIOR </span>do que <span className="destaque-vermelho">{numeroEscolhido}</span>!</>) :
          (<><span className="destaque-laranja">MENOR </span>do que <span className="destaque-laranja">{numeroEscolhido}</span>!</>)}
      </>
    )

    if (numerosEscolhidos.includes(numeroEscolhido)) frasePista = (<><span className="destaque-vermelho">Esse já foi!</span><br />{frasePista}</>)

    return <ResultadoContainer>{frasePista}</ResultadoContainer>
  }
}