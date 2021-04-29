const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
const inputElement2 = document.getElementById("input-todo2")
const container2 = document.getElementById("cards2-container")
const add2Button = document.getElementById("add2-button")
const inputElement3 = document.getElementById("input-todo3")
const container3 = document.getElementById("cards3-container")
const add3Button = document.getElementById("add3-button")

// 追加ボタンを押したときの処理を登録
function hoge(code) {
  if (13 === code) {
    const card = createCard(inputElement.value)
    container.append(card)

    // 入力欄を空にする
    inputElement.value = ""
  }
}

function hoge2(code) {
  if (13 === code) {
    const card = createCard(inputElement2.value)
    container2.append(card)

    // 入力欄を空にする
    inputElement2.value = ""
  }
}

function hoge3(code) {
  if (13 === code) {
    const card = createCard(inputElement3.value)
    container3.append(card)

    // 入力欄を空にする
    inputElement3.value = ""
  }
}

// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}
