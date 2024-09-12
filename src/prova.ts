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
        let nota = 0;
        for (let index = 0; index < this.#gabarito.length; index++) {
            if (this.#gabarito[index] === respostasAluno[index]) {
                nota++;
            }
        }

        // fornecer nota para o aluno

        return nota;
    }
}