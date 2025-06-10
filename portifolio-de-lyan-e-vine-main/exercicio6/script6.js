let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML")


function contador() {
    cliques++;

    mostraHTML.innerHTML = `<p> Número de clicles: ${cliques}</p    >`
    // console.log(cliques)
    


}