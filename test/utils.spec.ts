import { describe, it } from 'node:test';
import { equal } from 'node:assert'
import { Utils } from 'src/utils';

describe('Utils class', () => {
    // cenário/caso de teste
    it('Deve retornar um ID de aluno incrementado', () => {
        const id1 = Utils.gerarIDAluno();
        equal(id1, 1)

        equal(Utils.gerarIDAluno(), 2)
        equal(Utils.gerarIDAluno(), 3)
    })

    it('Deve retornar um ID de turma incrementado', () => {
        equal(Utils.gerarIDTurma(), 1)
        equal(Utils.gerarIDTurma(), 2)
        equal(Utils.gerarIDTurma(), 3)
    })

    it('Deve retornar um ID de prova incrementado', () => {
        equal(Utils.gerarIDProva(), 1)
        equal(Utils.gerarIDProva(), 2)
        equal(Utils.gerarIDProva(), 3)
    })
})