const cards = document.querySelectorAll(".card");
let firstImageNumber;
let secondImageNumber;

cards.forEach(card => {
    card.addEventListener("click", event => {
        turnCard(getNumberFromCardId(event.target.id))
        clickCounter++
        if(clickCounter % 2 != 0){
            firstImageNumber = getCardNumberFromSrc(document.querySelector(`#image${getNumberFromCardId(event.target.id)}`).src)
        }else{
            secondImageNumber = getCardNumberFromSrc(document.querySelector(`#image${getNumberFromCardId(event.target.id)}`).src)
            playerSwitch()
        }
    })
})

function getCardNumberFromSrc(src){
    let match = src.match(/memory(\d+)\.jpg/)
    return match ? match[1] : null
}

function getNumberFromCardId(id){
    let match = id.match(/(\d+)$/)
    return match ? match[1] : null
}

function turnCard(cardNum){
    console.log("Turn" + cardNum)
    let back = document.querySelector(`#back${cardNum}`)
    let front = document.querySelector(`#front${cardNum}`)
    if(window.getComputedStyle(front).display === "none"){
        back.style.display = "none"
        front.style.display = "block"
    }else{
        back.style.display = "block"
        front.style.display = "none"
    }
}

function turnAll(){
    console.log("Turn All")
    for (let index = 1; index <= 36; index++) {
        if (index < 10){
            index = "0"+index
        }
        let back = document.querySelector(`#back${index}`)
        let front = document.querySelector(`#front${index}`)
        back.style.display = "block"
        front.style.display = "none"
    }
}

let clickCounter = 0
let currentPlayer = "player1"

function playerSwitch(){
    console.log("Switch Player")
    let success = false;
    let node;

    if(firstImageNumber == secondImageNumber){
        success = true;
        node = document.createElement("img")
        node.setAttribute("src", `./bilder/memory${firstImageNumber}.jpg`)

        document.querySelectorAll(".card").forEach(card => {
            let img = card.querySelector(".front img")
            if(img && getCardNumberFromSrc(img.src) == firstImageNumber){
                card.style.opacity = "0"
            }
        })
    }

    if(currentPlayer == "player1"){
        if(success){
            document.querySelector("#player1").appendChild(node)
        }
        document.querySelector("#player2>h2").style.background = "#bbbbbb"
        document.querySelector("#player1>h2").style.background = "#ffffff"
        currentPlayer = "player2"
        
    }else{
        if(success){
            document.querySelector("#player2").appendChild(node)
        }
        document.querySelector("#player1>h2").style.background = "#bbbbbb"
        document.querySelector("#player2>h2").style.background = "#ffffff"
        currentPlayer = "player1"
    }
    turnAll()
}