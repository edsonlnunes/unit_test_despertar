import { Aluno } from "./aluno";
import { Utils } from "./utils";

export class Turma {
    readonly id: number
    readonly #alunos: Aluno[]

    get alunos(): Aluno[] {
        return [...this.#alunos];
    }

    constructor() {
        this.id = Utils.gerarIDTurma();
        this.#alunos = [];
    }

    // matricular aluno //set
}
