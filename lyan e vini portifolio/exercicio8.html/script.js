let mostraHTML = document.getElementById("mostraHTML")

let numero = 0;

function aleatorio() {

    numero = parseInt(Math.random() * 101);

    mostraHTML.innerHTML += `<p>Pensei no Número:  ${numero}!</p>`;

}

function zerar() {
    let zerar = 0
    mostraHTML.innerHTML = `<p> Pensei no Número: ${zerar}<p>`;
    
    console.log(numero)

}