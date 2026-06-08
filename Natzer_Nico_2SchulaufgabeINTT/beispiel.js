let bspMaterial = ["Bronze", "Silber", "Messing"];
let bspMuenzenListe = [{ "BildV": "M-2020-0007.av.jpg", "Nummer": "7" }, { "BildV": "M-2020-0035.av.jpg", "Nummer": "35" }, { "BildV": "M-2020-0038.av.jpg", "Nummer": "38" }, { "BildV": "M-2020-0042.av.jpg", "Nummer": "42" }, { "BildV": "M-2020-0044.av.jpg", "Nummer": "44" }, { "BildV": "M-2020-0055.av.jpg", "Nummer": "55" }, { "BildV": "M-2020-0060.av.jpg", "Nummer": "60" }, { "BildV": "M-2020-0061.av.jpg", "Nummer": "61" }, { "BildV": "M-2020-0064.av.jpg", "Nummer": "64" }, { "BildV": "M-2020-0067.av.jpg", "Nummer": "67" }, { "BildV": "M-2020-0080.av.jpg", "Nummer": "80" }, { "BildV": "M-2020-0084.av.jpg", "Nummer": "84" }, { "BildV": "M-2020-0094.av.jpg", "Nummer": "94" }, { "BildV": "M-2020-0097.av.jpg", "Nummer": "97" }]
let bspMuenze = { "Nummer": "38", "Fundort": "ohne Fundort", "Material": "Silber", "TextV": "IMP C CLAVDIVS AVG", "TextH": "PROVIDENT AVG", "Durchmesser": "19,7 mm", "BildV": "M-2020-0038.av.jpg", "BildH": "M-2020-0038.rv.jpg" }

let material = document.getElementById("material")
let muenzenBilder = document.getElementById("muenzenBilder")

function zeigeMaterialListe(allesMaterial) {
    material.innerHTML = ''
    for(let value of allesMaterial){
        material.innerHTML = material.innerHTML + '<option value="'+value+'">'+value+'</option>'
    }
}

material.addEventListener('change', (event)=>{
    console.log(event.target.value)
    /*
    fetch('/muenzen.php?material='+event.target.value).then((response) => response.json()).then((json)=>{
        zeigeBilder(json)
    }).catch(zeigeBilder(bspMuenzenListe))
    */
    zeigeBilder(bspMuenzenListe)
})

function zeigeBilder(daten){
    muenzenBilder.innerHTML = ''
    daten.forEach(element => {
        let node = document.createElement('img')
        node.setAttribute('src', 'bilder/'+element.BildV)
        node.addEventListener('click', ()=>{
            /*
            fetch('/muenzen.php?nummer='+element.id).then((response) => response.json()).then((json)=>{
                zeigeMuenzen(json)
            }).catch(zeigeMuenzen(bspMuenze))
            */
           zeigeMuenzen(bspMuenze)
        })
        muenzenBilder.appendChild(node)
    });
}

let nummer = document.getElementById('Nummer')
let fundort = document.getElementById('Fundort')
let textV = document.getElementById('TextV')
let textH = document.getElementById('TextH')
let bildRueckseite = document.getElementById('BildH')

function zeigeMuenzen(daten) {
    nummer.setAttribute('value', daten.Nummer)
    fundort.setAttribute('value', daten.Fundort)
    textV.setAttribute('value', daten.TextV)
    textH.setAttribute('value', daten.TextH)
    bildRueckseite.setAttribute('src', "bilder/"+daten.BildH)
}

//Augfgabe 2
//Mein XAMPP geht nicht ich kann nur annehmen welches format zurückkommt
//Wenn man das fetch auskommentiert und die jeweils darunter im Kommentar stehende funktion verwender geht alles

/*
fetch('/muenzen.php').then((response) => response.json()).then((json)=>{
    zeigeMaterialListe(json)
}).catch(zeigeMaterialListe(bspMaterial))
*/
zeigeMaterialListe(bspMaterial)