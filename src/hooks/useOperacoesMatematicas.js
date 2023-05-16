import { useState } from "react";
import { gerarNumeroAleatorio } from "../utils/utils";

const useOperacoesMatematicas = (range) => {
  const gerarNumerosAleatorios = () => [gerarNumeroAleatorio(10), gerarNumeroAleatorio(10)].sort((a, b) => b - a)
  const [numeros, setNumeros] = useState(gerarNumerosAleatorios())
  const resetarNumeros = () => setNumeros(gerarNumerosAleatorios())
  const somar = numeros[0]+numeros[1]
  const subtrair = numeros[0]-numeros[1]
  const multiplicar = numeros[0]*numeros[1]
  return [numeros, resetarNumeros, somar, subtrair, multiplicar];
}

export default useOperacoesMatematicas;