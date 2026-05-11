function botao() {
    const val    = 10; 
    if (val == 10) {
        alert(val);
    }
}

function botao1 () {
    const name = "Bruno";
    if (name == "Bruno") {
        alert(name);
    }
}

function botao2() {
    let text = document.getElementById("text1").value;
    let show = document.getElementById("show1");
    if (text == "ok") {
        show.textContent = ("Tudo certin");
    }
    else {
        show.textContent = ("Inválido");
    }
}

function botao3() {
    let text = document.getElementById("text2").value;
    let show = document.getElementById("show2");
    if (text == "5") {
        show.textContent = ("Correto");
    }
    else {
        show.textContent = ("Incorreto");
    }
}

function botao4() {
    let text = document.getElementById("text3");
    let show = document.getElementById("show3");
    if (text == "Admin") {
        show.textContent = ("Correto");
    }
    else {
        show.textContent = ("Incorreto");
    }
}

function botao5() {
    let text = document.getElementById("text4").value;
    let show = document.getElementById("show4");
    if (text == "teste") {
        show.textContent = ("Texto mudado");
    }
}

function botao6() {
    let mude = document.getElementById("text5").value;
    const fex = document.getElementById("fex7");
    if (mude == "azul") {
        fex.style.background = "royalblue";
    }
}

function verifier() {
    let num = Number(document.getElementById("num").value);
    let display = document.getElementById("display");
    if (num > 10) {
        display.textContent = ("Maior que 10");
    } 
    else if (num == 10) {
        display.textContent = ("Igual a 10");
    }
    else {
        display.textContent = ("Menor que 10");
    }
}

function verifier1() {
    let num = Number(document.getElementById("num1").value);
    let display = document.getElementById("display1");
    if (num > 50) {
        display.textContent = ("Maior que 50");
    } 
    else if (num == 50) {
        display.textContent = ("Igual a 50");
    }
    else {
        display.textContent = ("Menor que 50");
    }
}

function pass() {
    let passit = document.getElementById("passparagraph").value;
    let display = document.getElementById("display2");
    if (passit == "senha") {
        display.textContent = ("Senha correta");
    }
    else {
        display.textContent = ("Senha incorreta");
    }
}

function noir() {
    let black = document.getElementById("black").value;
    let preto = document.getElementById("booty");
    if (black == "escuro") {
        booty.style.background = "gray";
    }
}

function change() {
    let tent = document.getElementById("tent").value;
    let texto = document.getElementById("texto");
    if (tent == "chato") {
        texto.textContent = ("Você acertou! Você acertou! Você acertou!");
        texto.style.color = "royalblue";
    }
}

function changeit() {
    let mudar = document.getElementById("mudar").value;
    let botao = document.getElementById("botao");
    let botao1 = document.getElementById("botao1");
    let botao2 = document.getElementById("botao2");
    let botao3 = document.getElementById("botao3");
    let botao4 = document.getElementById("botao4");
    let botao5 = document.getElementById("botao5");
    let botao6 = document.getElementById("botao6");
    if (mudar == "ok") {
        botao.style.background = "black";
        botao1.style.background = "black";
        botao2.style.background = "black";
        botao3.style.background = "black";
        botao4.style.background = "black";
        botao5.style.background = "black";
        botao6.style.background = "black";
        botao.style.color = "violet";
        botao1.style.color = "violet";
        botao2.style.color = "violet";
        botao3.style.color = "violet";
        botao4.style.color = "violet";
        botao5.style.color = "violet";
        botao6.style.color = "violet";
    }
}

function aumentar() {
    let mudanca = Number(document.getElementById("mudanca").value);
    let pequeno = document.getElementById("pequeno");
    if (mudanca >= 20) {
        pequeno.style.fontSize = "xx-large"
        pequeno.style.fontWeight = "bolder"
        
    }
}

function usuario() {
    let ario = document.getElementById("usu").value;
    let p = document.getElementById("aparecer");
    if (ario == "admin") {
        p.textContent = ("Bem-vindo!")
    }
}

function valor() {
    let ver = Number(document.getElementById("ver").value);
    let p = document.getElementById("tochange");
    if (ver == 67) {
        p.style.fontSize = "xx-large";
        p.style.fontWeight = "bolder";
        p.style.color = "royalblue";
        p.textContent = (ver);
    }
}

