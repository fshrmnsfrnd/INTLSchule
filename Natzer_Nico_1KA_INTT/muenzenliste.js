let muenzen = ["muenze001.jpg", "muenze002.jpg", "muenze003.jpg", "muenze004.jpg", "muenze005.jpg", "muenze006.jpg", "muenze007.jpg", "muenze008.jpg", "muenze009.jpg", "muenze010.jpg", "muenze011.jpg", "muenze012.jpg", "muenze013.jpg", "muenze014.jpg", "muenze015.jpg", "muenze016.jpg", "muenze017.jpg", "muenze018.jpg", "muenze019.jpg", "muenze020.jpg"];
let beschriftung = ["VESTA S-C",
"C CAESAR AVG GERMA[NICVS PON M TR POT]	",
"FAVSTINA-[AVGVSTA]	",
"IVNO S-C",
"IMP CAES VESPASIA[N AVG COS] III	",
"S-C                 (Adler auf Globus)",
"IMP CAES DOMIT AVG GERM COS XIIII ",
"CENS PER PP	VIRTVTI-AVGVSTI",
"[ANTONINVS A]VG PIVS P[P IMP II]	",
"[TR PO]T XX C[OS IIII - SC] (Securitas sitzend n.l.)",
"IMP SEV ALEXANDER AVG	",
"PM TRP VIIII COS III PP   S-C (Sol stehend n.l.)",
"[IMP C VIC]TORINVS PF AVG	",
"SAL[VS AV]G",
"CONSTAN-TINVS AVG	",
"BEATA TRAN-QVILLITAS - VO/TIS/XX",
"CONSTAN-TINVS AVG	",
"BEATA TRAN-QVILLITAS - VO/TIS/XX",
"GRATIA-NVS PF AVG	",
"REPARATIO REI PVB",
"IMP NERO CAESAR AVG P MAX TRP PP	",
"S-C Victoria mit Schild, Inschrift: SPQR",
"C CAESAR DIVI AVG PRON AVG P M TR P IIII PP	",
"VESTA S-C",
"IMP NERVA CAES AVG PM T[RP (o. TRP II) COS II (o.III) PP]	",
"FORTVNA [AVGVST] S-C",
"[IMP CA]ES NERVA TRAIAN AVG GERM PM	",
"TR POT [COS II PP] S-C(Victoria mit Schild: [SPQR])",
"[M AVREL A]NTONINVS AVG ARM[ENIACVS PM]	",
"[TR POT] XIX IMP [II COS III] - SC  (Mars stehend n.r.)"]

function setBild(node, index){
    let img = document.createElement("img");
    img.setAttribute('src', `./kleineMuenzen/${muenzen[index]}`)
    img.setAttribute("bildid", index)
    node.innerHTML = "";
    node.appendChild(img);
    //2
    node.addEventListener("mouseover", (e) => {
        detailbilddiv.innerHTML = "";
        const bildId = e.target.getAttribute('bildid');
        bild = document.createElement("img");
        bild.setAttribute('src', `./kleineMuenzen/${muenzen[bildId]}`)
        detailbilddiv.appendChild(bild);
        bildnameh1.innerText = muenzen[bildId];
        beschreibung.innerText = beschriftung[bildId]
    })
}

// 1
let kleinebilderdiv = document.querySelectorAll(".kleindiv")
let detailbilddiv = document.getElementById('detailbild')
let bildnameh1 = document.getElementById("bildname");
let beschreibung = document.getElementById("beschreibung")
kleinebilderdiv.forEach((node, index) => {
    setBild(node, index);
})

//3
let arrowBack = document.getElementById("arrowBack")
let arrowForward = document.getElementById("arrowForward")

arrowBack.addEventListener("click", () => {
    console.log(kleinebilderdiv[0].firstChild.getAttribute('bildid'))
    if(kleinebilderdiv[0].firstChild.getAttribute('bildid') === '0'){
        return
    }else{ //Anfang des Arrays
        kleinebilderdiv.forEach((node, index) => {
            setBild(node, node.firstChild.getAttribute('bildid') - 1);
        })
}
})

arrowForward.addEventListener("click", () => {
    if(kleinebilderdiv[kleinebilderdiv.length-1].firstChild.getAttribute('bildid') == muenzen.length - 1){
        return;
    }else{ //Ende des Arrays
        kleinebilderdiv.forEach((node, index) => {
            setBild(node, node.firstChild.getAttribute('bildid') - 0 + 1);
        })
    }
})