///////////////////////////      Usable variable
let list = document.querySelector("ul");
let addInput = document.querySelector("#addBox");
let searchInput = document.querySelector(".searchBox");
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
  if (document.querySelector(".addBox").value != "") {
    {
      if (document.querySelector("ul li") === null)
        document.querySelector("ul div").remove();

      let newSpan = document.createElement("span");
      newSpan.innerText = document.querySelector(".addBox").value;

      let newInput = document.createElement("input");
      newInput.className = "delBtn";
      newInput.type = "button";
      newInput.value = "Delete";

      let newItem = document.createElement("li");
      newItem.appendChild(newSpan);
      newItem.appendChild(newInput);

      document.querySelector("ul").appendChild(newItem);
      document.querySelector(".addBox").value = "";
    }
  }
});
//////////////////////////         Search Box
searchInput.addEventListener("keyup", (e) => {
  let listItems = list.querySelectorAll("li");
  if (listItems.length > 0) {
    for (let i = 0; i < listItems.length; i++)
      listItems[i].style.display = "none";
    for (let i = 0; i < listItems.length; i++) {
      if (
        listItems[i]
          .querySelector("span")
          .innerText.toLowerCase()
          .includes(document.querySelector(".searchBox").value.toLowerCase())
      ) {
        // console.log("yes");
        listItems[i].style.display = "flex";
      }
    }
  }
});
