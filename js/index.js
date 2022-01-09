
function print(text=""){console.log(text)}

//grid stuff
let grid = document.querySelector(".grid")
let columnCount = 2
let rowCount = 2
setColumns()

//coloring stuff
let colorPicker = document.querySelector(".color-picker")
let userColor = colorPicker.value
let buttonId = 4

//Color Manipulation//

//set the color of one cell
function changeColor(id){
    let cell = document.querySelector(`#${id}`)
    setColor(cell, userColor)
}

//fill all
function fillAll(){
    let cells = document.querySelectorAll(".cell")
    setColors(cells, userColor)
}

//fill uncolored
function fillUncolored(){
    let unColored = document.querySelectorAll(".nocolor")
    setColors(unColored, userColor)
}

//clear the cells back to white
function clearAll(){
    cells = document.querySelectorAll(".cell")
    setColors(cells, "")
}

//update the userColor string
function updateUserColor(){
    userColor = colorPicker.value
}

//change the color of the individual cell
function setColor(cell, color){
    cell.style.backgroundColor = color
    if(color == ""){
        cell.classList.add("nocolor")
    }else{
        cell.classList.remove("nocolor")
    }
}

//change the colors of an array of cells
function setColors(cells, color){
    for(let cell of cells){
        setColor(cell, color)
    }
}

// End //

//Grid Manipulation//

//user adds 1 row
function addRow(){
    rowCount++
    setColumns()
    changeCells(true, columnCount)
}
function removeRow(){
    rowCount--
    if(rowCount <= 0){
        rowCount = 0
    }
    changeCells(false, columnCount)
}

//user adds 1 column
function addColumn(){
    columnCount++
    setColumns()
    changeCells(true, rowCount)
}

//user removes 1 column
function removeColumn(){
    columnCount--
    if(columnCount <= 0){
        columnCount = 0
    }
    setColumns()
    changeCells(false, rowCount)
}

//update columns in html
function setColumns(){
    grid.style.gridTemplateColumns = `repeat(${columnCount}, 50px`
}

function changeCells(mode, amount){
    //no cells remaining
    if(amount == 0){
        amount = 1
        rowCount = 1
        columnCount = 1
    }

    for(let i = 0; i < amount; i++){
        //if mode is to add, then add
        if(mode){
            addLastCell()
        //if mode is to not add, then subtract
        }else{
            removeLastCell()
        }
    }
    //if no children remain, reset the counts
    if(grid.childElementCount == 0){
        rowCount = 0
        columnCount = 0
    }
}

//add a single cell to the end of the grid's child list
function addLastCell(){
    let newCell = document.createElement("button")
    newCell.classList.add("cell")
    newCell.classList.add("nocolor")

    buttonId++    
    newCell.id = "b" + buttonId

    loadedFunction = changeColor.bind(this, newCell.id)
    newCell.onclick = loadedFunction

    grid.appendChild(newCell)
}

function removeLastCell(){
    let children = grid.querySelectorAll(".cell")
    let child = children[children.length-1]
    buttonId--
    grid.removeChild(child)
}

// End //