import { useState } from 'react';

const useContador = (contadorInicial) => {
  const [contador, setContador] = useState(contadorInicial);

  const incrementar = () => setContador(contadorAnterior => contadorAnterior + 1);

  const decrementar = () => setContador(contadorAnterior => contadorAnterior - 1);

  const resetar = () => setContador(contadorInicial);

  return [contador, resetar, incrementar, decrementar];
};

export default useContador;