var AB = document.querySelectorAll(".box");

for (let i = 0; i < AB.length; i++) {
  AB[i].addEventListener("click", () => {
    if (AB[i].classList.contains("clicked")) {
      AB[i].classList.remove("clicked");
    } else {
      AB[i].classList.add("clicked");
    }
  });
}
