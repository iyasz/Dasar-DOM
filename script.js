// DOM SELECTION
const anime = document.getElementById("judul");
const btn = document.getElementById("btn");
const doc1 = document.getElementById("doc");
const doc2 = document.getElementById("doc2");

document.addEventListener("click", () => {
  anime.style.color = "red";
  anime.style.transform = "scale(2)";
  anime.style.transition = "2s";
  anime.style.background = "blue";
  anime.innerHTML = "SALAH";
  doc2.innerHTML = "<h1>APABILA</h1>";
});
