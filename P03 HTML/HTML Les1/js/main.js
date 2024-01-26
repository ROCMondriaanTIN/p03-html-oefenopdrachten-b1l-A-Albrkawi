const container = document.querySelector(".container-cards");

// const cards = [
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjg sgnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjgs gnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjg sgnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjg sgnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjgs gnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjgs gnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjg sgnmdn vgbdfgczdcsdbhj" },
//   { merk: "BMW", description: "bcjdflksjcdsn,zmhbawjg sgnmdn vgbdfgczdcsdbhj" },
// ];

// for (let x = 0; x < cards.length; x++) {
//   const card = cards[x];
//   container.innerHTML += creatCard(card.merk, card.description);
// }
// function creatCard(merk, description) {
//   return `
//   <div class="card card1">
//     <h2>${merk}</h2>
//         <p>
//         ${description}
//         </p>
//         <button>koop</button>
//         </div >`;
// }
const pofos = [
  {
    prjo: "hoger en lager",
    description: "dit is een proj",
    img: "/img/download.jpg",
  },
  {
    prjo: "escape room",
    description: "dit is een proj",
    img: "/img/download.jpg",
  },
  {
    prjo: "build game",
    description: "dit is een proj",
    img: "/img/download.jpg",
  },
  {
    prjo: "hoger en lager",
    description: "dit is een proj",
    img: "/img/download.jpg",
  },
];

function creatprojects(prjo, description, img) {
  return `<div class="card card1">
    <h2>${prjo}</h2>
    <img src="/img/download.jpg" alt="">
        <button>${description}</button>
        </div >`;
}
for (let i = 0; i < pofos.length; i++) {
  const pofo = pofos[i];
  container.innerHTML += creatprojects(pofo.prjo, pofo.description, pofos.img);
}
