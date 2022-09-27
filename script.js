// DOM SELECTION
// const anime = document.getElementById("judul");
// const btn = document.getElementById("btn");
// const doc1 = document.getElementById("doc");
// const doc2 = document.getElementById("doc2");

// btn.addEventListener("click", () => {
//   anime.style.color = "red";
//   anime.style.transform = "scale(2)";
//   anime.style.transition = "2s";
//   anime.style.background = "blue";
//   anime.innerHTML = "SALAH";
//   doc2.innerHTML = "<h1>APABILA</h1>";
// });

// doc1.setAttribute("name", "controller");
// 2
const elemen = document.createElement("h1");
const textBaru = document.createTextNode("Kamu Keren");

elemen.appendChild(textBaru);
const a = document.getElementById("a");

a.appendChild(elemen);

//3
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
  const newH = document.createElement("h1");
  const newText = document.createTextNode("Kamu Sugoi");
  newH.appendChild(newText);

  const b = document.getElementById("b");

  b.appendChild(newH);
});

const nggih = document.getElementById("ng");
const c = document.getElementById("c");
