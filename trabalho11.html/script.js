const produtos = [];
const precos = [];

function cadastro() {
    const inputPreco = parseFloat(document.getElementById("preco").value);
    const inputProduto = document.getElementById("produto").value.trim();
    const demo = document.getElementById("demo");
    const aparecer = document.getElementById("close");
    
    demo.className = "";

    if (!inputPreco ||  !inputProduto || inputProduto === "") {
        demo.className = "erro";
        demo.textContent = "Inválido: preencha todos os campos!";
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }
    
    if (inputPreco <= 0) {
        demo.className = "erro";
        demo.textContent = "Inválido: preço deve ser maior que 0!";
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }





    precos.push(inputPreco);
    produtos.push(inputProduto);
    demo.className = "sucesso";
    demo.textContent = "Produto cadastrado com sucesso!";

    if (produtos.length >= 1) {
        aparecer.style.display = "block";
    } else {
        exclude.style.display = "none";
    }

    setTimeout(function() {
        demo.textContent = ""; 
    }, 2000);

    document.getElementById("preco").value = "";
    document.getElementById("produto").value = "";

    quantidade()

}

function quantidade() {
    const lista = document.getElementById("lista");
    const qtdDisplay = document.getElementById("quant");
    const display = document.getElementById("display");
    
    const exclude = document.getElementById("close");

    const caro = document.getElementById("caro");
    const barato = document.getElementById("barato");


    let total = 0;
    
    let expensive = 0;
    let cheap = 99999999;

    let nomeCaro = "";
    let nomeBarato = "";
    
    lista.textContent = "";
    
    for (let i = 0; i < produtos.length; i++) {
        
        const li = document.createElement('li');
        
        li.textContent = produtos[i] + ' - R$ ' + precos[i].toFixed(2);
        
        lista.appendChild(li);
        
        total += precos[i];
        
        if (precos[i] > expensive) {
            expensive = precos[i];
            nomeCaro = produtos[i];
        }
        
        if (precos[i] < cheap) {
            cheap = precos[i];
            nomeBarato = produtos[i];
        }

    }

    qtdDisplay.textContent = "Quantidade de produtos cadastrados: " + produtos.length;
    display.textContent = "Total de preço dos produtos R$" + total.toFixed(2);

    caro.textContent = "Produto mais caro é: " + nomeCaro + "R$" + expensive.toFixed(2);
    barato.textContent = "Produto mais barato é: " + nomeBarato + "R$" + cheap.toFixed(2);



    if (produtos.length >= 1) {
        exclude.style.display = "block";
    } else {
        exclude.style.display = "none";
    }
}

function exclude() {
    const close = document.getElementById("close");
    const qtdDisplay = document.getElementById("quant");
    
    produtos.pop();
    precos.pop();
    
    qtdDisplay.textContent = "";

    if (produtos.length <= 0) {
        close.style.display = "none";
    }

    quantidade();
}