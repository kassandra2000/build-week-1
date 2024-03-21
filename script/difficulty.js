const easyButton = document.getElementById("easy")
const mediumButton = document.getElementById("medium")
const hardButton = document.getElementById("hard")
function removeSelectedClass() {
  easyButton.classList.remove("selected")
  mediumButton.classList.remove("selected")
  hardButton.classList.remove("selected")
}

function addSelectedClass(button) {
  removeSelectedClass()
  button.classList.add("selected")
}

localStorage.setItem("numOfQuestions", 3)
easyButton.addEventListener("click", function () {
  addSelectedClass(easyButton)
  const difficulty = easyButton.innerText
  localStorage.setItem("difficulty", difficulty)
  window.location.href = "./benchmark-Quiz-Page.html"
})
mediumButton.addEventListener("click", function () {
  addSelectedClass(mediumButton)
  const difficulty = mediumButton.innerText
  localStorage.setItem("difficulty", difficulty)
  window.location.href = "./benchmark-Quiz-Page.html"
})
hardButton.addEventListener("click", function () {
  addSelectedClass(hardButton)
  const difficulty = hardButton.innerText
  localStorage.setItem("difficulty", difficulty)
  window.location.href = "./benchmark-Quiz-Page.html"
})
