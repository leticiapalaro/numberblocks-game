import useOperacoesMatematicas from "../../hooks/useOperacoesMatematicas"
import BaseJogos from "../../components/BaseJogos"

export const Adivinhar = () => {
  const [numeros, resetarNumerosAleatorios] = useOperacoesMatematicas(10)

  return (
    <BaseJogos
      fraseInicialResultado={(<>Tente acertar<br/><span className="destaque-roxo">o número secreto!</span></>)}
      valorAlvo={numeros[0]}
      resultadoComImgDinamica={true}
      resetarOperacaoMatematica={resetarNumerosAleatorios}
      numerosOperacaoMatematica={numeros}
      escalaImgNumeros={1}
      sinalOperacaoMatematica=''
      textoAjuda='Digite um número de 0 a 10'
      rangeMax={10}
      tamanhoMax={2}
      mostrarOperacaoMatematica={false}
      mostrarNumerosDescartados={true}
    />
  )
}