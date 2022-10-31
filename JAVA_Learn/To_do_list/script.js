let list = document.querySelector("ul");
let addInput = document.querySelector("footer .addBox");
let searchInput = document.querySelector("header .searchBox");
let addBTN = document.querySelector("footer .addBtn");
list.addEventListener("click", (e) => {
  if ((e.target.className = "delBtn")) e.target.parentNode.remove();
  {
    if (document.querySelectorAll("ul li").length == 0) {
      console.log("yes");
      list.innerHTML = '<div>The list is empty</div>'
    }
  }
});
