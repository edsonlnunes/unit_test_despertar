import { Utils } from "./utils";

export class Aluno {
    readonly nome: string;
    readonly id: number;

    constructor(nome: string) {
        this.nome = nome;
        this.id = Utils.gerarIDAluno();
    }
}

