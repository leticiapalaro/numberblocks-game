import { useState, useEffect } from "react"

import useNumerosEscolhidos from "../../hooks/useNumerosEscolhidos"
import useContador from "../../hooks/useContador"

import Resultado from "../../components/Resultado"
import TelaVitoria from "../../components/TelaVitoria"
import FormularioTentativas from "../../components/FormularioTentativas"

export const BaseJogos = (props) => {
  const [numerosEscolhidos, resetarNumerosEscolhidos, adicionarNumeroEscolhido] = useNumerosEscolhidos([])
  const [contador, resetarContador, aumentarContador] = useContador(1)

  const [numeroEscolhido, setNumeroEscolhido] = useState("")
  const [resultado, setResultado] = useState(props.fraseInicialResultado)
  const [vitoria, setVitoria] = useState(false)

  const handleSubmitFormularioInicial = (event) => {
    event.preventDefault()
    setResultado(Resultado(props.valorAlvo, numeroEscolhido, numerosEscolhidos, contador, props.resultadoComImgDinamica))
    if (!numerosEscolhidos.includes(numeroEscolhido)) aumentarContador()
    if (props.valorAlvo != numeroEscolhido) adicionarNumeroEscolhido(numeroEscolhido)
    else setVitoria(true)
    setNumeroEscolhido('')
  }

  const handlePressionarEnter = (event) => {
    if (event.key === 'Enter' && vitoria) {
      event.preventDefault()
      handleSubmitTentarNovamente(event)
    }
  }

  useEffect(() => {
    document.addEventListener('keypress', handlePressionarEnter)
    return () => document.removeEventListener('keypress', handlePressionarEnter)
  })

  const handleSubmitTentarNovamente = (event) => {
    event.preventDefault()
    resetarContador()
    setResultado(props.fraseInicialResultado)
    props.resetarOperacaoMatematica()
    resetarNumerosEscolhidos()
    setVitoria(false)
  }

  return (
    <>
      {!vitoria &&
        <FormularioTentativas
          onSubmit={handleSubmitFormularioInicial}
          pista={resultado}
          primeiroNumero={props.numerosOperacaoMatematica[0]}
          segundoNumero={props.numerosOperacaoMatematica[1]}
          escala={props.escalaImgNumeros}
          sinal={props.sinalOperacaoMatematica}
          textoAjuda={props.textoAjuda}
          rangeMax={props.rangeMax}
          tamanhoMax={props.tamanhoMax}
          value={numeroEscolhido}
          onChange={setNumeroEscolhido}
          numerosDescartados={numerosEscolhidos}
          mostrarOperacaoMatematica={props.mostrarOperacaoMatematica}
          mostrarNumerosDescartados={props.mostrarNumerosDescartados}
        />
      }
      {vitoria &&
        <TelaVitoria
          resultado={resultado}
          onClick={handleSubmitTentarNovamente}
        />
      }
    </>
  )
}