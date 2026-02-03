//Aufgabe 1
const arr118 = [];
for (let i = 1; i <= 18; i++) arr118.push(i);
console.log(arr118);

//Aufgabe 2
arr118.forEach((value, index) => {
    console.log(index, value);
});

//Aufgabe 3
const arrmemjpg = arr118.map((value) => {
    if (value < 10) {
        return String("memory0" + value + ".jpg");
    }
    return String("memory" + value + ".jpg");
});
console.log(arrmemjpg);

//Aufgabe 5
arrmemjpg.sort(() => Math.random() - 0.5);

//Aufgabe 4
const bilderDiv = document.createElement("div");
arrmemjpg.forEach((value) => {
    const img = document.createElement("img");
    img.setAttribute("src", `./bilder/${value}`);
    bilderDiv.appendChild(img);
});
let body = document.getElementsByTagName("body")[0];
body.appendChild(bilderDiv);

//Aufgabe 7
let worte = [];
body.innerHTML = "";
body.innerHTML = "<input id='myInput' type='text'></input><div id='myDiv'></div><button id='myButton'>Do It</button>";
const button = document.getElementById("myButton");
let input = document.getElementById("myInput");
let output = document.getElementById("myDiv");
button.addEventListener("click", (e) => {
    worte.push(input.value);
    worte.sort();
    output.innerText = worte;
});