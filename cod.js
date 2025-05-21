const b1 = document.getElementById("VERIFICAR")
const imagem1 = document.getElementById("img1");
const imagem2 = document.getElementById("img2");
const imagem3 = document.getElementById("img3");
const imagem4 = document.getElementById("img4");
const imagem5 = document.getElementById("img5");
const imagem6 = document.getElementById("img6");
const imgjoia = document.getElementById("joia");

let palavra_minuscula = "beleza";
let palavra_maiuscula = "BELEZA";

b1.addEventListener("click", fnexecutebtn1)

function fnexecutebtn1(){
    let texto = document.getElementById("edit").value;
    if (texto === palavra_minuscula || texto === palavra_maiuscula){
        document.getElementById("t1").textContent = "PARABÉNS VOCÊ ACERTOU!";
        joia.src = './imagens/joia.png';
    } 
    else{
        document.getElementById("t1").textContent = "QUE PENA, TENTE NOVAMENTE!";
        joia.src = './imagens/vjoia.png';
    }
}

const b2 = document.getElementById("NOVO")

b2.addEventListener("click", fnexecutebtn2)

function fnexecutebtn2(){
    document.getElementById("t1").textContent = "";
    joia.src = './imagens/vjoia.png';
    const min = 0;
    const max = 20;
    const sort = Math.floor((Math.random() * max) + min);
    var textInput = document.getElementById("edit");
    textInput.value = "";
    if (sort === 1){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/B.png';
        imagem3.src = './imagens/A.png';
        imagem4.src = './imagens/L.png';
        imagem5.src = './imagens/A.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "bala";
        palavra_maiuscula = "BALA";
    } 
    if (sort === 2){
        imagem1.src = './imagens/M.png';
        imagem2.src = './imagens/E.png';
        imagem3.src = './imagens/S.png';
        imagem4.src = './imagens/T.png';
        imagem5.src = './imagens/R.png';
        imagem6.src = './imagens/E.png';
        palavra_minuscula = "mestre";
        palavra_maiuscula = "MESTRE";
    } 
    if (sort === 3){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/G.png';
        imagem3.src = './imagens/A.png';
        imagem4.src = './imagens/T.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "gato";
        palavra_maiuscula = "GATO";
    } 
    if (sort === 4){
        imagem1.src = './imagens/M.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/S.png';
        imagem4.src = './imagens/T.png';
        imagem5.src = './imagens/R.png';
        imagem6.src = './imagens/O.png';
        palavra_minuscula = "mastro";
        palavra_maiuscula = "MASTRO";
    } 
    if (sort === 5){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/B.png';
        imagem3.src = './imagens/O.png';
        imagem4.src = './imagens/T.png';
        imagem5.src = './imagens/A.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "bota";
        palavra_maiuscula = "BOTA";
    } 
    if (sort === 6){
        imagem1.src = './imagens/S.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/P.png';
        imagem4.src = './imagens/A.png';
        imagem5.src = './imagens/T.png';
        imagem6.src = './imagens/O.png';
        palavra_minuscula = "sapato";
        palavra_maiuscula = "SAPATO";
    } 
    if (sort === 7){
        imagem1.src = './imagens/P.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/N.png';
        imagem4.src = './imagens/E.png';
        imagem5.src = './imagens/L.png';
        imagem6.src = './imagens/A.png';
        palavra_minuscula = "panela";
        palavra_maiuscula = "PANELA";
    } 
    if (sort === 8){
        imagem1.src = './imagens/P.png';
        imagem2.src = './imagens/O.png';
        imagem3.src = './imagens/R.png';
        imagem4.src = './imagens/C.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "porco";
        palavra_maiuscula = "PORCO";
    } 
    if (sort === 9){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/M.png';
        imagem3.src = './imagens/E.png';
        imagem4.src = './imagens/S.png';
        imagem5.src = './imagens/A.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "mesa";
        palavra_maiuscula = "MESA";
    } 
    if (sort === 10){
        imagem1.src = './imagens/C.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/R.png';
        imagem4.src = './imagens/R.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "carro";
        palavra_maiuscula = "CARRO";
    } 
    if (sort === 11){
        imagem1.src = './imagens/C.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/M.png';
        imagem4.src = './imagens/I.png';
        imagem5.src = './imagens/S.png';
        imagem6.src = './imagens/A.png';
        palavra_minuscula = "camisa";
        palavra_maiuscula = "CAMISA";
    } 
    if (sort === 12){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/O.png';
        imagem3.src = './imagens/S.png';
        imagem4.src = './imagens/S.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "osso";
        palavra_maiuscula = "OSSO";
    } 
    if (sort === 13){
        imagem1.src = './imagens/C.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/B.png';
        imagem4.src = './imagens/E.png';
        imagem5.src = './imagens/L.png';
        imagem6.src = './imagens/O.png';
        palavra_minuscula = "cabelo";
        palavra_maiuscula = "CABELO";
    } 
    if (sort === 14){
        imagem1.src = './imagens/R.png';
        imagem2.src = './imagens/O.png';
        imagem3.src = './imagens/S.png';
        imagem4.src = './imagens/T.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "rosto";
        palavra_maiuscula = "ROSTO";
    } 
    if (sort === 15){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/R.png';
        imagem3.src = './imagens/O.png';
        imagem4.src = './imagens/S.png';
        imagem5.src = './imagens/A.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "rosa";
        palavra_maiuscula = "ROSA";
    } 
    if (sort === 16){
        imagem1.src = './imagens/vinicial.jpg';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/Z.png';
        imagem4.src = './imagens/U.png';
        imagem5.src = './imagens/L.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "azul";
        palavra_maiuscula = "AZUL";
    } 
    if (sort === 17){
        imagem1.src = './imagens/V.png';
        imagem2.src = './imagens/E.png';
        imagem3.src = './imagens/R.png';
        imagem4.src = './imagens/D.png';
        imagem5.src = './imagens/E.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "verde";
        palavra_maiuscula = "VERDE";
    } 
    if (sort === 18){
        imagem1.src = './imagens/M.png';
        imagem2.src = './imagens/A.png';
        imagem3.src = './imagens/N.png';
        imagem4.src = './imagens/G.png';
        imagem5.src = './imagens/A.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "manga";
        palavra_maiuscula = "MANGA";
    } 

    if (sort === 19){
        imagem1.src = './imagens/L.png';
        imagem2.src = './imagens/I.png';
        imagem3.src = './imagens/V.png';
        imagem4.src = './imagens/R.png';
        imagem5.src = './imagens/O.png';
        imagem6.src = './imagens/vfinal.jpg';
        palavra_minuscula = "livro";
        palavra_maiuscula = "LIVRO";
    } 
    if (sort === 20){
        imagem1.src = './imagens/B.png';
        imagem2.src = './imagens/O.png';
        imagem3.src = './imagens/N.png';
        imagem4.src = './imagens/I.png';
        imagem5.src = './imagens/T.png';
        imagem6.src = './imagens/O.png';
        palavra_minuscula = "bonito";
        palavra_maiuscula = "BONITO";
    } 
}

