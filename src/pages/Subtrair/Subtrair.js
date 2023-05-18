import useOperacoesMatematicas from "../../hooks/useOperacoesMatematicas"
import BaseJogos from "../../components/BaseJogos"

export const Subtrair= () => {
  const [numeros, resetarNumerosAleatorios, , subtrair] = useOperacoesMatematicas(10)

  return (
    <BaseJogos
      fraseInicialResultado={(<>Acerte o resultado da<br/><span className="destaque destaque-amarelo">SUBTRAÇÃO</span></>)}
      valorAlvo={subtrair}
      resultadoComImgDinamica={true}
      resetarOperacaoMatematica={resetarNumerosAleatorios}
      numerosOperacaoMatematica={numeros}
      escalaImgNumeros={1.3}
      sinalOperacaoMatematica='-'
      textoAjuda='Digite o resultado da SUBTRAÇÃO'
      rangeMax={10}
      tamanhoMax={2}
      mostrarOperacaoMatematica={true}
      mostrarNumerosDescartados={false}
    />
  )
}