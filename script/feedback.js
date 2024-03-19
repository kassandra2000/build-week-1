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

updateStarRating(currentRating) //default rating

stars.forEach((star, index) => {
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
  const commentBox = this //I am referencing the comment box

  if (commentBox.value.trim() !== '' && commentBox.value.length <= 200) {
    // if the button doesn't exists then create it if I input text (max 200 chara)...
    if (!submitButton) {
      submitButton = document.createElement('button') // create it
      submitButton.id = 'submit-comment'
      submitButton.textContent = 'Submit'
      submitButton.type = 'button'

      submitButton.onclick = function () {
        if (currentRating > 0 && commentBox.value.trim() !== '') {
          const feedback = {
            rating: currentRating,
            comment: commentBox.value,
          }
          console.log(feedback)
          alert('Thanks for your feedback!')
          window.location.reload() // refresh the page and send feedback
        } else {
          if (commentBox.value.trim() !== '' && currentRating === 0) {
            alert('You must rate your experience before continuing!')
          }
        }
      }

      document.querySelector('.input-comment').appendChild(submitButton) //insert it
    }
  } else {
    // empty box and existing button, remove it
    if (submitButton) {
      submitButton.remove()
    }
  }
})

/*const charCount = document.getElementById('char-count') // trying to display the character count

  charCount.innerText = `${commentBox.value.length}/200` */
