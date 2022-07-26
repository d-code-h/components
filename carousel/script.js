function slide(num) {
  document.querySelector(".active").classList.remove("active");

  document.querySelectorAll("#carousel section")[num].classList.add("active");

  document.querySelector(".active__button").classList.remove("active__button");

  document.querySelectorAll("button")[num].classList.add("active__button");
}

//Previous
document.getElementById("prev").addEventListener("click", () => {
  let main = document.querySelectorAll("#carousel section");
  for (let i = 0; i < main.length; i++) {
    if (main[i].classList.contains("active")) {
      if (i === 0) {
        slide(3);
        break;
      } else {
        slide(i - 1);
        break;
      }
    }
  }
});

//Next
document.getElementById("next").addEventListener("click", () => {
  let main = document.querySelectorAll("#carousel section");
  for (let i = 0; i < main.length; i++) {
    if (main[i].classList.contains("active")) {
      if (i === 3) {
        slide(0);
        break;
      } else {
        slide(i + 1);
        break;
      }
    }
  }
});

//Event Listeners
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  slide(0);
});

document.getElementsByTagName("button")[1].addEventListener("click", () => {
  slide(1);
});

document.getElementsByTagName("button")[2].addEventListener("click", () => {
  slide(2);
});

document.getElementsByTagName("button")[3].addEventListener("click", () => {
  slide(3);
});
