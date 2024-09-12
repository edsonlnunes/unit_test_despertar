import { Aluno } from "./aluno"
import { Utils } from "./utils"

export class Prova {
    readonly id: number
    readonly #gabarito: string[]
    readonly #respostasPermitidas: string[]

    get gabarito(): string[] {
        return [...this.#gabarito]
    }

    get respostasPermitidas(): string[] {
        return [...this.#respostasPermitidas]
    }

    constructor(gabarito: string[], respostasPermitidas: string[]) {
        this.id = Utils.gerarIDProva();
        this.#gabarito = gabarito
        this.#respostasPermitidas = respostasPermitidas
    }

    public aplicarProva(aluno: Aluno) {
        // verificar se aluno já fez a prova
        if (aluno.jaFezAProva(this.id)) {
            throw new Error('Aluno já fez esta prova')
        }

        // pedir pro aluno marcar as resposta da prova
        const respostasAluno = aluno.responderAProva(this.#gabarito.length, this.#respostasPermitidas)

        // corrigir a prova
        const nota = this.#corrigirProva(respostasAluno)

        aluno.aplicarResultadoProva(nota, this.id)

        // fornecer nota para o aluno
        return nota;
    }

    // private methods
    #corrigirProva(respostas: string[]): number {
        let nota = 0;
        for (var i = 0; i < this.#gabarito.length; i++) {
            if (respostas[i] == this.#gabarito[i]) {
                nota += 1;
            }
        }
        return nota;
    }
}