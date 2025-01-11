function calcularFaturamentoPorEstado() {
    const faturamentoMensalPorEstado = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
    };
    
    const valorTotal = Object.values(faturamentoMensalPorEstado).reduce((total, valor) => total + valor, 0);

    for (const estado in faturamentoMensalPorEstado) {
      const valorPorEstado = faturamentoMensalPorEstado[estado];
      const percentual = (valorPorEstado/valorTotal) * 100;
      console.log(`${estado}: R$ ${valorPorEstado.toFixed(2)} - ${percentual.toFixed(2)}%`);
    }
}

calcularFaturamentoPorEstado();