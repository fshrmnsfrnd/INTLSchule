const inputField = document.getElementById("input")
let outputField = document.getElementById("output")
let detailsField = document.getElementById("details")
const searchBtn = document.getElementById("search")
const request = new XMLHttpRequest()
const url = "http://localhost/adressen.php"
const detailRequest = new XMLHttpRequest()

request.onload = function () {
    try{
        printOutput(JSON.parse(this.responseText))
    }catch(e){
        console.log(e)
    }
}

detailRequest.onload = function () {
    try{
        printDetails(JSON.parse(this.responseText))
    }catch(e){
        console.log(e)
    }
}

function fetchDetails(id){
    detailRequest.open("get", url+"?details="+id)
    detailRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    detailRequest.send(null)
}

inputField.addEventListener("change", ()=>{
    request.open("get", url+"?suche="+inputField.value)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send(null)
})

function printOutput(json){
    outputField.innerHTML = ''
    json.forEach(dataset => {
        let div = document.createElement("div")
        div.innerText = dataset.vorname + " " + dataset.name
        div.addEventListener("click", ()=>{
            fetchDetails(dataset.id)
        })
        outputField.appendChild(div)
    });
}

function printDetails(json){
    detailsField.innerText = JSON.stringify(json)
}