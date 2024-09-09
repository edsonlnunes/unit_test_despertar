import { describe, it } from 'node:test';
import { equal } from 'node:assert'
import { Utils } from 'src/utils';

describe('Utils class', () => {
    it('Deve retornar um ID de aluno incrementado', () => {
        // chamar o gerar id aluno
        // e ele deve retornar 1, 2, 3, 4 ...
        const id1 = Utils.gerarIDAluno();
        equal(id1, 1)

        equal(Utils.gerarIDAluno(), 2)
        equal(Utils.gerarIDAluno(), 3)
    })

    it('Deve retornar um ID de turma incrementado', () => {
        // chamar o gerar id turma
        // e ele deve retornar 1, 2, 3, 4 ...
        equal(Utils.gerarIDTurma(), 1)
        equal(Utils.gerarIDTurma(), 2)
        equal(Utils.gerarIDTurma(), 3)
    })
})