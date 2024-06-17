import PromptSync from "prompt-sync";
import { depositar, exibirSaldo, sacar } from "./financeiro.js";

let ler = PromptSync();
let saldoAtual = 0;

while (true) {
    console.log('Qual é seu saldo atual? (Digite "c" para cancelar)');
    let saldo = ler();
    if (saldo.toLowerCase() === 'c') {
        console.log('Operação cancelada.');
        continue;
    }
    saldoAtual = Number(saldo);

    console.log('Quanto deseja depositar? (Digite "c" para cancelar)');
    let valorDeposito = ler();
    if (valorDeposito.toLowerCase() === 'c') {
        console.log('Operação cancelada.');
        continue;
    }
    saldoAtual = depositar(saldoAtual, Number(valorDeposito));

    console.log('Deseja sacar? (Digite "c" para cancelar)');
    let escolha = ler();
    if (escolha.toLowerCase() === 'c') {
        console.log('Operação cancelada.');
        continue;
    }
    if (escolha.toLowerCase() === 'sim') {
        console.log('Quanto deseja sacar? (Digite "c" para cancelar)');
        let valorSaque = ler();
        if (valorSaque.toLowerCase() === 'c') {
            console.log('Operação cancelada.');
            continue;
        saldoAtual = sacar(saldoAtual, Number(valorSaque));
    }

    console.log('Deseja finalizar o programa? (Digite "c" para cancelar)');
    let segundaEscolha = ler();
    if (segundaEscolha.toLowerCase() === 'c') {
        console.log('Operação cancelada.');
        continue;
    }
    if (segundaEscolha.toLowerCase() === 'sim') {
        exibirSaldo(saldoAtual);
        break;
    }
}
}