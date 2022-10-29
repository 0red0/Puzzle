let pieces = [...Array(100).keys()];

const board = document.querySelector(".board");
const grabArea = document.querySelector(".pieces");
let tries = 0;

pieces.forEach((p) => {
   const container = document.createElement("div");
   const space = document.createElement("img");
   space.src = `./images/blank.png`;
   space.addEventListener("dragstart", dragStart);
   space.addEventListener("dragenter", dragEnter);
   space.addEventListener("dragover", dragOver);
   space.addEventListener("drop", drop);
   space.addEventListener("dragleave", dragLeave);
   space.addEventListener("dragend", dragEnd);
   container.append(space);
   board.append(container);
});

pieces.sort(() => Math.random() - 0.5);

pieces.forEach((p) => {
   const container = document.createElement("div");
   const img = document.createElement("img");
   img.src = `./images/p (${p + 1}).jpg`;
   img.alt = `./images/p (${pieces.indexOf(p) + 1}).jpg`;
   img.addEventListener("dragstart", dragStart);
   img.addEventListener("dragenter", dragEnter);
   img.addEventListener("dragover", dragOver);
   img.addEventListener("drop", drop);
   img.addEventListener("dragleave", dragLeave);
   img.addEventListener("dragend", dragEnd);
   container.append(img);
   grabArea.append(container);
});

let currTile;
let otherTile;

function dragStart() {
   currTile = this;
}
function dragOver(e) {
   e.preventDefault();
}
function dragEnter(e) {
   e.preventDefault();
}
function dragLeave() {}
function drop(e) {
   e.preventDefault();
   otherTile = this;
}
function dragEnd() {
   if (currTile.src.includes("blank")) return;
   let currImg = currTile.src;
   let otherImg = otherTile.src;
   currTile.src = otherImg;
   otherTile.src = currImg;
   document.querySelector("article span").innerText = tries;
   tries++;
}
