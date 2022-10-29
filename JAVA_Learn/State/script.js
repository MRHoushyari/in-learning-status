data = {
  itemid: "home",
  color: "red",
  text: "HOME",
};
document.querySelector("nav").addEventListener("click", (e) => {
  switch (e.target.getAttribute("itemid")) {
    case "home":
      window.history.pushState(data,"", data.itemid);
      data = { itemid: "home", text: "HOME", color: "red" };
      update(data);
      break;
    case "search":
      data = { itemid: "search", text: "SEARCH", color: "blue" };
      window.history.pushState(data,"", data.itemid);
      update(data);
      break;
    case "likes":
      data = { itemid: "likes", text: "LIKES", color: "pink" };
      window.history.pushState(data,"", data.itemid);
      update(data);
      break;
    case "profile":
      data = { itemid: "profile", text: "PROFILE", color: "green" };
      window.history.pushState(data,"", data.itemid);
      update(data);
      break;
  }
});
function update(itemid) {
  document.querySelector("main").style.backgroundColor = data.color;
  document.querySelector("h1").innerText = data.text;
  document.querySelectorAll("i").forEach((e)=>e.style.color = "#999");
  document.querySelector(`i[itemid=${data.itemid}]`).style.color = "black";
}
