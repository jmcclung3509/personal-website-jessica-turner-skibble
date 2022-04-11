const countEl = document.querySelector(".counterEL")
const increaseBtn = document.querySelector(".increaseBtn")
const decreaseBtn = document.querySelector(".decreaseBtn")
const resetBtn = document.querySelector(".resetBtn")

let count = 0


function decrease() {
   count --
    countEl.innerHTML = count
    
}

function reset() {
    count = 0
    countEl.innerHTML = count
}

function increase() {
    count ++
    countEl.innerHTML = count
}