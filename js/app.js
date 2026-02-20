// Capturando os inputs uma única vez, para ser usado em outras funções
const input01 = document.getElementById('valor01');

const input02 = document.getElementById('valor02');

// pegando também o resultado já que vai ser o mesmo para as funções.
const resultado = document.getElementById('resultado');
resultado.style.display = 'none'
function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Seu total:</h2>  
                
                    <p>você adquiriu ${v2} unidades com o valor unitário de ${v1}</p>
                    <p>O total de sua compra foi de: R$${v1*v2}</p>
               
            `
            //fazer o p ao final de tudo
    }
};

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';
        let desconto = v1*v2 / 100
        resultado.innerHTML =
            ` <h2>Desconto aplicado!</h2> 
                
                <p>foi aplicado a sua compra um desconto de ${v2}% sobre o valor de ${v1}</p>
                <p>O valor final do desconto foi: R$${v1- desconto}</p>
              
            `
            //fazer o p ao final de tudo
    }
};

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';
        let acrescimo = v1 *v2 / 100
        resultado.innerHTML =
            ` <h2>Acréscimo aplicado a compra</h2> 
                
                    <p>Foi aplicado um acréscimo de ${v2}% sobre o valor de: ${v1}</p>
                    <p>O valor final com os juros foi de: R$${v1 + acrescimo}</p>
           
            `
            //fazer o p ao final de tudo
    }
};

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';
        let comissao = v2 / 100
        resultado.innerHTML =
            ` <h2>Sua comissão:</h2> 
              
                    <p>Comissão de ${v2}% sobre uma venda de ${v1}</p>
                    <p>O valor foi de: R$${comissao*v1}</p>
             
            `
            //fazer o p ao final de tudo
    }
};

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        alert('Valor01 ou Valor02 inválido. Por favor digite um número')
    }

    else {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Seu Lucro:</h2> 
              
                    <p>Preço de sua venda ${v1}|Custo: ${v2}</p>
                    <p>O total recebido da venda foi de: R$${v1-v2}</p>
        
            `
            //fazer o p ao final de tudo
    }
};

function limpar() {
    
    resultado.style.display = 'none'
    input01.value = '' 
    input02.value = ''
    input01.focus();
    // devolvendo foco ao input01 com focus
};