import fs from 'fs/promises';

async function carregarJSON() {
  try {
    const dados = await fs.readFile('./dados/faturamento.json', 'utf-8');
    const jsonData = JSON.parse(dados);
    return jsonData
  } catch (error) {
    console.error('Erro ao carregar o arquivo JSON:', error);
  }
}


async function calcularSoma() {
    const jsonData = await carregarJSON();

    const menorFaturamento = jsonData
        .filter(f => f.valor > 0)
        .reduce((menor, f) => (f.valor < menor ? f.valor : menor), Infinity);

    const maiorFaturamento = jsonData
      .filter(f => f.valor > 0)
      .reduce((maior, f) => (f.valor > maior ? f.valor : maior), -Infinity);

    const somaFaturamento = jsonData
      .filter(f => f.valor > 0)
      .reduce((soma, f) => soma + f.valor, 0);

    const diasComFaturamento = jsonData.filter(f => f.valor > 0).length;
    const mediaMensal = somaFaturamento / diasComFaturamento;

    const diasAcimaDaMedia = jsonData.filter(f => f.valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média mensal: ${diasAcimaDaMedia}`)
}

console.log(calcularSoma())