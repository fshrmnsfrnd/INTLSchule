const inputField = document.getElementById("input")
let outputField = document.getElementById("output")
let detailsField = document.getElementById("details")
const url = "http://localhost/JS/AJAX/adressen.php"

function fetchTextSearch(text){
    fetch(url+"?suche="+text).then((response)=>{
        return response.json()
    }).then((json) => {
        printOutput(json)
    }).catch((e) => {
        console.log(e)
    })
}

function fetchDetails(id){
    fetch(url+"?details="+id).then((response)=>{
        return response.json()
    }).then((json)=>{
        printDetails(json)
    })
}

inputField.addEventListener("input", ()=>{
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
    document.getElementById("nname").value = data.name
    document.getElementById("vname").value = data.vorname
    document.getElementById("strasse").value = data.strasse
    document.getElementById("plz").value = data.plz
    document.getElementById("ort").value = data.ort
    document.getElementById("id").value = data.id
    document.getElementById("email").value = data.email
}