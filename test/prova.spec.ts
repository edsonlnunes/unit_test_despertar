import { describe, it } from "node:test";
import sinon from 'sinon';
import { Prova } from "../src/prova";
import assert, { deepEqual, equal, throws } from "node:assert";

describe('Prova class', () => {
    it('Deve criar instâncias de Provas corretamente', () => {
        const prova1 = new Prova(['A', 'A', 'B', 'A'], ['A', 'B', 'C']);
        equal(prova1.id, 1)
        deepEqual(prova1.gabarito, ['A', 'A', 'B', 'A'])
        deepEqual(prova1.respostasPermitidas, ['A', 'B', 'C'])

        const prova2 = new Prova([], [])
        equal(prova2.id, 2)
    })

    it('Deve lançar um erro se o aluno já fez a prova', () => {
        const prova = new Prova([], []);

        const aluno = {
            jaFezAProva: sinon.stub().returns(true)
        }

        throws(() => prova.aplicarProva(aluno as any), Error('Aluno já fez esta prova'))
    })

    it('Deve garantir que o aluno responda a prova', () => {
        const prova = new Prova(['A', 'B', 'A'], ['A', 'B']);

        const aluno = {
            jaFezAProva: sinon.stub().returns(false),
            responderAProva: sinon.stub().returns([])
        }

        prova.aplicarProva(aluno as any)

        assert(aluno.responderAProva.calledOnce)
        assert(aluno.responderAProva.calledOnceWith(3, ['A', 'B']))
    })

    it('Deve aplicar a prova no aluno e retornar a nota tirada', () => {
        const prova = new Prova(['A', 'B', 'A', 'A'], ['A', 'B']);

        const aluno = {
            jaFezAProva: sinon.stub().returns(false),
            responderAProva: sinon.stub().returns(['B', 'A', 'A', 'A'])
        }

        const notaAluno = prova.aplicarProva(aluno as any)

        equal(notaAluno, 2)
    })
})