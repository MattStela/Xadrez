//pega a tag <body>
const body = document.querySelector("body");

//pega todas as peças pela tag <img>
const imagens = document.getElementsByTagName('img');

//pega todas as posições do tabuleiro e põe em array
const positions = [...document.querySelectorAll(".pos")];

// positions[0].firstChild.src.replace("http://127.0.0.1:5500/images/pieces/Piece=","").replace(",%20Side="," ").replace(".png"," on ")
var side1 = "White";
var side2 = "Black";

const peao1_brancas = document.createElement("img");
const peao2_brancas = document.createElement("img");
const peao3_brancas = document.createElement("img");
const peao4_brancas = document.createElement("img");
const peao5_brancas = document.createElement("img");
const peao6_brancas = document.createElement("img");
const peao7_brancas = document.createElement("img");
const peao8_brancas = document.createElement("img");
const torre2_brancas = document.createElement("img");
const cavalo2_brancas = document.createElement("img");
const bispo2_brancas = document.createElement("img");
const rei_brancas = document.createElement("img");
const rainha_brancas = document.createElement("img");
const bispo_brancas = document.createElement("img");
const cavalo_brancas = document.createElement("img");
const torre_brancas = document.createElement("img");

const peao1_pretas = document.createElement("img");
const peao2_pretas = document.createElement("img");
const peao3_pretas = document.createElement("img");
const peao4_pretas = document.createElement("img");
const peao5_pretas = document.createElement("img");
const peao6_pretas = document.createElement("img");
const peao7_pretas = document.createElement("img");
const peao8_pretas = document.createElement("img");
const torre2_pretas = document.createElement("img");
const cavalo2_pretas = document.createElement("img");
const bispo2_pretas = document.createElement("img");
const rei_pretas = document.createElement("img");
const rainha_pretas = document.createElement("img");
const bispo_pretas = document.createElement("img");
const cavalo_pretas = document.createElement("img");
const torre_pretas = document.createElement("img");

function setSource() {
    peao1_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao2_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao3_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao4_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao5_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao6_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao7_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    peao8_brancas.src = "./images/pieces/Piece=Pawn, Side=" + side1 + ".png";
    torre2_brancas.src = "./images/pieces/Piece=Rook, Side=" + side1 + ".png";
    cavalo2_brancas.src = "./images/pieces/Piece=Knight, Side=" + side1 + ".png";
    bispo2_brancas.src = "./images/pieces/Piece=Bishop, Side=" + side1 + ".png";
    rei_brancas.src = "./images/pieces/Piece=King, Side=" + side1 + ".png";
    rainha_brancas.src = "./images/pieces/Piece=Queen, Side=" + side1 + ".png";
    bispo_brancas.src = "./images/pieces/Piece=Bishop, Side=" + side1 + ".png";
    cavalo_brancas.src = "./images/pieces/Piece=knight, Side=" + side1 + ".png";
    torre_brancas.src = "./images/pieces/Piece=Rook, Side=" + side1 + ".png";

    peao1_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao2_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao3_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao4_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao5_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao6_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao7_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    peao8_pretas.src = "./images/pieces/Piece=Pawn, Side=" + side2 + ".png";
    torre2_pretas.src = "./images/pieces/Piece=Rook, Side=" + side2 + ".png";
    cavalo2_pretas.src = "./images/pieces/Piece=Knight, Side=" + side2 + ".png";
    bispo2_pretas.src = "./images/pieces/Piece=Bishop, Side=" + side2 + ".png";
    rei_pretas.src = "./images/pieces/Piece=King, Side=" + side2 + ".png";
    rainha_pretas.src = "./images/pieces/Piece=Queen, Side=" + side2 + ".png";
    bispo_pretas.src = "./images/pieces/Piece=Bishop, Side=" + side2 + ".png";
    cavalo_pretas.src = "./images/pieces/Piece=knight, Side=" + side2 + ".png";
    torre_pretas.src = "./images/pieces/Piece=Rook, Side=" + side2 + ".png";
}

//zera o tabuleiro
function zeraOTabuleiro() {

    //cria uma variável com a quantidade das imagens
    var l = imagens.length;

    for (var i = 0; i < l; i++) {
        imagens[0].parentNode.removeChild(imagens[0]);
    }
}

