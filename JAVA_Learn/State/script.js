data = {
  itemid: "home",
  color: "red",
  text: "HOME",
};
document.querySelector("nav").addEventListener("click", (e) => {
  data.itemid = e.target.getAttribute("itemid");
  update(data.itemid);
});
function update(itemid) {
  if (itemid != null) {
    switch (itemid) {
      case "home":
        data.text = "HOME";
        data.color = "red";
        break;
      case "search":
        data.text = "SEARCH";
        data.color = "blue";
        break;
      case "likes":
        data.text = "LIKES";
        data.color = "pink";
        break;
      case "profile":
        data.text = "ROFILES";
        data.color = "green";
        break;
    }
    window.history.pushState(data, "", data.itemid);
  }
  document.querySelector("main").style.backgroundColor = data.color;
  document.querySelector("h1").innerText = data.text;
  document.querySelectorAll("i").forEach((e) => (e.style.color = "#999"));
  document.querySelector(`i[itemid=${data.itemid}]`).style.color = "black";
}
addEventListener("popstate", (event) => {
    data.itemid= event.state.itemid;
  data.color= event.state.color;
  data.text = event.state.text
//   text: "HOME",
//     data.text 
//     data.color = 
//   console.log(event);
  update();
  // data.itemid = event.state.itemid
  // update(data.itemid)
});
