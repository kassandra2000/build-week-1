const arreyOfQuestions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "This mobile OS held the largest market share in 2012.",
    correct_answer: "iOS",
    incorrect_answers: ["Android", "BlackBerry", "Symbian"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "In computing, what does LAN stand for?",
    correct_answer: "Local Area Network",
    incorrect_answers: [
      "Long Antenna Node",
      "Light Access Node",
      "Land Address Navigation",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer hardware device provides an interface for all other connected devices to communicate?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Central Processing Unit",
      "Hard Disk Drive",
      "Random Access Memory",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does the &quot;MP&quot; stand for in MP3?",
    correct_answer: "Moving Picture",
    incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does GHz stand for?",
    correct_answer: "Gigahertz",
    incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The Windows 7 operating system has six main editions.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which computer language would you associate Django framework with?",
    correct_answer: "Python",
    incorrect_answers: ["C#", "C++", "Java"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
]

//prendere html
const timerH2 = document.querySelector(" h2");
const h3 = document.querySelector(" .h3 h3");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");
const p = document.querySelector("footer p");
const borderTimer = document.querySelector(".border-timer");
const pCorrect = document.querySelector(".correct");
const pWrong = document.querySelector(".wrong");
//punteggio risposte corette
const numerOfquestionP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//randomizzare bottoni
const changeArr = ["change1", "Nan", "change2"];

const section1 = document.querySelector(".sect1");
const section2 = document.querySelector(".sect2");

const section1 = document.querySelector(".sect1")
const section2 = document.querySelector(".sect2")
let totalResult = 0
const lengthArray = arreyOfQuestions.length
console.log(lengthArray)
// console.log(section1.classList.item(section1.classList.length - 1));
//contatore
const timerCounter = function () {
  let counterTimerColor = 0
  let count = 60
  let i = 0
  //risposte esatte

  const interval = setInterval(function () {
    counterTimerColor += 1.69
    count--
    timerH2.innerHTML = count
    borderTimer.style.background = `conic-gradient(rgba(255, 255, 255, 0.13) 0% ${counterTimerColor}%,rgb(139, 228, 255) 0%)`

    if (counterTimerColor === 101.39999999999992) {
      counterTimerColor = 1
    }
    button1.onclick = function () {
      count = 1
      if (button1.innerText === arreyOfQuestions[i].correct_answer) {
        totalResult++
        console.log(totalResult)
      }

      button1.classList.add("selected");
      pWrong.style.display = "block";
      setTimeout(() => {
        pWrong.style.display = "none";
      }, 600);
      count = 1;
      setInterval(function () {
        button1.classList.remove("selected");
      }, 300);
      if (i === arreyOfQuestions.length - 1) {
        clearInterval(interval);
        window.location.href = "./Result.html";
      }
      counterTimerColor = 0
    }
    button2.onclick = function () {
      count = 1
      if (button2.innerText === arreyOfQuestions[i].correct_answer) {
        totalResult++
        console.log(totalResult)
      }
      button2.classList.add("selected");
      pWrong.style.display = "block";
      setTimeout(() => {
        pWrong.style.display = "none";
      }, 600);
      count = 1;
      setInterval(function () {
        button2.classList.remove("selected");
      }, 300);
      if (i === arreyOfQuestions.length - 1) {
        clearInterval(interval);
        window.location.href = "./Result.html";
      }
      counterTimerColor = 0
    }
    button3.onclick = function () {
      count = 1
      if (button3.innerText === arreyOfQuestions[i].correct_answer) {
        totalResult++
        console.log(totalResult)
      }
      button3.classList.add("selected");
      pWrong.style.display = "block";
      setTimeout(() => {
        pWrong.style.display = "none";
      }, 600);
      count = 1;
      setInterval(function () {
        button3.classList.remove("selected");
      }, 300);
      if (i === arreyOfQuestions.length - 1) {
        clearInterval(interval);
        window.location.href = "./Result.html";
      }
      counterTimerColor = 0
    }
    button4.onclick = function () {
      counterTimerColor = 0
      count = 1
      if (button4.innerText === arreyOfQuestions[i].correct_answer) {
        totalResult++
        console.log(totalResult)
      }
      button4.classList.add("selected")
      setInterval(function () {
        button4.classList.remove("selected")
      }, 1500)
      if (i === arreyOfQuestions.length - 1) {
        console.log("ciao")
        clearInterval(interval)
        window.location.href = "./Result.html"
      }
    }
      counterTimerColor = 0;

      button4.classList.add("selected");
      pCorrect.style.display = "block";
      setTimeout(() => {
        pCorrect.style.display = "none";
      }, 600);
      count = 1;
      setInterval(function () {
        button4.classList.remove("selected");
      }, 300);
      //risultato incrementato ad ogni click della risposta esatta
      if (i === arreyOfQuestions.length - 1) {
        clearInterval(interval);
        window.location.href = "./Result.html";
      }
    };

    // console.log(totalResult);
    //cambio domande
    if (count === 0) {
      const randomNumber = Math.floor(Math.random() * 3);
      const randomNumber2 = Math.floor(Math.random() * 3);
      i++;
      count = 60;
      h3.innerHTML = arreyOfQuestions[i].question;
      if (arreyOfQuestions[i].incorrect_answers.length >= 2) {
        button2.classList.remove("hidden")
        button3.classList.remove("hidden")
        button1.innerHTML = arreyOfQuestions[i].incorrect_answers[0]
        section1.classList.remove(
          section1.classList.item(section1.classList.length - 1) //cambio section
        )
        section2.classList.remove(
          section2.classList.item(section2.classList.length - 1) //cambio section
        );

        section1.classList.add(changeArr[randomNumber]);
        section2.classList.add(changeArr[randomNumber2]);
        button2.innerHTML = arreyOfQuestions[i].incorrect_answers[1];
        button3.innerHTML = arreyOfQuestions[i].incorrect_answers[2];
        button4.innerHTML = arreyOfQuestions[i].correct_answer;

        // console.log(i);
        p.innerHTML = `question ${i + 1} <span>/10</span>`
      } else {
        button2.classList.add("hidden")
        button3.classList.add("hidden")
        p.innerHTML = `question ${i + 1} <span>/10</span>`
      }

      // interruzione ciclo
      if (i === arreyOfQuestions.length - 1) {
        const percentageResult = (totalResult / arreyOfQuestions.length) * 100

        localStorage.setItem("correct", totalResult)
        localStorage.setItem("correctPercentage", percentageResult)
        localStorage.setItem("length", lengthArray)
        setInterval(function () {
          clearInterval(interval)
          window.location.href = "./Result.html"
        }, 59500)
      }
    }
  }, 1000)
  return count
}
//totalResult = (totalResult / arreyOfQuestions) * 100
window.onload = timerCounter()
//calcolare percentuale risposte

/////////////////////////////////////////////////////////////////////////////
const rateUs = document.getElementById("rateUsContainer")
rateUs.addEventListener("click", () => {
  window.location.href = "../feedback.html"
})

const correctAnswers = localStorage.getItem("correctPercentage")
console.log(correctAnswers)
const correct = document.querySelector("#correct h3")
correct.innerText = correctAnswers + "%"
const wrong = document.querySelector("#wrong h3")
wrong.innerText = 100 - correctAnswers + "%"
const graph = document.querySelector(".percentage")
graphPercentage = 100 - correctAnswers
graph.style.background = `conic-gradient(rgb(210,0,148)0% ${graphPercentage}%,rgb(0,255,255)0%)`

const numOfCorrectQuestions = localStorage.getItem("correct")
const numOfQuestions = localStorage.getItem("length")
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
