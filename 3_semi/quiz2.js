const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text:
    "ギザの三大ピラミッドの中で、一番大きなピラミッドは誰のピラミッドでしょう？",
  image: "giza_pyramid.jpg",
  choices: [
    {
      text: "カフラー",
      feedback: "惜しい！カフラー王は、2番目に大きいピラミッドを作った人だよ。",
    },
    {
      text: "ツタンカーメン",
      feedback:
        "残念！ツタンカーメン王はBC1350年ごろの王でピラミッドが作られ始めた時代よりかなり後の時代の人だよ",
    },
    {
      text: "クフ",
      feedback:
        "正解！クフ王はピラミッドを建設しようと言い出した王で、一番大きなピラミッドを作らせた人だよ！",
    },
    {
      text: "メンカウラー",
      feedback: "残念！メンカウラー王は3つめのピラミッドを建てた人だよ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function() {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./quiz1.images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}

choice4.onclick = function() {
  choose(3)
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
