let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");

btnNext.onclick = () => moveItemsOnClick("next");
btnBack.onclick = () => moveItemsOnClick("back");

function moveItemsOnClick(type) {
  let listItems = document.querySelectorAll(".list .list-item");
  let thumbitems = document.querySelectorAll(".thumb .thumb-item");

  console.log(listItems);
  console.log(thumbitems);

  if (type === "next") {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbitems[0]);
    container.classList.add("next");
  } else {
    list.prepend(listItems[3]);
    thumb.prepend(thumbitems[3]);
    container.classList.add("back");
  }

  setTimeout(() => {
    container.classList.remove("next");
    container.classList.remove("back");
  }, 3000);
}
