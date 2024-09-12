import { Resultado } from "./resultado";
import { Utils } from "./utils";

export class Aluno {
    readonly nome: string;
    readonly id: number;
    readonly #resultados: Resultado[];

    get resultados(): Resultado[] {
        return [...this.#resultados];
    }

    constructor(nome: string) {
        this.nome = nome;
        this.id = Utils.gerarIDAluno();
        this.#resultados = [];
    }

    jaFezAProva(idProva: number): boolean {
        return this.#resultados.some(resultado => resultado.idProva === idProva);
    }

    responderAProva(qtdPerguntas: number, respostasPermitidas: string[]): string[] {
        if (qtdPerguntas <= 0) {
            throw new Error('Quantidade de perguntas não pode ser zero ou negativo');
        }

        if (respostasPermitidas.length === 0) {
            throw new Error('Respostas permitidas não pode ser vazio')
        }

        const respostas: string[] = [];
        for (let i = 0; i < qtdPerguntas; i++) {
            const indexResposta = Math.floor(Math.random() * respostasPermitidas.length)
            respostas.push(respostasPermitidas[indexResposta]);
        }
        return respostas;
    }

    aplicarResultadoProva(nota: number, idProva: number): void {
        if (nota < 0) {
            throw new Error('Nota não pode ser menor que zero');
        }
        if (this.#resultados.some(resultado => resultado.idProva === idProva)) {
            throw new Error("Aluno já fez esta prova")
        }
        this.#resultados.push(new Resultado(idProva, nota))
    }
}

