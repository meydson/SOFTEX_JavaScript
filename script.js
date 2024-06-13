function funcao() {
    var valor1 = prompt("Informe um valor");

    if (parseInt(valor1) >= 10) {
        alert("O valor informado é maior ou igual a 10!");
    } else (
        alert("O valor informado é menor que 10!")
    )
}

function mes() {
    var mes = prompt("Informe um número de 1 à 12 referente a um mês do ano");

    switch (parseInt(mes)) {
        case 1:
            alert("Janeiro");
            break
        case 2:
            alert("Fevereiro");
            break
        case 3:
            alert("Março");
            break
        case 4:
            alert("Abril");
            break
        case 5:
            alert("Maio");
            break
        case 6:
            alert("Junho");
            break
        case 7:
            alert("Julho");
            break
        case 8:
            alert("Agosto");
            break
        case 9:
            alert("Setembro");
            break
        case 10:
            alert("Outubro");
            break
        case 11:
            alert("Novembro");
            break
        case 12:
            alert("Dezembro");
            break
        default:
            alert("O valor informado não corresponde a um mês do ano!")
    }
}

function escreva() {
    for (i = 0; i < 10; i++) {
        document.write(`Teste ${i} <br>`);
    }
}

function exercicio_for() {
    for (i = 100; i >= 0; i--) {
        document.write(`${i} <br>`);
    }

}

function exercicio_while() {
    i = 0;
    while (i <= 10) {
        document.write(8*i, "<br>");
        i++;
    }
}