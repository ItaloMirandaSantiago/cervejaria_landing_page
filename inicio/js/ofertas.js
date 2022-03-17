const imgs = [
    './imgs/download_caixa_cerveja.jfif',
    './imgs/download_amstel.jfif',
    './imgs/download.skol.jfif'
]
const valor = [
    'R$6,99',
    'R$7,75',
    'R$8,50',
]

const nome = [
    'Itaipava',
    'Amstel',
    'Skol'
]

function oferta() {
    let produtos = []
    for (let i = 0; i <= 2; i++){
        var produto = `
         <div class="produto">
             <div class="imgs">
                 <img src="${imgs[i]}" width="100%" height="100%">
             </div>
    
             <div class="text">
                 <p>${nome[i]} - ${valor[i]}</p>
             </div>
         </div>`
    
        produtos += produto
    }
    document.querySelector('.ofertas').innerHTML = produtos
}

window.addEventListener("load", oferta)