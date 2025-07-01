function iniciarJogo() {
            const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
            let tentativas = 0;
            
            function verificarPalpite() {
                const palpite = prompt("Digite um número  de 1 a 100: ");
                
                if (palpite === null) {
                    alert("Jogo nao funciona");
                    return;
                }
                
                const palpiteNumero = parseInt(palpite);
                
                if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 100) {
                    alert(" Digite um número valido entre 1 e 100");
                    verificarPalpite();
                    return;
                }
                
                tentativas++;
                
                if (palpiteNumero === numeroAleatorio) {
                    alert(`Parabéns Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas`);
                } else if (palpiteNumero < numeroAleatorio) {
                    alert("Tente um número maior");
                    verificarPalpite();
                } else {
                    alert("Tente um número menor");
                    verificarPalpite();
                }
            }
            
            verificarPalpite();
        }