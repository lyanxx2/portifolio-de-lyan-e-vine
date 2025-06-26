let mostraHTML = document.getElementById("mostraHTML")
let numero = 0;
let num_adiv

function adiv() {
    let frase

    num_adiv = Number(window.prompt("digite um número de 1 a 100"));

    numero = parseint(Math.random() * 101);

    frase = mostraHTML.innerHTML += `<p> Vocễ escolheu ${num_adiv}.</p>`

     if(num_adiv > numero){

        mostraHTML.innerHTML = `<p> Você escolheu ${num_adiv}. Meu número é Menor</p>`
    }else{
        mostraHTML.innerHTML = `<p> Você escolheu ${num_adiv}. Meu numero é Maior</p>`
    }
   
    if (num_adiv <= numero){
        mostraHTML.innerHTML = `<p> Parabéns você ganhou!</p>`
    }
 }