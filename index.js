
//pega todas as peças pela tag <img>
var imagens = document.getElementsByTagName('img');

//zera o tabuleiro
function zeraOTabuleiro() {

    //cria uma variável com a quantidade das imagens
    var l = imagens.length;

    for (var i = 0; i < l; i++) {
        imagens[0].parentNode.removeChild(imagens[0]);
    }
}

// ao clicar no botão começar, executa
function comecar() {

    zeraOTabuleiro();

    //================== ORGANIZA AS BRANCAS ==================
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

    peao1_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao2_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao3_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao4_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao5_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao6_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao7_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    peao8_brancas.src = "./images/pieces/Piece=Pawn, Side=White.png";
    torre2_brancas.src = "./images/pieces/Piece=Rook, Side=White.png";
    cavalo2_brancas.src = "./images/pieces/Piece=Knight, Side=White.png";
    bispo2_brancas.src = "./images/pieces/Piece=Bishop, Side=White.png";
    rei_brancas.src = "./images/pieces/Piece=King, Side=White.png";
    rainha_brancas.src = "./images/pieces/Piece=Queen, Side=White.png";
    bispo_brancas.src = "./images/pieces/Piece=Bishop, Side=White.png";
    cavalo_brancas.src = "./images/pieces/Piece=knight, Side=White.png";
    torre_brancas.src = "./images/pieces/Piece=Rook, Side=White.png";

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

    peao1_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao2_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao3_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao4_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao5_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao6_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao7_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    peao8_pretas.src = "./images/pieces/Piece=Pawn, Side=Black.png";
    torre2_pretas.src = "./images/pieces/Piece=Rook, Side=Black.png";
    cavalo2_pretas.src = "./images/pieces/Piece=Knight, Side=Black.png";
    bispo2_pretas.src = "./images/pieces/Piece=Bishop, Side=Black.png";
    rei_pretas.src = "./images/pieces/Piece=King, Side=Black.png";
    rainha_pretas.src = "./images/pieces/Piece=Queen, Side=Black.png";
    bispo_pretas.src = "./images/pieces/Piece=Bishop, Side=Black.png";
    cavalo_pretas.src = "./images/pieces/Piece=knight, Side=Black.png";
    torre_pretas.src = "./images/pieces/Piece=Rook, Side=Black.png";

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

    //seta o atributo draggable = true em todas as tag imagens
    var i = 0;
    while (i < imagens.length) {
        imagens[i].setAttribute("draggable", "true");
        i++;
    }
}

