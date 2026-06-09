let bspMaterial = ["Bronze", "Silber", "Messing"];
let bspMuenzenListe = [{ "BildV": "M-2020-0007.av.jpg", "Nummer": "7" }, { "BildV": "M-2020-0035.av.jpg", "Nummer": "35" }, { "BildV": "M-2020-0038.av.jpg", "Nummer": "38" }, { "BildV": "M-2020-0042.av.jpg", "Nummer": "42" }, { "BildV": "M-2020-0044.av.jpg", "Nummer": "44" }, { "BildV": "M-2020-0055.av.jpg", "Nummer": "55" }, { "BildV": "M-2020-0060.av.jpg", "Nummer": "60" }, { "BildV": "M-2020-0061.av.jpg", "Nummer": "61" }, { "BildV": "M-2020-0064.av.jpg", "Nummer": "64" }, { "BildV": "M-2020-0067.av.jpg", "Nummer": "67" }, { "BildV": "M-2020-0080.av.jpg", "Nummer": "80" }, { "BildV": "M-2020-0084.av.jpg", "Nummer": "84" }, { "BildV": "M-2020-0094.av.jpg", "Nummer": "94" }, { "BildV": "M-2020-0097.av.jpg", "Nummer": "97" }]
let bspMuenze = { "Nummer": "38", "Fundort": "ohne Fundort", "Material": "Silber", "TextV": "IMP C CLAVDIVS AVG", "TextH": "PROVIDENT AVG", "Durchmesser": "19,7 mm", "BildV": "M-2020-0038.av.jpg", "BildH": "M-2020-0038.rv.jpg" }

let material = document.getElementById("material")
let muenzenBilder = document.getElementById("muenzenBilder")

function zeigeMaterialListe(allesMaterial) {
    material.innerHTML = ''
    for(m in allesMaterial){
    material.innerHTML = material.innerHTML + '<option value="'+m+'+">'+m+'</option>'
    }
}
zeigeMaterialListe(bspMaterial)

material.addEventListener('change', (event)=>{
    console.log(event.selected)
})

function zeigeBilder(daten){
    muenzenBilder.innerHTML = ''
    daten.forEach(element => {
        muenzenBilder.innerHTML = muenzenBilder.innerHTML + '<img src="bilder/'+element.BildV+'" alt=""></img>'
    });
}
zeigeBilder(bspMuenzenListe)

let nummer = document.getElementById('Nummer')
let fundort = document.getElementById('Fundort')
let textV = document.getElementById('TextV')
let textH = document.getElementById('TextH')
let bildRueckseite = document.getElementById('BildH')

function zeigeMuenzen(daten) {
    nummer.innerText = daten.Nummer
    fundort.innerText = daten.Fundort
    textV.innerText = daten.TextV
    textH.innerText = daten.TextH
    bildRueckseite.setAttribute('src', "bilder/"+daten.TextH)
}