const board = document.getElementById("board")
const deleteBtn = document.getElementById("deleteBtn")
const applyBtn = document.getElementById("applyBtn")
let boardSize = 16;

//remove all child from a node 
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const render = (boardSize, board) => {
    removeAllChildNodes(board)
    board.style["grid-template-rows"] = `repeat(${boardSize}, 1fr)`
    board.style["grid-template-columns"] = `repeat(${boardSize}, 1fr)`
    for(let i = 0; i < boardSize * boardSize; i++ ) {
            let div = document.createElement("div");
            div.classList.add("square")
            div.addEventListener("mouseover", () => {
                div.classList.add("changecolor")
            })
            board.appendChild(div)
        
        }
}


render(boardSize, board)

const clear = () => {
    const squares = document.querySelectorAll(".changecolor");
    squares.forEach((item) => {
        item.classList.remove("changecolor")
    })
}


deleteBtn.addEventListener("click",clear)


applyBtn.addEventListener("click", () => {
    const value = document.getElementById("boardSize").value
    if(value == boardSize) return
    else if (value <= 100) {
    boardSize = value
    render(boardSize, board)
    return
    }   
    prompt("urmom")
})
