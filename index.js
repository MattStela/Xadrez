
//pega todas as peças pela tag <img>
const imagens = document.getElementsByTagName('img');

var side1 = "White";
var side2 = "Black";




const pieces_names = [
  "Pawn",
  "Pawn",
  "Pawn",
  "Pawn",
  "Pawn",
  "Pawn",
  "Pawn",
  "Pawn",
  "Rook",
  "Knight",
  "Bishop",
  "King",
  "Queen",
  "Bishop",
  "Knight",
  "Rook"
]


const starter_positions_white = [
  "pos_a2",
  "pos_b2",
  "pos_c2",
  "pos_d2",
  "pos_e2",
  "pos_f2",
  "pos_g2",
  "pos_h2",
  "pos_h1",
  "pos_g1",
  "pos_f1",
  "pos_e1",
  "pos_d1",
  "pos_c1",
  "pos_b1",
  "pos_a1"
  
]

const starter_positions_black = [
  "pos_a7",
  "pos_b7",
  "pos_c7",
  "pos_d7",
  "pos_e7",
  "pos_f7",
  "pos_g7",
  "pos_h7",
  "pos_h8",
  "pos_g8",
  "pos_f8",
  "pos_e8",
  "pos_d8",
  "pos_c8",
  "pos_b8",
  "pos_a8"
  
]


const white_pieces = {
  peao1_brancas: document.createElement("img"),
  peao2_brancas: document.createElement("img"),
  peao3_brancas: document.createElement("img"),
  peao4_brancas: document.createElement("img"),
  peao5_brancas: document.createElement("img"),
  peao6_brancas: document.createElement("img"),
  peao7_brancas: document.createElement("img"),
  peao8_brancas: document.createElement("img"),
  torre2_brancas: document.createElement("img"),
  cavalo2_brancas: document.createElement("img"),
  bispo2_brancas: document.createElement("img"),
  rei_brancas: document.createElement("img"),
  rainha_brancas: document.createElement("img"),
  bispo_brancas: document.createElement("img"),
  cavalo_brancas: document.createElement("img"),
  torre_brancas: document.createElement("img")

}

const black_pieces = {
  peao1_pretas: document.createElement("img"),
  peao2_pretas: document.createElement("img"),
  peao3_pretas: document.createElement("img"),
  peao4_pretas: document.createElement("img"),
  peao5_pretas: document.createElement("img"),
  peao6_pretas: document.createElement("img"),
  peao7_pretas: document.createElement("img"),
  peao8_pretas: document.createElement("img"),
  torre2_pretas: document.createElement("img"),
  cavalo2_pretas: document.createElement("img"),
  bispo2_pretas: document.createElement("img"),
  rei_pretas: document.createElement("img"),
  rainha_pretas: document.createElement("img"),
  bispo_pretas: document.createElement("img"),
  cavalo_pretas: document.createElement("img"),
  torre_pretas: document.createElement("img")
}



function setSource() {
  let index = 0
  for (piece in white_pieces) {
    white_pieces[piece].src = `./images/pieces/Piece=${pieces_names[index]}, Side=${side1}.png`;
    white_pieces[piece].dataset.piece_name = pieces_names[index] + '' + index + '-' + "white";
    index++;
  }
  index = 0
  for (piece in black_pieces) {
    black_pieces[piece].src = `./images/pieces/Piece=${pieces_names[index]}, Side=${side2}.png`;
    black_pieces[piece].dataset.piece_name = pieces_names[index] + '' + index + '-' + "black";
    index++;
  }
}

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
  setSource();

  //================== ORGANIZA AS BRANCAS ==================
  let index = 0
  for (piece in white_pieces) {
    document.getElementById(starter_positions_white[index]).appendChild(white_pieces[piece]);
    index++;
  }
  index = 0
  //================== ORGANIZA AS PRETAS ==================
  for (piece in black_pieces) {
    document.getElementById(starter_positions_black[index]).appendChild(black_pieces[piece]);
    index++;
  }


  //seta o atributo draggable = true em todas as tag imagens
  var i = 0;
  while (i < imagens.length) {
    imagens[i].setAttribute("draggable", "true");
    i++;
  }
  for(let i = 0; i < imagens.length; i++){
    imagens[i].addEventListener('dragstart',e =>{
      e.dataTransfer.setData('Text', e.target.getAttribute('data-piece_name'));
      const piece = e.target.getAttribute('data-piece_name');
      console.log(e.target.getAttribute('data-piece_name'));
      if(piece.replace(/[0-9]/g, '') === 'Pawn-white'){
        let pos_id = imagens[i].parentElement.getAttribute('id');
        let pos_number = pos_id.match(/\d+/g);
        pos_number = Number(pos_number);
        pos_number += 1;
        pos_id = pos_id.replace(/[0-9]/g, '');
        pos_id += pos_number;
        let pos_to_move = document.getElementById(pos_id);
        pos_to_move.addEventListener('dragover', e=>{
          e.preventDefault();
        })

        pos_to_move.addEventListener('drop', e=>{
          const id = e.dataTransfer.getData('Text');
          const element = document.querySelector(`[data-piece_name='${id}']`)
          console.log(e.target,id, element)
          e.target.appendChild(element);
        })

        pos_to_move.removeEventListener()
      } 


    })
  }

  // Se for peao, eu so posso andar pra frente um espaco => pegar a posicao atual do peao, a

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
  const body = document.querySelector("body");
  var brancas = document.querySelectorAll(".white");
  var pretas = document.querySelectorAll(".black");
  var array_pretas = [...pretas];
  var array_brancas = [...brancas];
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

//===================================================

