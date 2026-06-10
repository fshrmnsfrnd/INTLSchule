let beispielSuche = [{ "id": "1232378643", "name": "Meier, Max" }, { "id": "1000000036", "name": "Meissner, Julia" }];
let beispielFormular = {
    "id": "1000000036", "name": "Meissner", "vorname": "Julia", "geburtsdatum": "1993-05-22",
    "geschlecht": "w", "email": "julia.meissner@example.com", "blutgruppe": "O-"
};
let beispielTabelle = [{
    "id": "1000000040",
    "datum": "2025-09-05",
    "uhrzeit": "16:15:00",
    "ort": "Frankfurt"
},
{
    "id": "1000000040",
    "datum": "2025-08-22",
    "uhrzeit": "17:30:00",
    "ort": "Frankfurt"
}];

// 2.1

function formularAnzeigen(daten) {
    localStorage.setItem("currentId", daten.id)
    document.getElementById("vorname").value = daten.vorname;
    document.getElementById("nachname").value = daten.name;
    document.getElementById("geburtsdatum").value = daten.geburtsdatum;
    document.getElementById("email").value = daten.email;
    document.getElementById("blutgruppe").value = daten.blutgruppe;
    document.getElementById(daten.geschlecht).selected = true;
    document.getElementById(daten.geschlecht).checked = "true"
}

formularAnzeigen(beispielFormular)

// 2.2
function sucheListeAnzeigen(liste) {
    let list = document.getElementById("sucheListe");
    list.innerHTML = "";
    for (let i = 0; i < liste.length; i++) {
        let listItem = document.createElement("li")
        listItem.innerText = liste[i].name;
        listItem.setAttribute("id", liste[i].id)
        // 2.6
        listItem.addEventListener("click", (e) => listItemClick(e))

        list.appendChild(listItem);
    }
}

sucheListeAnzeigen(beispielSuche)

// 2.3
function tabelleAnzeigen(daten) {
    let table = document.getElementById("tabelle");
    let tbody = table.querySelector("tbody")
    tbody.innerHTML = "<tr><th>Datum</th><th>Ort</th><th>Uhrzeit</th></tr>"

    for (let i = 0; i < daten.length; i++) {
        let zeile = document.createElement("tr");
        tbody.appendChild(zeile);

        let spalte1 = document.createElement("td");
        spalte1.innerText = daten[i].datum;
        zeile.appendChild(spalte1);

        let spalte2 = document.createElement("td");
        spalte2.innerText = daten[i].ort;
        zeile.appendChild(spalte2);

        let spalte3 = document.createElement("td");
        spalte3.innerText = daten[i].uhrzeit;
        zeile.appendChild(spalte3);
    }
}

tabelleAnzeigen(beispielTabelle)

// 2.4
function blockWechseln(blockId) {
    let block1 = document.getElementById("block1")
    let block3 = document.getElementById("block3")
    let block2 = document.getElementById("block2")

    block1.style.display = "none"
    block2.style.display = "none"
    block3.style.display = "none"

    switch (blockId) {
        case 1:
            block1.style.display = "block"
            break;
        case 2:
            block2.style.display = "block"
            break;
        case 3:
            block3.style.display = "block"
            break;
        default:
            break;
    }
}

blockWechseln(1) //für default Block 1 !!

document.getElementById("block1Button").addEventListener("click", () => blockWechseln(1))
//document.getElementById("block2Button").addEventListener("click", () => blockWechseln(2))
document.getElementById("block3Button").addEventListener("click", () => blockWechseln(3))

// 2.5
const url = "http://localhost/Natzer_Nico_Abschlusspruefung26_INTT/pruefung26.php"
document.getElementById("suche").addEventListener("change", (e) => { //beim enter drücken
    if (e.target.value.length < 3) {
        sucheListeAnzeigen([])
    } else {
        fetch(url + "?name=" + e.target.value).then((response) => {
            return response.json()
        }).then((json) => {
            sucheListeAnzeigen(json)
        })
    }
})

// 2.6
function listItemClick(e) {
    fetch(url + "?id=" + e.target.id).then((response) => {
        return response.json()
    }).then((json) => {
        formularAnzeigen(json)
        document.getElementById("suche").value = ""
        blockWechseln(1)
        sucheListeAnzeigen([])
    })
}


// 2.7
document.getElementById("block2Button").addEventListener("click", () => {
    blockWechseln(2)
    if (localStorage.getItem("currentId")) {
        fetch(url + "?terminid=" + localStorage.getItem("currentId")).then((response) => {
            return response.json()
        }).then((json) => {
            tabelleAnzeigen(json)
        })
    }
})