class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 200, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Conan", 30, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Li", 25, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Shadow", 22, "ninja");
heroi4.atacar();
