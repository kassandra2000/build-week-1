const length = localStorage.getItem("length");
const correctQuestions = JSON.parse(sessionStorage.getItem("correctQuestions"));
const wrongQuestions = JSON.parse(sessionStorage.getItem("wrongQuestions"));

const yourCorrectAnswers = JSON.parse(
  sessionStorage.getItem("yourCorrectAnswers")
);
const yourWrongAnswers = JSON.parse(sessionStorage.getItem("yourWrongAnswers"));
const allCorrectAnswers = JSON.parse(
  sessionStorage.getItem("allCorrectAnswers")
);
const proceedBtn=document.getElementById("proceedBtn")
console.log(wrongQuestions);
console.log(yourWrongAnswers);
// const wrongQuestionsArray = wrongQuestions.split("?")
// const yourWrongAnswersArray = yourWrongAnswers.split(",")
// const allCorrectAnswersArray = allCorrectAnswers.split(",")

for (let i = 0; i < wrongQuestions.length; i++) {
  const div = document.createElement("div");
  const main = document.querySelector("main");
  main.appendChild(div);
  const h3 = document.createElement("h3");
  h3.innerText = wrongQuestions[i];
  div.appendChild(h3);
  const p = document.createElement("p");
  p.innerHTML = "your answer: " + yourWrongAnswers[i];
  div.appendChild(p);

  const p2 = document.createElement("p");
  p2.className = "margin";
  p2.innerHTML = "correct answer: " + allCorrectAnswers[i];
  div.appendChild(p2);
}
for (let i = 0; i < correctQuestions.length; i++) {
  const div = document.createElement("div");
  const main = document.querySelector("main");
  main.appendChild(div);
  const h3 = document.createElement("h3");
  h3.innerText = correctQuestions[i];
  div.appendChild(h3);
  const p = document.createElement("p");
  p.className="correct margin2";
  p.innerHTML = "your answer: " + yourCorrectAnswers[i];
  div.appendChild(p);
  

  const p2 = document.createElement("p");
  p2.className = "margin";
  p2.innerHTML = "correct answer: " + yourCorrectAnswers[i];
  div.appendChild(p2);
}

proceedBtn.onclick=()  =>{
window.location.href = "./Result.html"
}