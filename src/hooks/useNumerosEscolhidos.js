import { useState } from 'react';

const useNumerosEscolhidos = () => {
  const [numerosEscolhidos, setNumerosEscolhidos] = useState([]);

  const adicionarNumero = (numero) => {
    if (!numerosEscolhidos.includes(numero)) {
      setNumerosEscolhidos(numeros => {
        const numerosOrdenados = [...numeros, numero].sort((a, b) => a - b);
        return numerosOrdenados;
      });
    }
  }

  const removerNumero = (numero) => setNumerosEscolhidos(numeros => numeros.filter(n => n !== numero));

  const resetarNumeros = () => setNumerosEscolhidos([]);

  return [numerosEscolhidos, resetarNumeros, adicionarNumero, removerNumero];
}

export default useNumerosEscolhidos;