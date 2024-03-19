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
];

//prendere html
const timerH2 = document.querySelector(" h2");
const h3 = document.querySelector(" .h3 h3");
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");
const button4 = document.querySelector(".btn4");

//contatore
const timerCounter = function () {
  let count = 0;
  let i = 0;
  const interval = setInterval(function () {
    count++;
    timerH2.innerHTML = count;
    //cambio domande
    if (count === 3) {
      //mettere 60s
      i++;
      count = 0;
      h3.innerHTML = arreyOfQuestions[i].question;
      if (arreyOfQuestions[i].incorrect_answers.length >= 2) {
        button2.classList.remove("hidden");
        button3.classList.remove("hidden");

        button1.innerHTML = arreyOfQuestions[i].incorrect_answers[0];
        button2.innerHTML = arreyOfQuestions[i].incorrect_answers[1];
        button3.innerHTML = arreyOfQuestions[i].incorrect_answers[2];
        button4.innerHTML = arreyOfQuestions[i].correct_answer;
        console.log(i);
      } else {
        console.log("ciao");
        button2.classList.add("hidden");
        button3.classList.add("hidden");
      }

      //interruzione ciclo
      if (i === arreyOfQuestions.length - 1) {
        clearInterval(interval);
        timerH2.innerHTML = 0;
      }
    }
  }, 1000);

  return count;
};
window.onload = timerCounter();