export function depositar(saldoAtual, valorDeposito) {
    saldoAtual += valorDeposito;
    console.log(`Depósito de ${valorDeposito} realizado com sucesso.`);
    console.log(`Novo saldo: ${saldoAtual}`);
    return saldoAtual;
}

export function exibirSaldo(saldoAtual) {
    console.log(`Seu saldo atual é: ${saldoAtual}`);
}

export function sacar(saldoAtual, valorSaque) {
    if (valorSaque > saldoAtual) {
        console.log('Saldo insuficiente.');
    } else {
        saldoAtual -= valorSaque;
        console.log(`Saque de ${valorSaque} realizado com sucesso.`);
        console.log(`Novo saldo: ${saldoAtual}`);
    }
    return saldoAtual;
}