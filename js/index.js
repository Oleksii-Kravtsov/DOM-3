function print(text=""){console.log(text)}
let grid = document.querySelector(".grid")
let columnCount = 2
let rows = 2
setColumns()


function addRow(){

}
function removeRow(){

}

//user adds 1 column
function addColumn(){
    columnCount += 1
    setColumns()
    changeCells(true, rows)
}

//user removes 1 column
function removeColumn(){
    columnCount -= 1
    if(columnCount <= 1){
        columnCount = 1
    }
    setColumns()
    changeCells(false, rows)
}

//update columns in html
function setColumns(){
    grid.style.gridTemplateColumns = `repeat(${columnCount}, 50px`
}

function changeCells(mode, amount){
    for(let i = 0; i < amount; i++){
        if(mode){
            addLastCell()
        }else{
            removeLastCell()
        }
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
