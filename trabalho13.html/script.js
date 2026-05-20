let estoque = [];
let notas = [];

function produtoEstoque(nome, quantia){
    this.nome = nome;
    this.quantia = quantia;
}
function infoNotas(nome, nota){
    this.nome = nome;
    this.nota = nota;
}
function limparInput() {
    /*Inputs gerais*/
    document.getElementById("inputNomeEstoque").value = "";
    document.getElementById("inputQtdEstoque").value = "";
    document.getElementById("nomeNotas").value = "";
    document.getElementById("valorNotas").value = "";
}
function cadastroEstoque() {
    const inputNomeEstoque = document.getElementById("inputNomeEstoque").value;
    const inputQtdEstoque = Number(document.getElementById("inputQtdEstoque").value);
    const demo = document.getElementById("demoEstoque");
    if (inputNomeEstoque === "" || !inputNomeEstoque || inputQtdEstoque <= 0) {
        demo.className = "erro";
        demo.textContent = "Informe o produto que deseja cadastrar corretamente!";
        setTimeout(function() {
            demo.textContent = "";
        }, 2000);
        return;
    }
    let novoProduto = new produtoEstoque(inputNomeEstoque, inputQtdEstoque);
    estoque.push(novoProduto);
    demo.className = "sucesso";
    demo.textContent = "Produto cadastrado com sucesso!";
        setTimeout(function() {
            demo.textContent = "";
        }, 2000);
    limparInput();
}
function mostrarEstoque() {
    const lista = document.getElementById("lista");
    lista.textContent = "";
    for (let i = 0; i < estoque.length; i++) {
        let e = estoque[i];
        let itemInfo = document.createElement("li");
        itemInfo.textContent = `${e.nome} R$${e.quantia}`;
        lista.appendChild(itemInfo);
    } 
}
function calcularComprasCaixa(){
    const feijao = document.getElementById("caixasInfoFeijao").checked;
    const arroz = document.getElementById("caixasInfoArroz").checked;
    const leite = document.getElementById("caixasInfoLeite").checked;
    const cafe = document.getElementById("caixasInfoCafe").checked;
    const cha = document.getElementById("caixasInfoCha").checked;
    const demoCaixa = document.getElementById("demoCaixa");
    let totalCaixas = 0;
    if (feijao) {
        totalCaixas += 25;
    }
    if (arroz) {
        totalCaixas += 32;
    }
    if (leite) {
        totalCaixas += 8;
    }
    if (cafe) {
        totalCaixas += 30;
    }
    if (cha) {
        totalCaixas += 15;
    }
    demoCaixa.textContent = `Valor total da compra: R$${totalCaixas},00`;
}

function verificarSenha() {
    const certoSenha = "Tentativa";
    let tentativas = 0;
    let respostaSenha = prompt("Senha: ");
    tentativas++;
    while (respostaSenha !== certoSenha){
        tentativas++;
        alert("Errada");
        respostaSenha = prompt("Senha: ");
    }
    document.getElementById("demoSenha").textContent = `Acesso concedido!
    Número de tentativas: ${tentativas}`;
}
function cadastrarNotas() {
    let nomeNotas = document.getElementById("nomeNotas").value;
    let valorNotas = document.getElementById("valorNotas").value;
    let demo = document.getElementById("demoNotas");
    if (nomeNotas === "" || !nomeNotas || valorNotas <= 0) {
        demo.className = "erro";
        demo.textContent = "Informe o produto que deseja cadastrar corretamente!";
        setTimeout(function() {
            demo.textContent = "";
        }, 2000);
        return;
    }
    let infoNovoAluno = new infoNotas(nomeNotas, valorNotas);
    notas.push(infoNovoAluno);
    demo.className = "sucesso";
    demo.textContent = "Produto cadastrado com sucesso!";
        setTimeout(function() {
            demo.textContent = "";
        }, 2000);
    mostrarNotas();    
}
function mostrarNotas() {
    const demoResultado = document.getElementById("demoNotasResultado");
    let soma = 0;
    let total;
    let lista = document.getElementById("listaNotas");
    lista.textContent = "";
    demoResultado.textContent = "";
    for (let i = 0; i < notas.length; i++) {
        let n = notas[i];
        let linha = document.createElement("tr");
        let result = document.createElement("td");
        let infoNome = document.createElement("td");
        let infoNota = document.createElement("td");
        infoNome.textContent = n.nome;
        infoNota.textContent = n.nota;
        soma += Number(n.nota);
        if(n.nota >= 65) {
            result.textContent = "Aprovado!";
        }
        else if (n.nota >= 45 && n.nota < 65) {
            result.textContent = "Recuperação";
        }
        else{
            result.textContent = "Reprovado";
        }
        linha.appendChild(infoNome);
        linha.appendChild(infoNota);
        linha.appendChild(result);
        lista.appendChild(linha);
    }
    total = soma / notas.length;
    demoResultado.textContent = `Média da turma: ${total.toFixed(1)}`;
}
function conferenciaValor() {
    let demoConferencia = document.getElementById("demoConferencia");
    let paraConferir = prompt ("Digite um valor: ");
    let valorConferencia = 0;
    while (Number(paraConferir) !== 0){
        valorConferencia += Number(paraConferir);
        paraConferir = prompt ("Digite um valor: ");
    }
    demoConferencia.textContent = `Valor: ${valorConferencia}`;
}