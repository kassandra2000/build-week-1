const rateUs = document.getElementById("rateUsContainer")
rateUs.addEventListener("click", () => {
  window.location.href = "../feedback.html"
})

const correctAnswers = localStorage.getItem("correctPercentage")
const correct = document.querySelector("#correct h3")
correct.innerText = correctAnswers + "%"
const wrong = document.querySelector("#wrong h3")
wrong.innerText = 100 - correctAnswers + "%"

const graph = document.querySelector(".percentage")
graphPercentage = 100 - correctAnswers
graph.style.background = `conic-gradient(rgb(210,0,148)0% ${graphPercentage}%,rgb(0,255,255)0%)`

const numOfCorrectQuestions = localStorage.getItem("correct")
const numOfQuestions = localStorage.getItem("numOfQuestions")
const numOfWrongQuestions = numOfQuestions - numOfCorrectQuestions
const correctQuestions = document.querySelector("#correct p")
const wrongQuestions = document.querySelector("#wrong p")
correctQuestions.innerText =
  numOfCorrectQuestions + "/" + numOfQuestions + " questions"
wrongQuestions.innerText =
  numOfWrongQuestions + "/" + numOfQuestions + " questions"

if (correctAnswers < 60) {
  const noPassText = document.querySelector("#congratulations h1")
  const noPassText2 = document.querySelector("#congratulations h3")
  const noPassText3 = document.querySelector("#congratulations p")
  noPassText.innerText = "Exam Failed"
  noPassText2.innerText = "You haven't passed the exam"
  noPassText3.innerText = "We'll contact you for further instruction"
}
