let actShown = "vorderseite"
let activePlayer = 1

document.addEventListener("DOMContentLoaded", () => { 
    const alleUmdrehen = document.getElementById("alleUmdrehen")
    const memorykaestechen = document.querySelectorAll(".memorykaestechen")
    const vorderseiten = document.querySelectorAll(".vorderseite")
    const rueckseiten = document.querySelectorAll(".rueckseite")
    const bilderSpieler1 = document.getElementById("bilderSpieler1")
    const bilderSpieler2 = document.getElementById("bilderSpieler2")
    const activeSpieler1 = document.getElementById("activeSpieler1")
    const activeSpieler2 = document.getElementById("activeSpieler2")

    alleUmdrehen.addEventListener("click", () => {
        vorderseiten.forEach(e => {
            e.style.display = actShown === "vorderseite" ? "none" : "block"
        })

        rueckseiten.forEach(e => {
            e.style.display = actShown === "vorderseite" ? "block" : "none"
        })

        actShown = actShown === "vorderseite" ? "rueckseite" : "vorderseite"
    })

    activeSpieler1.addEventListener("click", () => {
        activePlayer = 1
    })
    activeSpieler2.addEventListener("click", () => {
        activePlayer = 2
    })

    memorykaestechen.forEach(memorykaestechen_element => {
        const vorderseite = memorykaestechen_element.querySelector(".vorderseite")
        const rueckseite = memorykaestechen_element.querySelector(".rueckseite")
        rueckseite.style.display = "block"
        vorderseite.style.display = "none"
        memorykaestechen_element.addEventListener("click", () => {
            console.log(vorderseite.style.display, rueckseite.style.display)
            vorderseite.style.display = vorderseite.style.display === "none" ? "block" : "none"
            rueckseite.style.display = rueckseite.style.display === "none" ? "block" : "none"
        })
    })

    vorderseiten.forEach(e => {
        e.addEventListener("click", (e) => {
            displayDestination = activePlayer === 1 ? bilderSpieler1 : bilderSpieler2
            displayDestination.innerHTML += `<img src="${e.target.src}"/>`
        })
    })

    vorderseiten.forEach(e => {
        const path = e.src.toString().split("/")
        console.log(path[path.length-1])
    })
})