const display = document.getElementById("display")
const button = document.getElementById("button")
const number = 24
let count = 0

const countUp = function() {
  count += 1

  display.textContent = count / 1.0
  for (let count = 1; count <= number; count++) {
    if (count % 3 === 0) {
      console.log(`${count}!!!!!!!`)
    } else {
      console.log(count)
    }
  }
}

button.onclick = function() {
  setInterval(countUp, 1000)
  button.textContent = "stop"
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
