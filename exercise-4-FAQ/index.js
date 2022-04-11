
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const bottom1 = document.getElementById("bottom1")
const bottom2 = document.getElementById("bottom2")
const bottom3 = document.getElementById("bottom3")


btn1.addEventListener("click", function() {
    console.log("clicked 1")
    if(bottom1.classList.contains("hide")){
        bottom1.classList.remove("hide")
        bottom1.classList.add("show")
        btn1.textContent = "-"
    } else{
        
        bottom1.classList.remove("show")
        bottom1.classList.add("hide")
        btn1.textContent = "+"
    }
    

})

btn2.addEventListener("click", function() {
    console.log("clicked 2")
    if(bottom2.classList.contains("hide")){
        bottom2.classList.remove("hide")
        bottom2.classList.add("show")
        btn2.textContent = "-"
    } else{
        
        bottom2.classList.remove("show")
        bottom2.classList.add("hide")
        btn2.textContent = "+"
    }

})

btn3.addEventListener("click", function() {
    console.log("clicked 3")
    if(bottom3.classList.contains("hide")){
        bottom3.classList.remove("hide")
        bottom3.classList.add("show")
        btn3.textContent = "-"
    } else{
        
        bottom3.classList.remove("show")
        bottom3.classList.add("hide")
        btn3.textContent = "+"
    }

})