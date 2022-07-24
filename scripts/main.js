function calcularGorjeta(event) {
    event.preventDefault();
    let conta = document.getElementById('conta').value;
    let qualidadeServ = document.getElementById('qualidadeServ').value;
    let numPessoas = document.getElementById('pessoas').value;

    if (conta == '' | qualidadeServ == 0) {
        alert('Por favor, preencha os valores')
        return;
    }

    if (numPessoas == '' | numPessoas <= 1) {
        numPessoas == 1;
        document.getElementById('cada').style.display = "none";
    } else {
        document.getElementById('cada').style.display = "block";   
    }

    let total = (conta * qualidadeServ) / numPessoas;
    total = total.toFixed(2);
    document.getElementById('gorjeta').innerHTML = total;
    document.getElementById('totalGorjeta').style.display = "block";
}

document.getElementById('totalGorjeta').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('formulario').addEventListener('submit', calcularGorjeta)