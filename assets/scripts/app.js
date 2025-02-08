/* jshint esversion: 8 */
/*jshint -W033 */

// GLOBAL VARIABLES:
const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector(".result")
const scoreDisplay = document.querySelector(".score")
const width = 15
const invadersRemoved = []
let currentShooterIndex = 217
let invadersId = 0
let isGoingRight = true
let direction = 1
let score = 0
let isGamePaused = false;
let isGameOver = false;

// On-screen buttons:
const shooterOptions = document.querySelectorAll("#shooter-options .shooter")
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
const shooter = document.getElementById("shooter")
const startPause = document.getElementById("start-pause")
const restartButton = document.getElementById("restart")
const toggleSoundButton = document.getElementById("sound")

// Modal elements:
/*
jshint returns a warning on bootstrap not being a defined variable 
although it is needed for the code to work.
*/
const gameModal = new bootstrap.Modal(document.getElementById("game-modal"))
const startGameButton = document.getElementById("start-game")

// Sound FX with a sound object to keep the code scalable.
const soundsList = {
  boomSFX: new Audio("assets/media/audio/iphone-camera-capture.mp3"),
  gameOverSFX: new Audio("assets/media/audio/game-over-arcade.mp3"),
  successSFX: new Audio("assets/media/audio/success.mp3"),
}

// MAIN CODE:
//Sound

// Toggle volume for every sound in soundsList.
function toggleSound() {
  const newVolume = toggleSoundButton.classList.contains("sound-on") ? 0 : 0.2

  // Set volume for each sound in soundsList.
  Object.values(soundsList).forEach((sound) => (sound.volume = newVolume))

  // Toggle sound button background images.
  toggleSoundButton.classList.toggle("sound-on")
  toggleSoundButton.classList.toggle("sound-off")
}
// Set default volume for all sound elements.
Object.values(soundsList).forEach((sound) => (sound.volume = 0.2))

//Select a shooter
// Choose the shooter function using a forEach loop.
shooterOptions.forEach((option) => {
  option.addEventListener("click", chooseShooter)
})

function chooseShooter(e) {
  const selectedShooter = e.target
  console.log("Chosen shooter:", selectedShooter.id)

  shooter.classList = ""

  for (const className of selectedShooter.classList) {
    shooter.classList.add(className)
    /*
    	Passes each class individually to .shooter as the classList.add() 
      method was seeing the classes (.shooter.shooterN) as a single 
      class name and returning an InvalidCharacterError.
    */
  }
}

//Game logic.
// Show modal on page load.
window.onload = () => {
  setTimeout(() => {
    gameModal.show()
  }, 300)
}

function startGame() {
  //sets up the initial game state, before this, the aliens are just static.
  invadersId = setInterval(moveInvaders, 350)
  startPause.innerHTML = "PAUSE"
}

//Code by Ania Kubow: Creates a 15 by 15 grid spanning 255 square divs.
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div")
  square.id = i //gives ids to each square based on their index.
  grid.appendChild(square)
}

//Transforms list of divs to an array so we can loop through them.
const squares = Array.from(document.querySelectorAll(".grid div"))
console.log(squares)

// Assign invader class to selected divs within the grid using index ids.
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
]

/*
Code based on Ania Kubow's draw() which assigns a class 
to the divs occupied by the invaders.
.endRow is assigned to the bottom row's divs to evaluate for game over. 
*/
const endRow = [
  210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224,
]
function drawEnd() {
  for (let i = 0; i < endRow.length; i++) {
    squares[endRow[i]].classList.add("endRow")
  }
}
drawEnd()

//By Ania Kubow.
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!invadersRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add("invader")
    }
  }
}
draw()

function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader")
  }
}

squares[currentShooterIndex].classList.add("camera")

//moveShooter function: pressing the key arrows or clicking on screen buttons.
//Based on Ania Kubow's code.
function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("camera")
  if (
    (e.key === "ArrowLeft" || e.target.id === "left-arrow") &&
    currentShooterIndex % width !== 0
  ) {
    e.preventDefault()
    currentShooterIndex -= 1
  }
  if (
    (e.key === "ArrowRight" || e.target.id === "right-arrow") &&
    currentShooterIndex % width < width - 1
  ) {
    e.preventDefault()
    currentShooterIndex += 1
  }
  squares[currentShooterIndex].classList.add("camera")
}

