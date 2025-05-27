
function media(){
    alert("digite aqui suas notas ");


 let   num1 = Number(window.prompt("Digite qual foi sua media no primeiro trimestre :"));
 let   num2 = Number(window.prompt("Digite sua media do segundo trimestre "));
 let   num3 = Number(window.prompt("Digite aqui sua media no terceiro trimestre "));
    let resultado = num1 + num2 + num3;
    let divisao = 3
    alert(resultado / divisao)

    alert("sua nota total foi  " + resultado / divisao +"." )




if(resultado > 180) {
        alert("sua nota esta na media " + resultado / divisao + " Parabens vc passou")
    } else {
        alert("sua nota esta menor que a media " + resultado / divisao + " Vc não passou ")
    }   

}




