const figure = document.getElementById("figure")

// figure.onclick = function() {
//   figure.classList.toggle("rounded")
// }

figure.onclick = function() {
  if (figure.classList.contains("transition square")) {
    figure.classList.add("rounded")
  } else if (figure.classList.contains("transition square rounded")) {
    figure.classList.remove("square")
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.contains("transition triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
