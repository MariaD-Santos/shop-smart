// Capturando os inputs uma única vez, para ser usado em outras funções
const input01 = document.getElementById('valor01');

const input02 = document.getElementById('valor02');

// pegando também o resultado já que vai ser o mesmo para as funções.
const resultado = document.getElementById('resultado');

function CalcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>seu Total:<h2/> 
                <ul>
                    <p>você adquiriu ${v2} unidades com o valor unitário de ${v1}<p/>
                    <li>O total de sua compra foi de: ${v1*v2}<li/>
                <ul/>
            `
            //fazer o p ao final de tudo
    }
};

function Desconto() {
    
};

function Juros() {

};

function Comissao() {

};

function Lucro() {

};

function Limpar() {
    resultado.style.display = 'none', input01.value = '', input02.value = '', input01.focus();
    // devolvendo foco ao input01 com focus
};