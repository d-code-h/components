document.getElementById("submit").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((each) => {
    if (!each.checkValidity()) {
      each.classList.add("invalid");
    } else {
      each.classList.remove("invalid");
    }
  });
});

document.querySelectorAll("input").forEach((each) => {
  each.addEventListener("keyup", (e) => {
    if (!each.checkValidity()) {
      each.classList.add("invalid");
      if (each.validationMessage.includes("format")) {
        if (each.type === "text") {
          each.nextElementSibling.innerHTML =
            "Please enter First name, Lastname";
        } else if (each.type === "tel") {
          each.nextElementSibling.innerHTML =
            "Please enter a valid phone number";
        } else {
          each.nextElementSibling.innerHTML =
            "Minimum 8 characters, an uppercase, a lowercase, a symbol";
        }
      } else {
        each.nextElementSibling.innerHTML = each.validationMessage;
      }
      document.querySelectorAll("span.error").forEach((err) => {
        err.style.display = "block";
      });
    } else {
      each.classList.remove("invalid");
      each.nextElementSibling.innerHTML = "";
    }
  });
});

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();
    this.reset();
    document.querySelectorAll(".invalid").forEach((each) => {
      each.classList.remove("invalid");
    });
  });
