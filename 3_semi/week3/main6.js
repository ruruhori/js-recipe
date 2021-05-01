const figure = document.getElementById("figure")
// var classes = figure.classList
// console.log(classes)

// figure.classList.toggle("rounded")

figure.onclick = function() {
  if (figure.classList.contains("square")) {
    figure.classList.remove("square")
    figure.classList.add("rounded")
  } else if (figure.classList.contains("rounded")) {
    figure.classList.remove("rounded")
    figure.classList.add("triangle")
  } else if (figure.classList.contains("triangle")) {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
