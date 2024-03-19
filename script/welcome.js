const checkbox = document.getElementById("checkbox")
const proceedButton = document.getElementById("proceedBtn")
proceedButton.disabled = true
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    proceedButton.disabled = false
  } else {
    proceedButton.disabled = true
  }
})

proceedButton.onclick = function () {
  window.location.href = "benchmark-Quiz-Page.html"
}
