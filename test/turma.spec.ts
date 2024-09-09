import { deepEqual, equal } from "node:assert";
import { describe, it } from "node:test";
import { Aluno } from "src/aluno";
import { Turma } from "src/turma";

describe('Turma class', () => {
    it('Deve criar instâncias de Turma corretamente', () => {
        const turma1 = new Turma();
        equal(turma1.id, 1);
        deepEqual(turma1.alunos, [])
        turma1.alunos.push(new Aluno(''))
        deepEqual(turma1.alunos, [])

        const turma2 = new Turma()
        equal(turma2.id, 2)
        deepEqual(turma2.alunos, [])
    })
})

// equal = valores primitivos (number, string, boolean)
// deepEqual = valores que não são primitivos (objetos, arrays...)