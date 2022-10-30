let a = document.querySelector("main");
window.addEventListener("hashchange", () => {
  update(window.location.hash);
});
function update(data) {
  a.style.fontWeight = "bold";
  a.style.fontSize = "2em";
  document.querySelectorAll("i").forEach((t)=>t.style.color = "#666");
  switch (data) {
    case "#home":
      a.innerText = "HOME";
      a.style.backgroundColor = "red";
      document.getElementById("home").style.color = "black"
      break;
    case "#search":
      a.innerText = "SEARCH";
      a.style.backgroundColor = "green";
      document.getElementById("search").style.color = "black"
      break;
    case "#likes":
      a.innerText = "LIKES";
      a.style.backgroundColor = "PINK";
      document.getElementById("likes").style.color = "black"
      break;
    case "#profile":
      a.innerText = "PROFILE";
      a.style.backgroundColor = "BLUE";
      document.getElementById("profile").style.color = "black"
      break;
  }
}
