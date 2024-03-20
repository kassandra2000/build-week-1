const easyButton = document.getElementById('easy')
const mediumButton = document.getElementById('medium')
const hardButton = document.getElementById('hard')

function removeSelectedClass() {
  easyButton.classList.remove('selected')
  mediumButton.classList.remove('selected')
  hardButton.classList.remove('selected')
}

function addSelectedClass(button) {
  removeSelectedClass()
  button.classList.add('selected')
}

easyButton.addEventListener('click', function () {
  addSelectedClass(easyButton)
  window.location.href = './benchmark-Quiz-Page.html'
})
mediumButton.addEventListener('click', function () {
  addSelectedClass(mediumButton)
  window.location.href = './benchmark-Quiz-Page.html'
})
hardButton.addEventListener('click', function () {
  addSelectedClass(hardButton)
  window.location.href = './benchmark-Quiz-Page.html'
})
