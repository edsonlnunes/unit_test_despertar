import { describe, it } from "node:test";
import { Resultado } from "../src/resultado";
import { equal } from "node:assert";

describe('Resultado class', () => {
    it('Deve criar duas instancias corretamente', () => {
        const result1 = new Resultado(1, 5);
        equal(result1.idProva, 1);
        equal(result1.nota, 5)

        const result2 = new Resultado(2, 8);
        equal(result2.idProva, 2);
        equal(result2.nota, 8)
    })
})