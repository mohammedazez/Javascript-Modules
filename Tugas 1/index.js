import { hewan, buah } from "./data.js";

console.log(hewan);
console.log(buah);

// Step 1
const namaBuah = document.querySelector("#buah");
const namaHewan = document.querySelector("#hewan");

// Step 2
const displayHewan = () => {
  hewan.forEach((element) => {
    console.log(element);
    // Step 3
    let card = document.createElement("div");
    // Step 4
    card.innerHTML = `nama hewan ${element.nama} asal negara ${element.asalNegara}`;
    // Step 5
    namaHewan.appendChild(card);
  });
};

displayHewan();

const displayBuah = () => {
  buah.forEach((benda) => {
    console.log(benda);
    let card = document.createElement("div");
    card.innerHTML = `nama buahnya ${benda.nama}, warna ${benda.warna}, nama Latinya ${benda.namaLatin}, tipe bijinya ${benda.tipeBiji}`;
    namaBuah.appendChild(card);
  });
};

displayBuah();
