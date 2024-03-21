const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")
const question10 = document.getElementById("10")
const question20 = document.getElementById("20")
const question30 = document.getElementById("30")
let difficulty = null
let numOfQuestion = null
const changePage = function () {
  if (numOfQuestion !== null && difficulty !== null) {
    window.location.href = "benchmark-Quiz-Page.html"
  }
}
function removeSelectedClass() {
  easyButton.classList.remove("selected")
  mediumButton.classList.remove("selected")
  hardButton.classList.remove("selected")
}
function removeSelectedClass2() {
  question10.classList.remove("selected")
  question20.classList.remove("selected")
  question30.classList.remove("selected")
}

function addSelectedClass(button) {
  removeSelectedClass()
  button.classList.add("selected")
}
function addSelectedClass2(button) {
  removeSelectedClass2()
  button.classList.add("selected")
}

easyButton.addEventListener("click", function () {
  addSelectedClass(easyButton)
  difficulty = easyButton.innerText
  localStorage.setItem("difficulty", difficulty)
  changePage()
})
mediumButton.addEventListener("click", function () {
  addSelectedClass(mediumButton)
  difficulty = mediumButton.innerText
  localStorage.setItem("difficulty", difficulty)
  changePage()
})
hardButton.addEventListener("click", function () {
  addSelectedClass(hardButton)
  difficulty = hardButton.innerText
  localStorage.setItem("difficulty", difficulty)
  changePage()
})

question10.addEventListener("click", function () {
  addSelectedClass2(question10)
  numOfQuestion = question10.innerText
  localStorage.setItem("numOfQuestions", numOfQuestion)
  changePage()
})
question20.addEventListener("click", function () {
  addSelectedClass2(question20)
  numOfQuestion = question20.innerText
  localStorage.setItem("numOfQuestions", numOfQuestion)
  changePage()
})
question30.addEventListener("click", function () {
  addSelectedClass2(question30)
  numOfQuestion = question30.innerText
  localStorage.setItem("numOfQuestions", numOfQuestion)
  changePage()
})
