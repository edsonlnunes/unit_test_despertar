import { equal } from 'node:assert';
import { describe, it } from 'node:test'
import { Aluno } from 'src/aluno';

describe('Aluno class', () => {
    it('Deve criar uma instância valida de aluno', () => {
        const aluno1 = new Aluno('Édson');
        equal(aluno1.nome, 'Édson')
        equal(aluno1.id, 1)

        const aluno2 = new Aluno('Gustavo')
        equal(aluno2.nome, 'Gustavo')
        equal(aluno2.id, 2)
    })
})
