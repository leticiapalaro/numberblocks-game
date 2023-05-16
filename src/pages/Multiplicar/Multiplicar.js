import useOperacoesMatematicas from "../../hooks/useOperacoesMatematicas"
import BaseJogos from "../../components/BaseJogos"

export const Multiplicar = () => {
  const [numeros, resetarNumerosAleatorios,,, multiplicar] = useOperacoesMatematicas(10)

  return (
    <BaseJogos
      fraseInicialResultado={(<>Acerte o resultado da<br/><span className="destaque-roxo">MULTIPLICAÇÃO</span></>)}
      valorAlvo={multiplicar}
      resultadoComImgDinamica={multiplicar <= 40? true : false}
      resetarOperacaoMatematica={resetarNumerosAleatorios}
      numerosOperacaoMatematica={numeros}
      escalaImgNumeros={1.3}
      sinalOperacaoMatematica='x'
      textoAjuda='Digite o resultado da MULTIPLICAÇÃO'
      rangeMax={100}
      tamanhoMax={3}
      mostrarOperacaoMatematica={true}
      mostrarNumerosDescartados={false}
    />
  )
}