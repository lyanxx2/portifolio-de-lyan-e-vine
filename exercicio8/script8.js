let mostraHTML = document.getElementById("mostraHTML")
let numero = 0;

let num_adiv
function adiv() {

let frase

num_adiv = Number(window.prompt("digite um numero de 1 a 100 "));


numero = parseInt(Math.random() * 101);

frase = mostraHTML.innerHTML += `<p> Você escolheu ${num_adiv}<p>`

if(num_adiv > numero){

mostraHTML.innerHTML = `<p>Você escolheu ${num_adiv}. Meu numero é Menor<p>`
}else{
mostraHTML.innerHTML = `<p>Você escolheu ${num_adiv}. Meu numero é Maior<p>`
}




}