function triplets() {
    const trio = Number(document.getElementById("trio").value);
    const box = document.getElementById("box1");
    const card = document.getElementById("box2");
    const caixa = document.getElementById("box3");
    if (trio == 3) {
        box.style.background = "royalblue";
        card.style.background = "red";
        caixa.style.background = "black";
        box.style.color = "violet";
        card.style.color = "aqua";
        caixa.style.color = "whitesmoke";
        box.style.fontSize = "larger"
        card.style.fontSize = "larger"
        caixa.style.fontSize = "larger"
    }
}

function hund() {
    const cem = Number(document.getElementById("cem").value);
    const booty = document.getElementById("booty");
    if (cem >= 100) {
        booty.style.background = "violet";
        booty.style.color = "royalblue";
    }
}

function copy() {
    const copia = document.getElementById("copia").value;
    const faz = document.getElementById("tntfz");
    if (copia == "copiar"){
        faz.textContent = (copia);
    }
}

function twins() {
    const duo = Number(document.getElementById("duo").value);
    const box = document.getElementById("box1");
    const card = document.getElementById("box2");
    const caixa = document.getElementById("box3");
    if (duo == 64) {
        box.style.background = "violet";
        card.style.background = "royalblue";
        caixa.style.background = "magenta";
        box.style.color = "aqua";
        card.style.color = "whitesmoke";
        caixa.style.color = "black";
    }
}

function chief() {
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;
    const booty = document.getElementById("booty");
    const one = document.getElementById("botao");
    const two = document.getElementById("botao1");
    const three = document.getElementById("botao2");
    const four = document.getElementById("botao3");
    const five = document.getElementById("botao4");
    const six = document.getElementById("botao5");
    const seven = document.getElementById("botao6");
    const eight = document.getElementById("verifier");
    const nine = document.getElementById("verifier1");
    const ten = document.getElementById("pass");
    const eleven = document.getElementById("noir");
    const twelve = document.getElementById("change");
    const third = document.getElementById("changeit");
    const fourteen = document.getElementById("aumentar");
    const fiveteen = document.getElementById("usuario");
    const sixteen = document.getElementById("valor");
    const seventeen = document.getElementById("triplets");
    const eighteen = document.getElementById("hund");
    const nineteen = document.getElementById("copy");
    const twenty = document.getElementById("twins");
    const twentyone = document.getElementById("chief");
    if (first == "Admin" && second == "Log32") {
        booty.style.background = "rgb(32, 32, 32)";
        one.style.background = "lightsteelblue";
        two.style.background = "lightsteelblue";
        three.style.background = "lightsteelblue";
        four.style.background = "lightsteelblue";
        five.style.background = "lightsteelblue";
        six.style.background = "lightsteelblue";
        seven.style.background = "lightsteelblue";
        eight.style.background = "lightsteelblue";
        nine.style.background = "lightsteelblue";
        ten.style.background = "lightsteelblue";
        eleven.style.background = "lightsteelblue";
        twelve.style.background = "lightsteelblue";
        third.style.background = "lightsteelblue";
        fourteen.style.background = "lightsteelblue";
        fiveteen.style.background = "lightsteelblue";
        sixteen.style.background = "lightsteelblue";
        seventeen.style.background = "lightsteelblue";
        eighteen.style.background = "lightsteelblue";
        nineteen.style.background = "lightsteelblue";
        twenty.style.background = "lightsteelblue";
        twentyone.style.background = "lightsteelblue";
        one.style.color = "deepskyblue";
        two.style.color = "deepskyblue";
        three.style.color = "deepskyblue";
        four.style.color = "deepskyblue";
        five.style.color = "deepskyblue";
        six.style.color = "deepskyblue";
        seven.style.color = "deepskyblue";
        eight.style.color = "deepskyblue";
        nine.style.color = "deepskyblue";
        ten.style.color = "deepskyblue";
        eleven.style.color = "deepskyblue";
        twelve.style.color = "deepskyblue";
        third.style.color = "deepskyblue";
        fourteen.style.color = "deepskyblue";
        fiveteen.style.color = "deepskyblue";
        sixteen.style.color = "deepskyblue";
        seventeen.style.color = "deepskyblue";
        eighteen.style.color = "deepskyblue";
        nineteen.style.color = "deepskyblue";
        twenty.style.color = "deepskyblue";
        twentyone.style.color = "deepskyblue";
    }
}