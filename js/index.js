const hamburguer = document.querySelector('.hamburguer')
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.closeOverlay')
const firstTitle = document.querySelector('.first-part h1')
const firstP = document.querySelector('.first-part p')

new SimpleAnime()

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active')
    overlay.classList.remove('closeOverlay')
    overlay.classList.toggle('overlay')
})

overlay.addEventListener('click', function(e) {
    const target = e.target
    if(target.className === 'overlay') {
        nav.classList.toggle('active')
        overlay.classList.toggle('overlay')
    }
})

function typeWriter(el) {
    const textArr = el.innerHTML.split('')
    el.innerHTML = ''
    textArr.forEach((l, i) => {
        setTimeout(() => {
            el.innerHTML += l
        }, 80 * i)
    })
}

function typeWriter2(el) {
    const textArr = el.innerHTML.split('')
    el.innerHTML = ''
    textArr.forEach((l, i) => {
        setTimeout(() => {
            el.innerHTML += l
        }, 85 * i)
    })
}
typeWriter(firstTitle)
typeWriter2(firstP)