document.querySelectorAll(".accordion").forEach((each) => {
  each.addEventListener("click", () => {
    each.classList.toggle("active");

    console.log(each.nextElementSibling.style.maxHeight);
    console.log(each.nextElementSibling.scrollHeight);
    let next = each.nextElementSibling.style.maxHeight;
    if (next) {
      each.nextElementSibling.style.maxHeight = null;
    } else {
      each.nextElementSibling.style.maxHeight =
        each.nextElementSibling.scrollHeight + "px";
    }
  });
});
