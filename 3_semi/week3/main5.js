const figure = document.getElementById("figure")

figure.onmousemove = function() {
  figure.classList.toggle("rounded")
}

//addEventListenerいつ使う?onkeydownやonloadはなぜできないのか？
