// Capturando os inputs uma única vez, para ser usado em outras funções
const input01 = document.getElementById('valor01');

const input02 = document.getElementById('valor02');

// pegando também o resultado já que vai ser o mesmo para as funções.
const resultado = document.getElementById('resultado');
resultado.style.display = 'none'
function calcularTotal(){
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    let total = v1*v2

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Valor inválido!!</h2>  
                
                <p>Por favor, digite um número.</p>
               
            `
    }

    else {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Seu total:</h2>  
                
                    <p>você adquiriu ${v2} unidades com o valor unitário de R$${v1.toFixed(2)}</p>
                    <p>O total de sua compra foi de: R$${total.toFixed(2)}</p>
               
            `
            //fazer o p ao final de tudo
    }
};

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Valor inválido!!</h2>  
                
                <p>Por favor, digite um número.</p>
               
            `
    }

    else {
        let desconto = v1*v2 / 100
        let total_desc = v1 - desconto
        resultado.style.display = 'flex'
        resultado.innerHTML =
            ` <h2>Desconto aplicado!</h2> 
                
                <p>Foi aplicado a sua compra um desconto de ${v2}% sobre o valor de R$${v1.toFixed(2)}</p>
                <p>O valor final do desconto foi: R$${total_desc.toFixed(2)}</p>
              
            `
            //fazer o p ao final de tudo
    }
};

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Valor inválido!!</h2>  
                
                <p>Por favor, digite um número.</p>
               
            `
    }

    else {
        let acrescimo = v1 * v2 / 100
        let total_acr = v1 + acrescimo
        resultado.style.display = 'flex';
        resultado.innerHTML =
            ` <h2>Acréscimo aplicado a compra</h2> 
                
                    <p>Foi aplicado um acréscimo de ${v2}% sobre o valor de: R$${v1.toFixed(2)}</p>
                    <p>O valor final com os juros foi de: R$${total_acr.toFixed(2)}</p>
           
            `
            //fazer o p ao final de tudo
    }
};

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Valor inválido!!</h2>  
                
                <p>Por favor, digite um número.</p>
               
            `
    }

    else {
        let comissao = v2 / 100
        let total_com = comissao * v1
        resultado.style.display = 'flex';
        resultado.innerHTML =
            ` <h2>Sua comissão:</h2> 
              
                    <p>Comissão de ${v2}% sobre uma venda de R$${v1.toFixed(2)}</p>
                    <p>O valor final foi de: R$${total_com.toFixed(2)}</p>
             
            `
            //fazer o p ao final de tudo
    }
};

function lucro() {
    
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    let total_lucro = v1-v2
    // verificando se é um número ou não
    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = 'flex';

        resultado.innerHTML =
            ` <h2>Valor inválido!!</h2>  
                
                <p>Por favor, digite um número.</p>
               
            `
    }

    else {
        resultado.style.display = 'flex';
        resultado.innerHTML =
            ` <h2>Seu Lucro:</h2> 
              
                    <p>O preço de sua venda foi: R$${v1.toFixed(2)} | Enquanto o custo foi de: R$${v2}</p>
                    <p>O total recebido de sua venda foi de: R$${total_lucro.toFixed(2)}</p>
        
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