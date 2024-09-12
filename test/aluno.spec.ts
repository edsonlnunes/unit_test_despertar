import { deepEqual, equal, ok, throws } from 'node:assert';
import { describe, it } from 'node:test'
import { Aluno } from '../src/aluno';
import { Resultado } from '../src/resultado';

describe('Aluno class', () => {
    it('Deve criar uma instância valida de aluno', () => {
        const aluno1 = new Aluno('Édson');
        equal(aluno1.nome, 'Édson')
        equal(aluno1.id, 1)
        deepEqual(aluno1.resultados, [])
        aluno1.resultados.push(new Resultado(1, 1))
        deepEqual(aluno1.resultados, [])

        const aluno2 = new Aluno('Gustavo')
        equal(aluno2.nome, 'Gustavo')
        equal(aluno2.id, 2)
    })

    it('Deve retornar falso quando aluno não fez a prova', () => {
        const aluno = new Aluno('Édson');
        equal(aluno.jaFezAProva(1), false)
    })

    // unit test
    it('Deve retornar true quando aluno já fez a prova', () => {
        const aluno = new Aluno('Édson');
        aluno.aplicarResultadoProva(1, 1)
        equal(aluno.jaFezAProva(1), true)
    })

    // unit test
    it('Deve lançar um erro se a quantidade de perguntas for zero ou negativo', () => {
        const aluno = new Aluno('Édson');

        throws(() =>
            aluno.responderAProva(0, []),
            Error('Quantidade de perguntas não pode ser zero ou negativo')
        );

        throws(() =>
            aluno.responderAProva(-3, []),
            Error('Quantidade de perguntas não pode ser zero ou negativo')
        );
    });

    it('Deve lançar um erro se o array de respostas permitidas estiver vazia', () => {
        const aluno = new Aluno('Édson');

        throws(() =>
            aluno.responderAProva(5, []),
            Error('Respostas permitidas não pode ser vazio')
        );
    });

    it('Deve retornar a quantidade correta de respostas', () => {
        const aluno = new Aluno('Édson');
        const qtdPerguntas = 5;
        const respostasPermitidas = ['A', 'B', 'C', 'D'];

        const respostas = aluno.responderAProva(qtdPerguntas, respostasPermitidas);

        equal(respostas.length, qtdPerguntas);
    });

    it('Todas as respostas devem ser permitidas', () => {
        const aluno = new Aluno('Édson');
        const qtdPerguntas = 10;
        const respostasPermitidas = ['A', 'B', 'C', 'D'];

        const respostas = aluno.responderAProva(qtdPerguntas, respostasPermitidas);

        respostas.forEach((resposta) => {
            ok(respostasPermitidas.includes(resposta));
        });
    });

    it('Deve lançar um erro se a nota for menor que zero', () => {
        const aluno = new Aluno('Édson');

        throws(() =>
            aluno.aplicarResultadoProva(-3, 1),
            Error('Nota não pode ser menor que zero')
        );
    });

    it('Deve salvar o resultado da prova se aluno não fez ela ainda', () => {
        const aluno = new Aluno('Édson');
        aluno.aplicarResultadoProva(5, 1);
        deepEqual(aluno.resultados, [new Resultado(1, 5)])
    });

    // unit test
    it('Deve lançar um erro se o aluno já fez a prova', () => {
        const aluno = new Aluno('Édson');
        aluno.aplicarResultadoProva(5, 1);
        throws(() =>
            aluno.aplicarResultadoProva(5, 1),
            Error('Aluno já fez esta prova')
        );
    });
})
