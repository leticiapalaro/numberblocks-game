import styled from 'styled-components';

const ResultadoContainer = styled.div`
  color: #1976D2;

  .resultado__img-dinamica {
    height:20vh;
  }

  .resultado-estatico {
    font-size: 5rem;
  }

  .area-img-numeros {
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;

    .destaque {
      font-size: 2rem;
    }

    .area-img-numeros{
      width: 16vw;
      height: 16vw;
    }

    .resultado__img-dinamica {
      height:30vh;
    }

    .resultado-estatico {
      font-size: 13rem;
      color: green;
    }
  }
`

export const Resultado = (numeroAlvo, numeroEscolhido, numerosEscolhidos, contador, imgDinamica) => {
  if (numeroEscolhido == numeroAlvo) {
    return (
      <ResultadoContainer>
        <div className='area-img-numeros'>
          {imgDinamica && <img src={`./img/${numeroAlvo}.webp`} className="resultado__img-dinamica" alt={`imagem do número ${numeroAlvo}`} />}
          {!imgDinamica &&
            <p className="resultado-estatico">{numeroAlvo}</p>
          }
        </div>
        <br />
        Parabéns!<br />
        Você acertou em<br />
        <span className="destaque destaque-verde">{contador} {contador == 1 ? 'tentativa' : 'tentativas'}</span>
      </ResultadoContainer>
    )
  } else {
    let frasePista = (
      <>Olha a dica!<br />
        {numeroEscolhido < numeroAlvo ?
          (<><span className="destaque destaque-vermelho">MAIOR </span>do que <span className="destaque destaque-vermelho">{numeroEscolhido}</span>!</>) :
          (<><span className="destaque destaque-laranja">MENOR </span>do que <span className="destaque destaque-laranja">{numeroEscolhido}</span>!</>)}
      </>
    )

    if (numerosEscolhidos.includes(numeroEscolhido)) frasePista = (<><span className="destaque destaque-vermelho">Esse já foi!</span><br />{frasePista}</>)

    return <ResultadoContainer>{frasePista}</ResultadoContainer>
  }
}