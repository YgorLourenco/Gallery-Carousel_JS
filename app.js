let list = document.querySelector('.list')
// Vai transformar as tags filhos do list em array
let imgs = Array.from(list.children)
const nextBtn = document.querySelector('.btn-right')
const prevBtn = document.querySelector('.btn-left')

// Pegar largura da variavel imgs
// getBoundingClientRect pega a propriedadade de uma variavel
const imgWidth = imgs[0].getBoundingClientRect().width;

// Arranjando a variavel imgs uma depois de outra
function setImgPosition(img, index){
    // vai colocar na regra CSS a largura da imagem e a posição
    img.style.left = imgWidth * index + 'px'
}
// Para cada imagem da lista colocar uma posição
imgs.forEach(setImgPosition)

// Função moveToImg
const moveToImg = function(list, currentImg, targetImg) {
    list.style.transform = 'translateX(-'+targetImg.style.left+')'
    currentImg.classList.remove('current-img')
    targetImg.classList.add('current-img')
}

// Função de esconder/aparecer os botões
const hideShowArrows = function(imgs, prevBtn, nextBtn, targetIndex){
    if(targetIndex === 0) {
        prevBtn.classList.add('hidden')
        nextBtn.classList.remove('hidden')
    } else if(targetIndex === imgs.length -1){
        prevBtn.classList.remove('hidden')
        nextBtn.classList.add('hidden')
    } else {
        prevBtn.classList.remove('hidden')
        nextBtn.classList.remove('hidden')
    }
}

// Logica do botão direito
nextBtn.addEventListener('click', function() {
    const currentImg = list.querySelector('.current-img')
    const nextImg = currentImg.nextElementSibling
    const nextIndex = imgs.findIndex((img) => img === nextImg)
    moveToImg(list, currentImg, nextImg)
    hideShowArrows(imgs, prevBtn, nextBtn, nextIndex)
})

// Logica do botão esquerdo
prevBtn.addEventListener('click', function() {
    const currentImg = list.querySelector('.current-img')
    const prevImg = currentImg.previousElementSibling
    const prevIndex = imgs.findIndex((img) => img === prevImg)
    moveToImg(list, currentImg, prevImg);
    hideShowArrows(imgs, prevBtn, nextBtn, prevIndex);
})