const cartas = [
    {
        nome: "Broly",
        imagem: "Broly.jpg"
    },

    {
        nome: "Gogeta",
        imagem: "Gogeta.jpg"
    },

    {
        nome: "Goku",
        imagem: "Goku.jpg"
    },

    {
        nome: "Jiren",
        imagem: "Jiren.jpg"
    },

    {
        nome: "omegaShenron",
        imagem: "omegaShenron.jpg"
    },

    {
        nome: "Vegeta",
        imagem: "Vegeta.jpg"
    },

    {
        nome: "Broly",
        imagem: "Broly.jpg"
    },

    {
        nome: "Gogeta",
        imagem: "Gogeta.jpg"
    },

    {
        nome: "Goku",
        imagem: "Goku.jpg"
    },

    {
        nome: "Jiren",
        imagem: "Jiren.jpg"
    },

    {
        nome: "omegaShenron",
        imagem: "omegaShenron.jpg"
    },

    {
        nome: "Vegeta",
        imagem: "Vegeta.jpg"
    }
];

const quadroCartas = document.querySelector(".quadro__cartas");

function criarQuadroDeCartas()  {
    for(let i = 0; i < cartas.length; i++)  {
        let carta = document.createElement("img");

        carta.id = i;

        carta.cl = cartas[i].nome;

        carta.src = "img/Shenlong.jpg";

        quadroCartas.appendChild(carta);
    }
}