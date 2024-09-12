export class Resultado {
    readonly idProva: number;
    readonly nota: number;

    constructor(idProva: number, nota: number) {
        this.idProva = idProva;
        this.nota = nota;
    }
}