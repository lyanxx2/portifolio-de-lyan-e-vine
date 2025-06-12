
function media(){
    alert("digite aqui suas notas ");

 let   nome = (window.prompt("digite seu nome :"));
 let   num1 = Number(window.prompt("Digite qual foi sua media no primeiro trimestre :"));
 let   num2 = Number(window.prompt("Digite sua media do segundo trimestre: "));
 let   num3 = Number(window.prompt("Digite aqui sua media no terceiro trimestre: "));
 

 let resultado = (num1 + num2 + num3) /3;
alert("A sua média é " + resultado)

if(resultado>=60) {
    alert("Parabens " + nome + " Você foi aprovado")
    }else{
        total = 60 - resultado
        alert(nome + " você foi reprovado, faltam " + total + " Pontos para vc atingir a media")
    }

if(resultado<=60) {
    alert(" Você precisa estudar um pouco mais entre nesse site que ele te ajudara " +  "                                                                                                  https://lyanxx2.github.io/site-do-trabalho-2/")
   
}


}
