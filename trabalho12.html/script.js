let estatisiicas = [];

function Produto(nome, categoria, valor, quantia) {
    this.nome = nome;
    this.categoria = categoria;
    this.valor = valor;
    this.quantia = quantia;
}

function cadastro() {
    const produto = document.getElementById("produto").value.trim();
    const cat = document.getElementById("cat").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = Number(document.getElementById("quantidade").value);

    const demo = document.getElementById("demo");

    const aparecer = document.getElementById("close");
    const aparecerAll = document.getElementById("closeAll");

    if (produto == "" || preco <= 0 || quantidade <= 0 || !preco) {
        demo.className = "erro"
        demo.textContent = "Preencha todos os campos corretamente!"
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }

    let repetido = false;

    for (let i = 0; i < estatisiicas.length; i++) {
        if (estatisiicas[i].nome.toLowerCase() === produto) {
            repetido = true;
            break;
        }
    }
    if (repetido) {
        demo.className = "erro";
        demo.textContent = "Este produto já foi cadastrado!";
        setTimeout(function() {
        demo.textContent = ""; 
        }, 2000);
        return;
    }
    
    let novoProduto = new Produto(produto, cat, preco, quantidade);

    estatisiicas.push(novoProduto);

    demo.className = "sucesso";
    demo.textContent = "Produto cadastrado com sucesso!";

    if (estatisiicas.length >= 1) {
        aparecer.style.display = "block";
        aparecerAll.style.display = "block";
    } else {
        aparecer.style.display = "none";
        aparecerAll.style.display = "none";
    }

    setTimeout(function() {
        demo.textContent = ""; 
    }, 2000);

    document.getElementById("produto").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";

    armazenamento()
}

function armazenamento() {
    const tableBody = document.getElementById("tableBody");

    const totalProduto = document.getElementById("totalProduto");
    const totalUnidade = document.getElementById("totalUnidade");
    const totalEstoque = document.getElementById("totalEstoque");

    tableBody.textContent = "";

    let somaUnidades = 0
    let precoTotal = 0;

    let expensive = estatisiicas[0];

    let greater = estatisiicas[0];

    for (let i = 0; i <estatisiicas.length; i++) {
        let p = estatisiicas[i]; //atalho para a array estatísticas
        
        somaUnidades += p.quantia;
        precoTotal += (p.valor * p.quantia);

        let linha = document.createElement("tr");
        let tdNome = document.createElement("td");
        let tdCategoria = document.createElement("td");
        let tdPreco = document.createElement("td");
        let tdQtdE = document.createElement("td");
        let tdTotal = document.createElement("td");

        tdNome.textContent = p.nome;
        tdCategoria.textContent = p.categoria;
        tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
        tdQtdE.textContent = p.quantia;

        let valorTotal = p.valor * p.quantia;
        tdTotal.textContent =`R$ ${valorTotal.toFixed(2)}`;

        linha.appendChild(tdNome);
        linha.appendChild(tdCategoria);
        linha.appendChild(tdPreco);
        linha.appendChild(tdQtdE);
        linha.appendChild(tdTotal);
        tableBody.appendChild(linha);

        if (expensive && p.valor > expensive.valor) {
            expensive = p;
        }
        if (greater && p.quantia > greater.quantia) {
            greater = p;
        }
    }

    const caro = document.getElementById("caro");

    const maior = document.getElementById("maior");

    if (estatisiicas.length > 0) {
        totalProduto.textContent = `Quantidade de produtos cadastrados: ${estatisiicas.length}`;
        totalUnidade.textContent = `Total de unidades em estoque: ${somaUnidades};`;
        totalEstoque.textContent = `Total de preço do estoque R$: ${precoTotal.toFixed(2)}`;
        caro.textContent = `Produto mais caro: ${expensive.nome} (R$ ${expensive.valor.toFixed(2)})`;
        maior.textContent = `Produto com maior estoque: ${greater.nome} (${greater.quantia})`;
    } else {
        totalProduto.textContent = "";
        totalUnidade.textContent = "";
        totalEstoque.textContent = "";
        caro.textContent = "";
        maior.textContent = "";
    }
}

function pesquisar() {
    const pesquisaInputNome = document.getElementById("pesquisaInputNome").value.trim().toLowerCase();
    const pesquisaInputCategoria = document.getElementById("pesquisaInputCategoria").value.trim().toLowerCase();
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");

    resultadoPesquisa.textContent = ""

    if(pesquisaInputNome === "" && pesquisaInputCategoria === "") {
        return;
    }

    for (let i = 0; i < estatisiicas.length; i++) {
        let p = estatisiicas[i];

        let matchNome = pesquisaInputNome !== " " && p.nome.toLowerCase().includes(pesquisaInputNome);
        let matchCat = pesquisaInputCategoria !== " " && p.categoria.toLowerCase().includes(pesquisaInputCategoria);

        if (matchNome || matchCat) {

            let linha = document.createElement("tr");

            if (p.quantia <= 5) {
                linha.style.color = "crimson";
            }

            let tdNome = document.createElement("td");
            let tdCategoria = document.createElement("td");
            let tdPreco = document.createElement("td");
            let tdQtdE = document.createElement("td");
            let tdTotal = document.createElement("td");
    
            tdNome.textContent = p.nome;
            tdCategoria.textContent = p.categoria;
            tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
            tdQtdE.textContent = p.quantia;
    
            let valorTotal = p.valor * p.quantia;
            tdTotal.textContent =`R$ ${valorTotal.toFixed(2)}`;
    
            linha.appendChild(tdNome);
            linha.appendChild(tdCategoria);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQtdE);
            linha.appendChild(tdTotal);
            resultadoPesquisa.appendChild(linha);

            document.getElementById("pesquisaInputNome").value = "";
        }
    }
}

function baixo() {
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");

    resultadoPesquisa.textContent = "";

    let encontrou = false;

    let valorBaixoItem = 0;

    for (let i = 0; i < estatisiicas.length; i++) {
        let p = estatisiicas[i];

        if(p.quantia <= 5) {
        
            encontrou = true;

            let linha = document.createElement("tr");
            let tdNome = document.createElement("td");
            let tdCategoria = document.createElement("td");
            let tdPreco = document.createElement("td");
            let tdQtdE = document.createElement("td");
            let tdTotal = document.createElement("td");

            tdNome.textContent = p.nome;
            tdCategoria.textContent = p.categoria;
            tdPreco.textContent = `R$ ${p.valor.toFixed(2)}`;
            tdQtdE.textContent = p.quantia;

            let valorBaixoItem = p.valor * p.quantia;
            tdTotal.textContent = `R$ ${valorBaixoItem.toFixed(2)}`;

            linha.appendChild(tdNome);
            linha.appendChild(tdCategoria);
            linha.appendChild(tdPreco);
            linha.appendChild(tdQtdE);
            linha.appendChild(tdTotal);
            resultadoPesquisa.appendChild(linha);
        }
    }
    if (!encontrou) {
        alert("Não existem produtos com baixo estoque!");
    }
}

function exclude() {
    const close = document.getElementById("close");
    const closeAll = document.getElementById("closeAll");
    
    estatisiicas.pop();

    if (estatisiicas.length <= 0) {
        close.style.display = "none";
        closeAll.style.display = "none";
    }

    armazenamento();
}

function excludeAll() {
    const closeAll = document.getElementById("closeAll");
    const close = document.getElementById("close");

    estatisiicas = [];

    if (estatisiicas.length <= 0) {
        closeAll.style.display = "none";
        close.style.display = "none";
    }

    armazenamento();
}