// MoveInvaders function by Ania Kubow:
function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1
  //We minus one on the length because we need to use the index.
  remove()

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

  /*
  Original code was edited to address a bug. 
  Issue: the game would not end unless the invaders collided with the shooter 
  and were able to pass by this would trigger an error as the surviving 
  invaders would continue to travel down past the grid.
  */

  if (squares[currentShooterIndex].classList.contains("invader")) {
    gameOver()
  }
  /*
     Adapted from code by SCollins. Fixes the issue mentioned above.
     Create a global constant that adds the endRow class to all of the bottom 
     row divs using a for loop we check each div for when the invaders reach 
     the bottom to trigger a game over.
    */
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].matches(".invader.endRow")) {
      gameOver()
      return
    }
  }

  function gameOver() {
    resultDisplay.innerHTML = `Game Over! You shot ${score} invaders`
    soundsList.gameOverSFX.play()
    clearInterval(invadersId)
    isGameOver = true
    // Removes shooter from grid on game over
    squares[currentShooterIndex].classList.remove("camera")
    setTimeout(() => remove(), 500) // Removes all invaders on game Over
  }

  if (invadersRemoved.length === alienInvaders.length) {
    resultDisplay.innerHTML = `You Win! You shot ${score} invaders`
    soundsList.successSFX.play()
    clearInterval(invadersId)
  }
  return
}

// Shoot function - original code by Ania Kubow. Edited to customise game.
function shoot(e) {
  // Guard clause: don't shoot if the game is paused.
  if ((isGamePaused) || (isGameOver)){
    return;
  }

  let flashId
  let currentFlashIndex = currentShooterIndex

  function moveFlash() {
    console.log(squares.length)
    console.log(currentFlashIndex)

    /*
      currentFlashIndex -= width makes the flash go upwards ie: 
      if my shooter's index is 217 -15 = 202 
      (div directly above the currentFlashIndex that triggers the flash).
      */
    squares[currentFlashIndex].classList.remove("flash")
    currentFlashIndex -= width

    if (currentFlashIndex < 0 || currentFlashIndex >= squares.length) {
      clearInterval(flashId)
      return
    }

    squares[currentFlashIndex].classList.add("flash")

    if (squares[currentFlashIndex].classList.contains("invader")) {
      squares[currentFlashIndex].classList.remove("flash")
      squares[currentFlashIndex].classList.remove("invader")
      squares[currentFlashIndex].classList.add("boom")

      setTimeout(() => squares[currentFlashIndex].classList.remove("boom"), 300)
      //makes .boom disappear after 300 miliseconds.
      clearInterval(flashId)
      //Keeps track of shooted invaders so they're not drawn again when moving
      const InvaderRemoved = alienInvaders.indexOf(currentFlashIndex)
      //looks into the flash index to see if there're aliens and stores it
      invadersRemoved.push(InvaderRemoved)
      score++
      scoreDisplay.innerHTML = score
      console.log(invadersRemoved)
    }
  }
  if (e.key === "ArrowUp" || e.key === " " || e.target.id === "shooter") {
    e.preventDefault()
    flashId = setInterval(moveFlash, 150)
    soundsList.boomSFX.play()
  }
}

// Pause/Resume button:
function togglePauseResume(e) {
  if (invadersId) {
    //Game is running from the beginning so we need to pause it first
    isGamePaused = true
    clearInterval(invadersId)
    invadersId = ""
    startPause.innerHTML = "RESUME"
  } else {
    isGamePaused = false
    invadersId = setInterval(moveInvaders, 350)
    startPause.innerHTML = "PAUSE"
    moveInvaders()
  }
}

// Restart button - resets game state and starts over.
function restartGame(e) {
  location.reload()
}

//EVENT LISTENERS
startGameButton.addEventListener("click", () => {
  gameModal.hide()
  startGame()
})
toggleSoundButton.addEventListener("click", toggleSound)
document.addEventListener("keydown", moveShooter)
leftArrow.addEventListener("click", moveShooter)
rightArrow.addEventListener("click", moveShooter)
document.addEventListener("keydown", shoot)
shooter.addEventListener("click", shoot)
startPause.addEventListener("click", togglePauseResume)
restartButton.addEventListener("click", restartGame)