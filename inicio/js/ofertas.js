const imgs = [
    './imgs/download_caixa_cerveja.jfif',
    './imgs/download_amstel.jfif',
    './imgs/download.skol.jfif',
    './imgs/download_caixa_cerveja.jfif',
    './imgs/download_amstel.jfif',
    './imgs/download.skol.jfif',
]
const valor = [
    'apenas por R$6,99',
    'apenas por R$7,75',
    'apenas por R$8,50',
    'apenas por R$6,99',
    'apenas por R$7,75',
    'apenas por R$8,50',   
]

const nome = [
    'Itaipava 8 latas de 200ml',
    'Amstel 15 latas de 200ml',
    'Skol 8 latas de 200ml',
    'Itaipava 8 latas de 200ml',
    'Amstel 15 latas de 200ml',
    'Skol 8 latas de 200ml',
]


function oferta() {
    let produtos = []
    for (let i = imgs.length - 1; i >= 0; i--){
        console.log(i)
        var produto = `
         <div class="produto">
             <div class="imgs">
                 <img src="${imgs[i]}" width="100%" height="100%">
             </div>
    
             <div class="text">
                 <p class='nome_do_produto'>${nome[i]}</p>
                 
                 <p class='preco'> apenas por ${valor[i]}</p>
             </div>
         </div>`
    
        produtos += produto
    }
    document.querySelector('.ofertas').innerHTML = produtos
}

window.addEventListener("load", oferta)