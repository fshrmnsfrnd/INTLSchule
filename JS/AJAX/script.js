const inputField = document.getElementById("input")
let outputField = document.getElementById("output")
let detailsField = document.getElementById("details")
//const searchBtn = document.getElementById("search")
const request = new XMLHttpRequest()
const url = "http://localhost/adressen.php"

function fetchTextSearch(text){
    request.open("get", url+"?suche="+text)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send(null)
    request.onload = function () {
        try{
            printOutput(JSON.parse(this.responseText))
        }catch(e){
            console.log(e)
        }
    }
}

function fetchDetails(id){
    request.open("get", url+"?details="+id)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    request.send(null)
    request.onload = function () {
        try{
            printDetails(JSON.parse(this.responseText))
        }catch(e){
            console.log(e)
        }
    }
}

inputField.addEventListener("change", ()=>{
    if(parseInt(inputField.value).toString() === NaN.toString()){
        fetchTextSearch(inputField.value)
    }else{
        fetchDetails(inputField.value)
    }
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

function printDetails(data){
    console.log(data)
    document.getElementById("nname").value = data.name
    document.getElementById("vname").value = data.vorname
    document.getElementById("strasse").value = data.strasse
    document.getElementById("plz").value = data.plz
    document.getElementById("ort").value = data.ort
    document.getElementById("id").value = data.id
    document.getElementById("email").value = data.email
}