// Game Global Variables
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('.result')
const scoreDisplay = document.querySelector('.score')
const width = 15
const invadersRemoved = [] //keeps track of shooted invaders so they're not drawn again when moving
let currentShooterIndex = 217
let invadersId = 0
let isGoingRight = true
let direction = 1
let score = 0

// On-screen buttons
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')
const shooter = document.getElementById('shooter')
const startPause = document.getElementById('start-pause')
const restartButton = document.getElementById('restart')

// Modal elements 
const gameModal = new bootstrap.Modal(document.getElementById('game-modal'))
const startGameButton = document.getElementById('start-game')


// Sound - used for testing
// let soundSFX = {
//     boomSFX: '',
// };
// Audio() constructor - https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
const boomSFX = new Audio('assets/media/iphone-camera-capture.mp3')
boomSFX.volume = 0.1
// const gameOverSFX = new Audio()
// gameOverSFX.volume = 0
// button on lower right of screen to turn all audio on/off .volume=0 for loop iterate all sounds in SFX object if e.target.id and soundsSFX.volume!==0 then turn audio off. 

//Start Game
// pop-up to remind user with instructions and Start button
// on click - set invadersId interval for moveInvaders


// Code by Ania Kubow - for loop creates grid by spanning 255 square divs and appending them to a grid of 15 by 15
for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.id = i //gives ids to each square based on their index
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div')) //transforms list of divs to an array so we can loop through them
console.log(squares)

// Assign invader class to selected divs within the grid using index ids.
const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

// loops through the alienInvaders set to draw the invaders
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!invadersRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader') //looping through set array above i=0
        }
    }
}
draw()

squares[currentShooterIndex].classList.add('camera')

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}

//Move shooter function - pressing the key arrows or clicking on the arrow buttons - based on Ania Kubow's code
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('camera')
    if ((e.key === 'ArrowLeft' || e.target.id === "left-arrow") && currentShooterIndex % width !== 0) {
        e.preventDefault()
        currentShooterIndex -= 1
    }
    if ((e.key === 'ArrowRight' || e.target.id === "right-arrow") && currentShooterIndex % width < width - 1) {
        e.preventDefault()
        currentShooterIndex += 1
    }
    squares[currentShooterIndex].classList.add('camera')
}

document.addEventListener('keydown', moveShooter)
leftArrow.addEventListener("click", moveShooter)
rightArrow.addEventListener('click', moveShooter)

// Move invaders function by Ania Kubow
function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1; //minus one on the length because we need the index
    remove();

    if (rightEdge && isGoingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1
            direction = -1
            isGoingRight = false
        }
    }
    if (leftEdge && !isGoingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1
            direction = 1
            isGoingRight = true

        }
    }
    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }
    draw()

    if (squares[currentShooterIndex].classList.contains('invader')) {
        resultDisplay.innerHTML = 'Game Over'
        clearInterval(invadersId)
        squares[currentShooterIndex].classList.remove('camera') //removes shooter from grid on game over
        remove() //removes all invaders on game Over
    }
    if (invadersRemoved.length === alienInvaders.length) {
        resultDisplay.innerHTML = 'You Win'
        clearInterval(invadersId)
    }
}

// Shoot function - original code by Ania Kubow. Edited to customise game
function shoot(e) {
    let flashId
    let currentFlashIndex = currentShooterIndex

    function moveFlash() {
        squares[currentFlashIndex].classList.remove('flash')
        currentFlashIndex -= width
        squares[currentFlashIndex].classList.add('flash')

        if (squares[currentFlashIndex].classList.contains('invader')) {
            squares[currentFlashIndex].classList.remove('flash')
            squares[currentFlashIndex].classList.remove('invader')
            squares[currentFlashIndex].classList.add('boom')
            

            setTimeout(() => squares[currentFlashIndex].classList.remove('boom'), 300)
            clearInterval(flashId)

            const InvaderRemoved = alienInvaders.indexOf(currentFlashIndex)//looks into the flash index to see if there're aliens and stores it
            invadersRemoved.push(InvaderRemoved)
            score++
            scoreDisplay.innerHTML = score
            console.log(invadersRemoved)
        }
    }
    if (e.key === 'ArrowUp' || e.target.id === 'shooter') {
        flashId = setInterval(moveFlash, 100)
        boomSFX.play() 
    }
}

// show modal on page load
window.onload = () => {
    setTimeout(() =>{
        gameModal.show()
    }, 500)
}

// start game on modal>button click
startGameButton.addEventListener('click', () => {
    gameModal.hide();
    startGame();
})

function startGame() {
    invadersId = setInterval(moveInvaders, 350);
    startPause.classList.remove('hidden-buttons')
    restartButton.classList.remove('hidden-buttons')
}

document.addEventListener('keydown', shoot)
shooter.addEventListener('click', shoot)

// module.exports = {soundSFX};