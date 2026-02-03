"use strict";
let zahlen = [];
let bildnamen = [];
let alleEingaben = [];

function aufgabe1() {
    console.log("Aufgabe 1:")
    zahlen = [];
    for (let i = 1; i <= 18; i++)
        zahlen.push(i);
    console.log(`Zahlen = ${zahlen}`);
}

function aufgabe2() {
    console.log("Aufgabe 2:")
    zahlen.forEach((zahl, i, z) => {
        console.log(`Index ${i} = Zahl ${zahl}  Array = ${z}`);
    })
}





function aufgabe3() {
console.log("Aufgabe 3:")
    bildnamen = zahlen.map((zahl, i, z) => {
        if (zahl < 10)
            return "memory0" + zahl + ".jpg";
        else
            return "memory" + zahl + ".jpg";

    })
    console.log("Bildnamen :" + bildnamen)
}




function aufgabe4() {
    console.log("Aufgabe 4:")
    aufgabe1();
    aufgabe3();
    let bilderdiv = document.querySelector("#bilder div");
    bilderdiv.innerHTML = "";
    bildnamen.forEach((bildname) => {
        let img = document.createElement("img");
        img.src = "bilder/" + bildname;
        bilderdiv.appendChild(img);
    })

}


function aufgabe5() {
    console.log("Aufgabe 5:")
    aufgabe1();
    zahlen.sort((a, b) => { return Math.random() - 0.5; });
    console.log("aufgabe 5 gemischte Zahlen: " + zahlen)
    aufgabe3();
    let bilderdiv = document.querySelector("#bilder div");
    bilderdiv.innerHTML = "";
    bildnamen.forEach((bildname) => {
        let img = document.createElement("img");
        img.src = "bilder/" + bildname;
        bilderdiv.appendChild(img);
    });
}

function aufgabe6() {
    console.log("Aufgabe 6:")
    aufgabe1();
    aufgabe3();
    let bilderdiv = document.querySelector("#bilder div");
    bilderdiv.innerHTML = "";

    bildnamen.forEach((bildname, index) => {
        if ((index > 0) && (index < 4)) {
            let img = document.createElement("img");
            img.src = "bilder/" + bildname;
            bilderdiv.appendChild(img);
        }
    })
}

function aufgabe7() {
    console.log("Aufgabe 7:")
    alleEingaben.push(document.getElementById("eingabe").value);
    alleEingaben.sort();
    console.log(alleEingaben)
    let ausgabeDiv = document.querySelector("#ausgabe div");
    ausgabeDiv.innerHTML = alleEingaben.join("<br>");
}