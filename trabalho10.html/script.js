function verificador() {
    const idade = Number(document.getElementById("idade").value);
    const ident = document.getElementById("identificador");
    if (idade < 12) {
        ident.textContent = "Criança";
        alert ("Sem permissão para navegar");
    }
    else if (idade >= 12 && idade <=17) {
        ident.textContent = "Adolescente";
        alert ("Permissão parcial para navegar");
    }
    else if (idade >= 18  && idade <=59) {
        ident.textContent = "Adulto";
        alert ("Permissão total para navegar");
    }
    else if (idade >= 60) {
        ident.textContent = "Idoso";
        alert ("Permissão auxiliada para navegar");
    }
}

function login() {
    const usu = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    if (usu == "Admin" && senha == "1234") {
        alert("Login realizado com sucesso")
    }
    else if (usu == "" || senha == "") {
        alert("Preencha todos os campos")
    }
    else if (usu == "Professor" && senha == "Senac") {
        alert("Bem vindo, professor(a)!")
    }
    else {
        alert("Usuário ou senha incorretos")
    }
}

function calcular() { //baixar blackboxia
    const valor = parseFloat(document.getElementById("valor").value); //parseFloat transforma o texto (input) em número decimal inteiro
    const vip = document.getElementById('vip').checked; //.checked serve para valores booleanos (true ou false), em input type="checkbox" ou "radio"
    const cupom = document.getElementById('cupom').checked;
    const result = document.getElementById("result");
    result.innerHTML = ""; /*.innerHTML limpa todo conteudo dentro da div (HTML), para evitar
    erros e malfuncionamento*/
    result.className = ""; /*.className exclue a class da di (CSS), ou seja, ao invés de criar
    um subcomando no javascript para cada opção, crie já no css, com classes inexistentes mas que
    começão a existir a partir do momento que um if é selecionado; otimiza tempo*/
    
    if(!valor || valor <= 0) {//!valor quer dizer que caso o item (valor) estiver vazio
        result.innerHTML = "Erro: Por favor, insira um valor de compra válido maior que zero.";
        result.className = "erro"; 
        return; /*prende o resto do código, quando chega nesse if, cairá no return e retornará 
        para o input, sem carregar o resto*/
    }

    let desconto = 0;

    if (valor >= 500 && vip) {
        desconto = 0.20;
    }
    else if (valor >= 300 || cupom) {
        desconto = 0.10;
    }
    else {
        desconto = 0;
    }
    
    const retirado = valor * desconto;
    const final = valor - retirado;
/*as crases ('') são diferentes das chaves ({}) e das aspas (""); 
as aspas servem para atribuir valor escrito, especificar/codar algo, porém por só uma linha;
as chaves delimitam um local, o que estiver na chave da function a() não funciona fora dela;
já as crases delimitam seu espaço como texto multi-linhas, funcionando como oposto às aspas;
nas crases, quando se pula uma linha, ela ainda considera o código que estiver dentro e pula uma linha, mas é só escrita, ou seja, não considera códigos;
por essa limitação das crases, usa-se as chaves apenas no comando, como no código; 
deve-se lembrar que $ e % não servem de nada no código, apenas aparecem no html
*/
    result.innerHTML = ` 
        Desconto aplicado: ${(desconto * 100)}%<br>
        Valor do desconto: R$ ${retirado.toFixed(2)}<br>
        Total a pagar: R$ ${final.toFixed(2)}
    `;
}

function avaliacao() {
    const nota = Number(document.getElementById("nota").value);
    const freq = Number(document.getElementById("aura").value);
    const result = document.getElementById("resultado");

    result.innerHTML = "";
    result.className = "";
    
    if ((!nota || !freq) || ((nota <= 0 || freq <= 0) || (nota > 100 || freq > 100))) {
        result.innerHTML = "Preencha todos os campos";
        return;
    }
    else if (nota >= 60 && freq >=75) {
        result.innerHTML = "Aprovado!!";
        result.className = "";
        
    }
    else if (nota >= 40 && freq >=75) {
        result.innerHTML = "Recuperação";
        
    }
    else if (nota <40 || freq <75) {
        result.innerHTML = "Reprovado"; 
        
    }
}