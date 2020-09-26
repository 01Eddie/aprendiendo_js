const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeleft = document.querySelectorAll('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeleft.textContent

function ramdomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let ramdomPosition = square[Math.floor(Math.random() * 9)]
    ramdomPosition.classList.add('mole')

    //Asignamos la id del ramdomposition para hitpositionpara usar mas tarde
    hitPosition = ramdomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', ()=> {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
            hitPosition=null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(ramdomSquare, 500)
}

moveMole()

function countDown() {
    currentTime-- 
    timeleft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('Juego Terminado! El final ha llegado ' + result)
    }
}

let timerId = setInterval(countDown, 1000)