function verificarEstacao() {
    let mes = prompt("Digite o nome de um mês do ano:").toUpperCase();
    let estacao;
    
    if (mes === "DEZEMBRO" || mes === "JANEIRO" || mes === "FEVEREIRO") {
    estacao = "Verão";
    
    document.body.style.backgroundColor = "yellow";
    } else if (mes === "MARÇO" || mes === "ABRIL" || mes === "MAIO") {
    estacao = "Outono";
    
    document.body.style.backgroundColor = "orange";
    } else if (mes === "JUNHO" || mes === "JULHO" || mes === "AGOSTO") {
    estacao = "Inverno";
    
    document.body.style.backgroundColor = "blue";
    } else if (mes === "SETEMBRO" || mes === "OUTUBRO" || mes === "NOVEMBRO") {
    estacao = "Primavera";
    
    document.body.style.backgroundColor = "green";
    
    alert("Mês invalido. Por favor, digite um mês válido.");
    return;
    }
    
    alert("A estação do mês " + mes + " é: " + estacao);
    }