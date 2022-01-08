function print(text=""){console.log(text)}
let grid = document.querySelector(".grid")
let columnCount = 2
setColumns()

//user adds 1 column
function addColumn(){
    columnCount += 1
    setColumns()
}

function removeColumn(){
    columnCount -= 1
    if(columnCount <= 1){
        columnCount = 1
    }
    setColumns()
}

function setColumns(){
    grid.style.gridTemplateColumns = `repeat(${columnCount}, 50px`
}

