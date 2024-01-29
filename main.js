let userName = document.querySelector("input[type=text]");
let password = document.querySelector("input[type=password]");
let submit = document.querySelector(".log-in button");
let grades = document.querySelector(".grades");
let logInPage = document.querySelector(".log-in-page");
let links = document.querySelectorAll(".grades section[role=navigation] a");

submit.onclick = function (e) {
  e.preventDefault();
  if (
    userName.value === "2130153" &&
    password.value === "Mmm010602003rr%" &&
    document.querySelector("input[type=radio].student:checked")
  ) {
    userName.classList.remove("incorrect");
    password.classList.remove("incorrect");
    logInPage.style.display = "none";
    grades.style.display = "block";
  } else {
    userName.classList.add("incorrect");
    password.classList.add("incorrect");
  }
};

links.forEach((link) => {
  link.addEventListener("click", function () {
    logInPage.style.display = "flex";
    grades.style.display = "none";
  });
});
