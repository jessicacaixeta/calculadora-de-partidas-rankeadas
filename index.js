
// Função para calcular o saldo de rankeadas e determinar o nível
function calcularSaldoELevel(vitorias, derrotas) {
    // Calcula o saldo de partidas rankeadas
    const saldoVitorias = vitorias - derrotas;
  
    // Variável para armazenar o nível do jogador
    let nivel;
  
    // Estruturas de decisão para determinar o nível baseado nas vitórias
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else if (vitorias >= 101) {
      nivel = "Imortal";
    }
  
    // Retorna a mensagem com o saldo e nível
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
  }
  
  // Testando a função com exemplos
  let vitorias = 65; // Exemplo de vitórias
  let derrotas = 20; // Exemplo de derrotas
  
  // Chamando a função e exibindo o resultado
  let resultado = calcularSaldoELevel(vitorias, derrotas);
  console.log(resultado);