
function media(){
    alert("digite aqui suas notas ");


 let   num1 = Number(window.prompt("Digite qual foi sua media no primeiro trimestre :"));
 let   num2 = Number(window.prompt("Digite sua media do segundo trimestre "));
 let   num3 = Number(window.prompt("Digite aqui sua media no terceiro trimestre "));
    let resultado = (num1 + num2 + num3) /3;
alert("A sua média é " + resultado)

if(resultado>=60) {
    alert("Parabens ! Você foi aprovado")
    }else{
        total = 60 - resultado
        alert("Você foi reprovado faltou " + total + " para vc atingir a media")
    }



}
