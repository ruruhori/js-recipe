const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("transition square")) {
    figure.classList.remove("square")
    figure.classList.add("rounded")
  } else if (figure.classList.contains("transition rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.contains("transition triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
  // figure.classList.toggle("rounded")
}

// figure.onclick = function() {
// console.log(figure.classList)
// if (figure.classList.contains("transition square")) {
// figure.classList.remove("square")
// figure.classList.add("rounded")
// } else if (figure.classList.contains("transition rounded")) {
// figure.classList.remove("square")
// figure.classList.remove("rounded")
// figure.classList.add("triangle")
// } else if (figure.classList.contains("transition triangle")) {
// figure.classList.remove("triangle")
// figure.classList.add("square")
// }
// }
