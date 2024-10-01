const CONTAINERHEIGHT = 3500
const CONTAINERWIDTH = 3500

const container = document.querySelector(".container");
container.style.width = CONTAINERWIDTH + "px";
container.style.height = CONTAINERHEIGHT + "px";



function createGrid(rows){
    for (let i=0; i<rows; i++){
        row = document.createElement("div");
        row.className = "row"
        row.style.width = "100%"
        row.style.height = CONTAINERHEIGHT/rows + "px"
        for (let j=0; j<rows; j++){
            div = document.createElement("div");
            div.className = "cell"
            div.style.width = CONTAINERWIDTH/rows + "px"
            div.style.height = CONTAINERHEIGHT/rows + "px"
            row.appendChild(div)
        }
        container.appendChild(row)
    }

    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        })
    })
}

function changeGridSize(){
    let validGridSize = false
    let gridSize = ""
    while (validGridSize===false){
        gridSize = prompt("What grid size do you want?");
        if (parseInt(gridSize) <= 100){
            validGridSize = true
        }
    }
    //Delete current grid
    const rows = document.querySelectorAll(".row")
    rows.forEach(row => {
        row.remove()
    })
    //Create new grid
    createGrid(parseInt(gridSize))
}


//Game Loop
createGrid(16)

const button = document.querySelector("button")
button.addEventListener("click", changeGridSize)





