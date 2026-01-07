const clickBoxes = document.querySelectorAll(".clickBox")
let currPlayer = "X"
let clickedBoxes = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null}
const imgO = '<img src="./bilder/kreis.svg"></img>'
const imgX = '<img src="./bilder/kreuz.svg"></img>'
const imgBlind = '<img src="./bilder/blind.gif"></img>'

function updateBoxImages(){
    clickBoxes.forEach(box => {
        let img
        if(clickedBoxes[box.id] === "X"){
            img = imgX
        } else if (clickedBoxes[box.id] === "O"){
            img = imgO
        }else{
            img = imgBlind
        }
        box.innerHTML = img
    })
}

function nextPlayer(){
    if(currPlayer === "X"){
        currPlayer = "O"
    } else {
        currPlayer = "X"
    }
    console.log("Currentplayer: " + currPlayer)
}

function checkWin(){
    const winPossibs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
    winPossibs.forEach(possib => {
        const elements = []
        elements.push(document.getElementById(possib[0]).innerHTML)
        elements.push(document.getElementById(possib[1]).innerHTML)
        elements.push(document.getElementById(possib[2]).innerHTML)
        console.log(elements)

        if(elements.every(item => item === imgO)){
            alert("O Won")
        } else if (elements.every(item => item === imgX)){
            alert("X won")
        }
    })
}

function boxClick(id){
    if (clickedBoxes[id] === null){
        clickedBoxes[id] = currPlayer
        updateBoxImages()
        nextPlayer()
    }
    checkWin()
}

clickBoxes.forEach(box => {
    box.addEventListener("click", () => boxClick(box.id))
})