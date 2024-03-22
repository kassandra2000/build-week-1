import { wrongQuestions } from "./benchmark-Quiz-Page"
const length = localStorage.getItem("length")
const correctQuestions = sessionStorage.getItem("correctQuestions")
//const wrongQuestions = sessionStorage.getItem("wrongQuestions")

const yourCorrectAnswers = sessionStorage.getItem("yourCorrectAnswers")
const yourWrongAnswers = sessionStorage.getItem("yourWrongAnswers")
const allCorrectAnswers = sessionStorage.getItem("allCorrectAnswers")
console.log(wrongQuestions.split(","))
console.log(yourWrongAnswers)
const wrongQuestionsArray = wrongQuestions.split("?")
const yourWrongAnswersArray = yourWrongAnswers.split(",")
const allCorrectAnswersArray = allCorrectAnswers.split(",")

for (let i = 0; i < wrongQuestionsArray.length - 1; i++) {
  console.log(wrongQuestions[i])
  console.log(yourWrongAnswersArray[i])
  const div = document.createElement("div")
  const main = document.querySelector("main")
  main.appendChild(div)
  const h3 = document.createElement("h3")
  h3.innerText = wrongQuestionsArray[i] + "?"
  div.appendChild(h3)
  const p = document.createElement("p")
  p.innerHTML = yourWrongAnswersArray[i]
  div.appendChild(p)
  const span = document.createElement("span")
  span.className = "wrong"
  span.innerText = "X"
  p.appendChild(span)
  const p2 = document.createElement("p")
  p2.className = "margin"
  p2.innerHTML = allCorrectAnswersArray[i]
  div.appendChild(p2)
}
