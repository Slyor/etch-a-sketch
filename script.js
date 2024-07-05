// create a div in the container div
// let gridSquareClone = document.querySelector(".grid-square").cloneNode(true)

// container = document.querySelector(".container")
// container.appendChild(document.createElement(gridSquareClone))

// in a variable called width store the value of the width of squares the user wants per row, then use that number in the for loop.
// create a variable width and height that take the user input, then a variable called size that calculates their multiplication. Use this as the number in the for loop. In the css, use the width to calculate the width of the board

const container = document.querySelector("#container")

function createSquare(){
  const newSquare = document.createElement("div")
  const newContent = document.createTextNode("")
  newSquare.appendChild(newContent)
  container.appendChild(newSquare)
  newSquare.setAttribute("id", "grid-square")
}

let squareWidth = +prompt("Enter width: ")
let squareHeight = +prompt("Enter height")
let size = squareWidth*squareHeight

for (i=0; i<size; i++){
  createSquare()
}

container.style.width = (52*squareWidth) + "px";

// document.getElementById("div#grid-square").style = "background: red;"