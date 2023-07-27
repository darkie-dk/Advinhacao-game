
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', (e) => {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})
document.getElementById('inputNumber').addEventListener('wheel', function (e) {
  e.preventDefault();
});

function handleTryClick(event) {
  event.preventDefault()
  
  let inputNumber = document.querySelector("#inputNumber")
  
  if(inputNumber.value>= 0 && inputNumber.value<=10){
    if(inputNumber.value !== ""){
  
      if(Number(inputNumber.value) == randomNumber) {
    
        togglescreen()
        screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
      }
  
      xAttempts++
    }
  }
  inputNumber.value = ""
}

function handleResetClick() {

  togglescreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10);
}

function togglescreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}



