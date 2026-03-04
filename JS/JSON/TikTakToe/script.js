const clickBoxes = document.querySelectorAll(".clickBox")
const startclickedBoxesValues = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null}
let data = {
    currPlayer: "X",
    winner: null,
    clickedBoxes: {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null}
}
const imgO = '<img src="./bilder/kreis.svg">'
const imgX = '<img src="./bilder/kreuz.svg">'
const imgBlind = '<img src="./bilder/blind.gif">'

function loadGameFromCookie(){
    const cvalue = getCookie("data")
    if(cvalue.length > 0){
        data = JSON.parse(cvalue)
    }
    updateBoxImages()
}

loadGameFromCookie()

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays*24*60*60*1000))
  let expires = "expires="+ d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function updateBoxImages(){
    clickBoxes.forEach(box => {
        let img
        if(data.clickedBoxes[box.id] === "X"){
            img = imgX
        } else if (data.clickedBoxes[box.id] === "O"){
            img = imgO
        }else{
            img = imgBlind
        }
        box.innerHTML = img
    })
}

function nextPlayer(){
    if(data.currPlayer === "X"){
        data.currPlayer = "O"
    } else {
        data.currPlayer = "X"
    }
}

function checkWin(){
    const winPossibs = [[0, 1, 2],[3, 4, 5],[6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]
    winPossibs.forEach(possib => {
        const elements = []
        elements.push(document.getElementById(possib[0]).innerHTML)
        elements.push(document.getElementById(possib[1]).innerHTML)
        elements.push(document.getElementById(possib[2]).innerHTML)

        if(elements.every(item => item === imgO)){
            data.winner = "O"
            alert("O Won")
            clear()
        } else if (elements.every(item => item === imgX)){
            data.winner = "X"
            alert("X won")
            clear()
        }
    })
}

function clear(){
    data.clickedBoxes = { ...startclickedBoxesValues }
    data.winner = null
    data.currPlayer = "X"
    setCookie("data", JSON.stringify(data), 2)
    updateBoxImages()
}

function boxClick(id){
    if (data.clickedBoxes[id] === null){
        data.clickedBoxes[id] = data.currPlayer
        updateBoxImages()
        nextPlayer()
    }
    checkWin()
    setCookie("data", JSON.stringify(data), 2)
}

clickBoxes.forEach(box => {
    box.addEventListener("click", () => boxClick(box.id))
})