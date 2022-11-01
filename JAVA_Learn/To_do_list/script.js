///////////////////////////      Usable variable
let list = document.querySelector("ul");
let addInput = document.querySelector("#addBox");
let searchInput = document.querySelector("#searchBox");
let addBTN = document.querySelector("#addBtn");
/////////////////////////////       Delete btn event
list.addEventListener("click", (e) => {
  if ((e.target.id = "delBtn")) {
    e.target.parentNode.remove();
    if (document.querySelectorAll("ul li").length == 0)
      list.innerHTML = "<div>The list is empty</div>";
  }
});
//////////////////////////         Add BTN
document.querySelector(".addBtn").addEventListener("click", () => {
  let newItem = document.querySelector("li").cloneNode(true);
  newItem.querySelector("span").innerText =
    document.querySelector(".addBox").value;
  list.appendChild(newItem);
  document.querySelector(".addBox").value = "";
});
//////////////////////////         Search Box
