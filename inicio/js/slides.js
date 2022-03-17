let time = 300,
    currentImageIndex = 0,
    images = document.querySelectorAll('.slide_img')
    max = images.length

function mudar_img() {
    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add('selected')

}

function start() {
    setInterval(()=>{
        mudar_img()
    }, 2000)
}
// mudança dos slides
window.addEventListener("load", start)