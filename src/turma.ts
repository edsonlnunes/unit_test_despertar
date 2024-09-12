import { Aluno } from "./aluno";
import { Prova } from "./prova";
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

    matricularAluno(novoAluno: Aluno): void {
        if (this.#alunos.find(aluno => aluno.id === novoAluno.id)) {
            throw new Error('Aluno já matriculado')
        }
        this.#alunos.push(novoAluno);
    }

    aplicarProvaNaTurma(prova: Prova) {
        for (const aluno of this.#alunos) {
            prova.aplicarProva(aluno);
        }
    }
}