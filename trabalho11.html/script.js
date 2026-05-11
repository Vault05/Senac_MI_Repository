const produtos = [];
const precos = [];

function cadastro() {
    const inputPreco = parseFloat(document.getElementById("preco").value);
    const inputProduto = document.getElementById("produto").value.trim();
    const demo = document.getElementById("demo");

    if (!inputPreco ||  !inputProduto || inputProduto === "") {
        demo.textContent = "Inválido: preencha todos os campos!";
        return;
    }
    
    if (inputPreco <= 0) {
        demo.textContent = "Inválido: preço deve ser maior que 0!";
        return;
    }
    precos.push(inputPreco);
    produtos.push(inputProduto);
    demo.textContent = "Produto cadastrado com sucesso!";

    setTimeout(function() {
        demo.textContent = ""; 
    }, 3000);
    
    document.getElementById("preco").value = "";
    document.getElementById("produto").value = "";

    quantidade()
}

function quantidade() {
    const lista = document.getElementById("lista");
    const qtdDisplay = document.getElementById("quant");

    lista.textContent = "";

    for (let i = 0; i < produtos.length; i++) {

        const li = document.createElement('li');

        li.textContent = produtos[i] + ' - R$ ' + precos[i].toFixed(2);

        lista.appendChild(li);

        qtdDisplay.textContent = "Quantidade de produtos cadastrados: " + produtos.length;
    }
}
