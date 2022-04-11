const body = document.querySelector("body")
console.log(body)
const text = document.querySelector("h1")
const backgroundSelector = document.getElementById("backgroundcolor")
const textSelector = document.getElementById("textcolor")
const inputText1 = document.getElementById("inputText1")
const inputText2 = document.getElementById("inputText2")


function changeBackground(){
    let backgroundColor = backgroundSelector.value
    console.log(backgroundColor)
    body.style.backgroundColor = backgroundColor
}

function changeText() {
    let textColor= textSelector.value
    text.style.color = textColor
    inputText1.style.color = textColor
    inputText2.style.color = textColor
}