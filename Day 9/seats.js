var AB = document.querySelectorAll(".box");

let booked_seats = document.querySelector(".bookseat");
let available_seats = document.querySelector(".availableseat");

let x = parseInt(booked_seats.innerHTML);
let y = parseInt(available_seats.innerHTML);
for (let i = 0; i < AB.length; i++) {
  AB[i].addEventListener("click", () => {
    if (AB[i].classList.contains("clicked")) {
      y += 1;
      x -= 1;
      AB[i].classList.remove("clicked");
    } else {
      x += 1;
      y -= 1;
      AB[i].classList.add("clicked");
    }
    booked_seats.innerHTML = x;
    available_seats.innerHTML = y;
  });
}
