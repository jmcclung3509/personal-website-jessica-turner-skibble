const input1= document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const clearBtn = document.getElementById("clearBtn")




function add() {
    const result= Number(input1.value) + Number(input2.value)
    input3.value= result
}


function minus() {
    const result= Number(input1.value) - Number(input2.value)
    input3.value = result
 }

function multiply() {
    const result = Number(input1.value) * Number(input2.value)
    input3.value = result
 }  
 
 
function divide() {
    const result = Number(input1.value) / Number(input2.value)
    input3.value = result
   
 
 }


  clearBtn.addEventListener("click", function() {
      input1.value="";
      input2.value="";
      input3.value=""
  })
 
 