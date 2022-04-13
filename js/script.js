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

let cartasClicadas = [];
let pontos = 0;

const quadroCartas = document.querySelector(".quadro__cartas");

function criarQuadroDeCartas()  {
    for(let i = 0; i < cartas.length; i++)  {
        let carta = document.createElement("img");

        carta.id = i;

        carta.title = cartas[i].nome;

        carta.src = "img/Shenlong.jpg";

        quadroCartas.appendChild(carta);

        carta.addEventListener("click", clicarNaCarta);
    }
}

function clicarNaCarta()    {
    let carta = this;

    carta.src = `img/${cartas[carta.id].imagem}`;

    cartasClicadas.push(carta);

    setTimeout(() => {
        if(cartasClicadas.length == 2) {
            let cartaClicadaUm = cartasClicadas[0], cartaClicadaDois = cartasClicadas[1];
    
            if(cartaClicadaUm.title == cartaClicadaDois.title)  {
                pontos++;
            } 
            else    {
                cartaClicadaUm.src = "img/Shenlong.jpg";
                cartaClicadaDois.src = "img/Shenlong.jpg";
            }
    
            cartasClicadas = [];
        }
    }, 1000);
}