const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBt = document.getElementById('left')
const rightBt = document.getElementById('right')

let activeSlide = 0

rightBt.addEventListener('click', ()=>{
    activeSlide++
    
    if (activeSlide>slides.length -1) {
        activeSlide = 0
    }
    setBgToBody()
    setActiveSlide()
})

leftBt.addEventListener('click', ()=>{
    activeSlide--
    
    if (activeSlide< 0) {
        activeSlide = slides.length - 1
    }
    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide=>{
        slide.classList.remove('active')
        slides[activeSlide].classList.add('active')
    })
}