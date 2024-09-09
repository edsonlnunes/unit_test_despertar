export class Utils {
    static #contadorIDAluno = 0
    static #contadorIDTurma = 0

    static gerarIDAluno(): number {
        this.#contadorIDAluno++
        return this.#contadorIDAluno
    }

    static gerarIDTurma(): number {
        this.#contadorIDTurma++
        return this.#contadorIDTurma
    }
}

// .test => testes integração
// .spec => testes de unidade


// CI = CONTINUOUS INTEGRATION
//