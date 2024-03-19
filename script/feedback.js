const stars = document.querySelectorAll('.star')
let currentRating = 0

const updateStarRating = (rating) => {
  currentRating = rating // update current rating
  stars.forEach((star) => {
    star.classList.remove('selectedStar')
  }) //I'm removing the selected class, effectively resetting it to default

  for (let i = 0; i < rating; i++) {
    stars[i].classList.add('selectedStar')
  }
} //I'm adding the selected class up to the selected rating

updateStarRating() //default rating

document.querySelectorAll('.star').forEach((star, index) => {
  star.addEventListener('click', () => {
    const selectedAlready = star.classList.contains('selectedStar') // Checking if it's already selected
    let newRating

    if (selectedAlready) {
      // If the star is selected...
      if (index === 0 || !stars[index - 1].classList.contains('selectedStar')) {
        // ...and it's the first one or the previous one isn't selected, then deselect it
        newRating = index
      } else {
        // ...and it's not the first one and the previous one is selected, then leave it selected
        newRating = index + 1
      }
    } else {
      // If it isn't already selected, select that star and the ones before it
      newRating = index + 1
    }

    updateStarRating(newRating) // Update the star rating
    console.log(`The user rating is: ${newRating}/10`)
  })
})

document.getElementById('write-comment').addEventListener('input', function () {
  let submitButton = document.getElementById('submit-comment') // check if it exists
  if (this.value.trim() !== '' && this.value.length <= 500) {
    // if the button doesn't exists then create it if I input text (max 500 chara)...
    if (!submitButton) {
      submitButton = document.createElement('button') // create it
      submitButton.id = 'submit-comment'
      submitButton.textContent = 'Submit'
      submitButton.type = 'submit'

      document.querySelector('.input-comment').appendChild(submitButton) //insert it
    }
  } else {
    // empty box and existing button, remove it
    if (submitButton) {
      submitButton.remove()
    }
  }
})

const handleSubmit = (e) => {
  e.preventDefault()

  const commentContent = document.getElementById('write-comment').value
  const feedback = {
    rating: currentRating,
    comment: commentContent,
  }
  console.log(feedback)
}

document
  .getElementById('submit-comment')
  ?.addEventListener('click', handleSubmit)
