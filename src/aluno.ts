import { Resultado } from "./resultado";
import { Utils } from "./utils";

export class Aluno {
    readonly nome: string;
    readonly id: number;
    readonly #resultados: Resultado[];

    constructor(nome: string) {
        this.nome = nome;
        this.id = Utils.gerarIDAluno();
        this.#resultados = [];
    }

    jaFezAProva(idProva: number): boolean {
        return true;
    }

    responderAProva(qtdPerguntas: number, respostasPermitidas: string[]): string[] {
        return [];
    }
}

