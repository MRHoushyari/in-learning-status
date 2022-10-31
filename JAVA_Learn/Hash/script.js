let mainPage = document.querySelector("main");
window.addEventListener("hashchange", () => {
  update(window.location.hash);
});
function update(data) {
  mainPage.style.fontWeight = "bold";
  mainPage.style.fontSize = "2em";
  document.querySelectorAll("i").forEach((t)=>t.style.color = "#666");
  switch (data) {
    case "#home":
      mainPage.innerText = "HOME";
      mainPage.style.backgroundColor = "red";
      document.getElementById("home").style.color = "black"
      break;
    case "#search":
      mainPage.innerText = "SEARCH";
      mainPage.style.backgroundColor = "green";
      document.getElementById("search").style.color = "black"
      break;
    case "#likes":
      mainPage.innerText = "LIKES";
      mainPage.style.backgroundColor = "PINK";
      document.getElementById("likes").style.color = "black"
      break;
    case "#profile":
      mainPage.innerText = "PROFILE";
      mainPage.style.backgroundColor = "BLUE";
      document.getElementById("profile").style.color = "black"
      break;
    default:
    mainPage.innerText = "HOME";
    mainPage.style.backgroundColor = "red";
    document.getElementById("home").style.color = "black"
    break;
  }
}