function organizaPecas(){
    //================== ORGANIZA AS BRANCAS ==================

    document.getElementById("pos_h1").appendChild(torre2_brancas);
    document.getElementById("pos_g1").appendChild(cavalo2_brancas);
    document.getElementById("pos_f1").appendChild(bispo2_brancas);
    document.getElementById("pos_e1").appendChild(rei_brancas);
    document.getElementById("pos_d1").appendChild(rainha_brancas);
    document.getElementById("pos_c1").appendChild(bispo_brancas);
    document.getElementById("pos_b1").appendChild(cavalo_brancas);
    document.getElementById("pos_a1").appendChild(torre_brancas);
    document.getElementById("pos_a2").appendChild(peao1_brancas);
    document.getElementById("pos_b2").appendChild(peao2_brancas);
    document.getElementById("pos_c2").appendChild(peao3_brancas);
    document.getElementById("pos_d2").appendChild(peao4_brancas);
    document.getElementById("pos_e2").appendChild(peao5_brancas);
    document.getElementById("pos_f2").appendChild(peao6_brancas);
    document.getElementById("pos_g2").appendChild(peao7_brancas);
    document.getElementById("pos_h2").appendChild(peao8_brancas);

    //================== ORGANIZA AS PRETAS ==================

    document.getElementById("pos_a8").appendChild(torre_pretas);
    document.getElementById("pos_b8").appendChild(cavalo_pretas);
    document.getElementById("pos_c8").appendChild(bispo_pretas);
    document.getElementById("pos_a8").appendChild(torre_pretas);
    document.getElementById("pos_d8").appendChild(rainha_pretas);
    document.getElementById("pos_e8").appendChild(rei_pretas);
    document.getElementById("pos_f8").appendChild(bispo2_pretas);
    document.getElementById("pos_g8").appendChild(cavalo2_pretas);
    document.getElementById("pos_h8").appendChild(torre2_pretas);
    document.getElementById("pos_a7").appendChild(peao1_pretas);
    document.getElementById("pos_b7").appendChild(peao2_pretas);
    document.getElementById("pos_c7").appendChild(peao3_pretas);
    document.getElementById("pos_d7").appendChild(peao4_pretas);
    document.getElementById("pos_e7").appendChild(peao5_pretas);
    document.getElementById("pos_f7").appendChild(peao6_pretas);
    document.getElementById("pos_g7").appendChild(peao7_pretas);
    document.getElementById("pos_h7").appendChild(peao8_pretas);
}

// ao clicar no botão começar, executa
function comecar() {

    zeraOTabuleiro();
    setSource();
    organizaPecas();

    //seta o atributo draggable = true em todas as tag imagens
    var i = 0;
    while (i < imagens.length) {
        imagens[i].setAttribute("draggable", "true");
        i++;
    }

    identificarPosicaoDasPecas();
    moverPecas();
}

function moverPecas() {

    const arrastaveis = document.querySelectorAll("[draggable='true']");
    const containerSoltar = document.querySelectorAll(".pos");

    arrastaveis.forEach((peca) => {
        peca.addEventListener("dragstart", dragstart);
    })

    function dragstart() {
        this.classList.add("arrastando");
    }
    containerSoltar.forEach((casa) => {
        casa.addEventListener("dragover", dragover);
        casa.addEventListener("dragleave", dragleave);
    })

    function dragover() {
        this.style.backgroundColor="rgb(44, 105, 23)";
        const elementoArrastado = document.querySelector(".arrastando");
        this.appendChild(elementoArrastado);
    }

    function dragleave(){
        this.style.backgroundColor="";
        // att 02/06 - pegar o id do parentNode e colocar no console.log pra ver a casa que cada peça está se movendo
    }
}

/* identifica todas as peças do tabuleiro quando a função é
ativada e põe toda a informação em um array */
function identificarPosicaoDasPecas() {
    positions.forEach((position, index) => {
        if (position.firstChild == null) {
            positions[index] = position.id.replace("pos_", "");
        } else {
            positions[index] = position.firstChild.src
                .split("=")[1].replace(",%20Side", " ")
                + position.firstChild.src
                    .split("=")[2].replace(".png", " ")
                + position.id.replace("pos_", "");
        }
    });
}

// troca os lados das brancas e pretas
function trocarLados() {

    if (side1 == "White") {
        side1 = "Black";
        side2 = "White";
    } else {
        side1 = "White";
        side2 = "Black";
    }

    setSource();
}

//troca o tema geral entre tema 1 ou tema 2
function trocarTema() {
    var array_pretas = [...document.querySelectorAll(".black")];
    var array_brancas = [...document.querySelectorAll(".white")];
    var button_theme = document.getElementById("theme");

    if (button_theme.innerHTML == "Tema 1") {
        button_theme.innerHTML = "Tema 2";
        button_theme.style.backgroundColor = "rgb(15, 75, 93)";
        button_theme.style.color = "white";
        body.style.backgroundColor = "#5C420A";
        body.style.color = "#000000";

        array_pretas.forEach(preta => {
            preta.style.backgroundColor = "#271E05";
        })
        array_brancas.forEach(branca => {
            branca.style.backgroundColor = "#CA9015";
        })

    } else if (button_theme.innerHTML == "Tema 2") {
        button_theme.innerHTML = "Tema 1";
        button_theme.style.backgroundColor = "rgb(190, 120, 15)";
        button_theme.style.color = "black";
        body.style.backgroundColor = "rgb(15, 75, 93)";
        body.style.color = "white";

        array_pretas.forEach(preta => {
            preta.style.backgroundColor = "black";
        })

        array_brancas.forEach(branca => {
            branca.style.backgroundColor = "white";
        })
    }
}

