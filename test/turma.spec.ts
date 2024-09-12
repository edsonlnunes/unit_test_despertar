import assert, { deepEqual, equal, throws } from "node:assert";
import { describe, it } from "node:test";
import sinon from 'sinon';
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

    it('Deve matricular e popular a lista de alunos na turma', () => {
        const turma = new Turma();
        const aluno1 = new Aluno('Aluno 1')
        const aluno2 = new Aluno('Aluno 2')

        turma.matricularAluno(aluno1);
        deepEqual(turma.alunos, [aluno1])

        turma.matricularAluno(aluno2)
        deepEqual(turma.alunos, [aluno1, aluno2])
    })

    it('Deve lançar um erro ao matricular um aluno já matriculado', () => {
        const turma = new Turma();
        const aluno1 = new Aluno('Aluno 1')

        turma.matricularAluno(aluno1);
        deepEqual(turma.alunos, [aluno1])

        // 1 maneira
        throws(() => turma.matricularAluno(aluno1), Error('Aluno já matriculado'));
        // 2 maneira
        // try {
        //     turma.matricularAluno(aluno1)
        // } catch (error: any) {
        //     equal(error.message, 'Aluno já matriculado')
        // }
        deepEqual(turma.alunos, [aluno1])
    })

    it('Deve aplicar a prova na turma com sucesso', () => {
        const turma = new Turma();
        const aluno1 = new Aluno('Aluno 1');
        const aluno2 = new Aluno('Aluno 2');

        turma.matricularAluno(aluno1);
        turma.matricularAluno(aluno2);

        const prova = {
            aplicarProva: sinon.stub()
        }

        turma.aplicarProvaNaTurma(prova as any)

        assert(prova.aplicarProva.calledTwice)
        assert(prova.aplicarProva.calledWith(aluno1))
        assert(prova.aplicarProva.calledWith(aluno2))
    })

    it('Deve lançar um erro se o metodo aplicarProva der erro', () => {
        const turma = new Turma();
        const aluno1 = new Aluno('Aluno 1');
        const aluno2 = new Aluno('Aluno 2');

        turma.matricularAluno(aluno1);
        turma.matricularAluno(aluno2);

        const prova = {
            aplicarProva: sinon.stub().throws(new Error('Erro qualquer'))
        }

        throws(() => turma.aplicarProvaNaTurma(prova as any), Error('Erro qualquer'))
        assert(prova.aplicarProva.calledOnce)
    })
})


// equal = valores primitivos (number, string, boolean)
// deepEqual = valores que não são primitivos (objetos, arrays...)