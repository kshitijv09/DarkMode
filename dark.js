console.log(1);
console.log("Ludacris");

const btn = document.querySelector(".btn");
const one = document.querySelector(".first");
const container = document.querySelector(".container");
const x = document.getElementsByTagName("BODY")[0];
const heading = document.querySelectorAll(".heading");

const des = document.querySelectorAll(".description");
var count = 1;
btn.addEventListener("click", function () {
  x.classList.toggle("change");
  for (let i = 0; i < des.length; i++) {
    des[i].classList.toggle("text");
  }
  if (count % 2 == 1) btn.innerHTML = "Light Mode";
  else btn.innerHTML = "Dark Mode";
  count += 1;
  for (let j = 0; j < heading.length; j++) heading[j].classList.toggle("pink");
  btn.classList.toggle("pink2");
});
