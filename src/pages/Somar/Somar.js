import useOperacoesMatematicas from "../../hooks/useOperacoesMatematicas"
import BaseJogos from "../../components/BaseJogos"

export const Somar = () => {
  const [numeros, resetarNumerosAleatorios, somar] = useOperacoesMatematicas(10)

  return (
    <BaseJogos
      fraseInicialResultado={(<>Acerte o resultado da<br/><span className="destaque destaque-amarelo">SOMA</span></>)}
      valorAlvo={somar}
      resultadoComImgDinamica={true}
      resetarOperacaoMatematica={resetarNumerosAleatorios}
      numerosOperacaoMatematica={numeros}
      escalaImgNumeros={1.3}
      sinalOperacaoMatematica='+'
      textoAjuda='Digite o resultado da SOMA'
      rangeMax={20}
      tamanhoMax={2}
      mostrarOperacaoMatematica={true}
      mostrarNumerosDescartados={false}
    />
  )
}