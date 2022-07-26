document.querySelector("button").addEventListener("click", () => {
  document.querySelector("article").style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector("article").style.display = "none";
});
document.querySelector(".cancelbtn").addEventListener("click", () => {
  document.querySelector("article").style.display = "none";
});

const article = document.querySelector("article");
window.addEventListener("click", (event) => {
  if (event.target === article) {
    document.querySelector("article").style.display = "none";
  }
});
