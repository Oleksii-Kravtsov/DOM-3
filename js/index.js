function print(text=""){console.log(text)}
let grid = document.querySelector(".grid")
let columnCount = 2
let rowCount = 2
setColumns()


function addRow(){
    rowCount++
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
    console.log("row count " + rowCount)
    console.log("column count " + columnCount)
    //no cells remaining
    if(amount == 0){
        amount = 1
        rowCount = 1
        columnCount = 1
    }

    for(let i = 0; i < amount; i++){
        if(mode){
            addLastCell()
        }else{
            removeLastCell()
        }
    }
    if(grid.childElementCount == 0){
        rowCount = 0
        columnCount = 0
    }
}

function addLastCell(){
    let newCell = document.createElement("button")
    newCell.classList.add("cell")
    grid.appendChild(newCell)
}

function removeLastCell(){
    let children = grid.querySelectorAll(".cell")
    grid.removeChild(children[children.length-1])
}
