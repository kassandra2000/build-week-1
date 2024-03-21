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

const mediumArray = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What does AD stand for in relation to Windows Operating Systems? ",
    correct_answer: "Active Directory",
    incorrect_answers: [
      "Alternative Drive",
      "Automated Database",
      "Active Department",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "A Boolean value of &quot;0&quot; represents which of these words?",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    correct_answer: "Motorola 68000",
    incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What is the name of the default theme that is installed with Windows XP?",
    correct_answer: "Luna",
    incorrect_answers: ["Neptune", "Whistler", "Bliss"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    correct_answer: "Year",
    incorrect_answers: ["Four Years", "Two Years", "Eight Years"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "The teapot often seen in many 3D modeling applications is called what?",
    correct_answer: "Utah Teapot",
    incorrect_answers: ["Pixar Teapot", "3D Teapot", "Tennessee Teapot"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
    correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
    incorrect_answers: [
      "&lt;scroll&gt;&lt;/scroll&gt;",
      "&lt;move&gt;&lt;/move&gt;",
      "&lt;slide&gt;&lt;/slide&gt;",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    incorrect_answers: ["static", "absolute", "relative"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "MacOS is based on Linux.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Which one of these is not an official development name for a Ubuntu release?",
    correct_answer: "Mystic Mansion",
    incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The open source program Redis is a relational database server.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "What did the name of the Tor Anonymity Network orignially stand for?",
    correct_answer: "The Onion Router",
    incorrect_answers: [
      "The Only Router",
      "The Orange Router",
      "The Ominous Router",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: [
      "Hard Disk Drive",
      "Central Processing Unit",
      "Graphics Processing Unit",
    ],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: ".rs is the top-level domain for what country?",
    correct_answer: "Serbia",
    incorrect_answers: ["Romania", "Russia", "Rwanda"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question:
      "While Apple was formed in California, in which western state was Microsoft founded?",
    correct_answer: "New Mexico",
    incorrect_answers: ["Washington", "Colorado", "Arizona"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What was the first commerically available computer processor?",
    correct_answer: "Intel 4004",
    incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"],
  },
]

const hardArray = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    correct_answer: "Cherry MX Blue",
    incorrect_answers: ["Cherry MX Black", "Cherry MX Red", "Cherry MX Brown"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: [
      "Hashing algorithm",
      "Asymmetric encryption",
      "Stream cipher",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
    correct_answer: "A&#039; + B&#039;",
    incorrect_answers: [
      "A&#039;B + B&#039;A",
      "A&#039;B&#039;",
      "AB&#039; + AB",
    ],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a layer in the OSI model for data communications?",
    correct_answer: "Connection Layer",
    incorrect_answers: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "America Online (AOL) started out as which of these online service providers?",
    correct_answer: "Quantum Link",
    incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
    correct_answer: "Heartbleed",
    incorrect_answers: ["Shellshock", "Corrupted Blood", "Shellscript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these names was an actual codename for a cancelled Microsoft project?",
    correct_answer: "Neptune",
    incorrect_answers: ["Enceladus", "Pollux", "Saturn"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The T-Mobile Sidekick smartphone is a re-branded version of the Danger Hiptop.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "How many Hz does the video standard PAL support?",
    correct_answer: "50",
    incorrect_answers: ["59", "60", "25"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: [
      "Individuals and interactions",
      "Customer collaboration",
      "Responding to change",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "What was the name of the security vulnerability found in Bash in 2014?",
    correct_answer: "Shellshock",
    incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Who is the original author of the realtime physics engine called PhysX?",
    correct_answer: "NovodeX",
    incorrect_answers: ["Ageia", "Nvidia", "AMD"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which RAID array type is associated with data mirroring?",
    correct_answer: "RAID 1",
    incorrect_answers: ["RAID 0", "RAID 10", "RAID 5"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which data structure does FILO apply to?",
    correct_answer: "Stack",
    incorrect_answers: ["Queue", "Heap", "Tree"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The acronym &quot;RIP&quot; stands for which of these?",
    correct_answer: "Routing Information Protocol",
    incorrect_answers: [
      "Runtime Instance Processes",
      "Regular Interval Processes",
      "Routine Inspection Protocol",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question:
      "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
]

//prendere html
const timerH2 = document.querySelector(" h2")
const h3 = document.querySelector(" .h3 h3")
const p = document.querySelector("footer p")
const borderTimer = document.querySelector(".border-timer")
const pCorrect = document.querySelector(".correct")
const pWrong = document.querySelector(".wrong")
const div1 = document.querySelector(".viv1")
//punteggio risposte corette
const numerOfquestionP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//randomizzare bottoni
const questionArr = [] //tutte le risposte
const arrOfTitle = [] //tutte i titoli
//creare bottoni
//Fisher–Yates shuffle!!!
function shuffle(questionArr) {
  let currentIndex = questionArr.length
  let randomIndex

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[questionArr[currentIndex], questionArr[randomIndex]] = [
      questionArr[randomIndex],
      questionArr[currentIndex],
    ]
  }

  return questionArr
}

for (let i = 0; i < arreyOfQuestions.length; i++) {
  const incorrectAnswers = questionArr.push(
    arreyOfQuestions[i].incorrect_answers
  ) //easy
  questionArr[i].push(arreyOfQuestions[i].correct_answer)
  //titoloriposte
  arrOfTitle.push(arreyOfQuestions[i].question)
  if (i > 8) {
    for (let j = 0; j < 20; j++) {
      questionArr.push(mediumArray[j].incorrect_answers) //medium
      questionArr[j + 10].push(mediumArray[j].correct_answer)
      arrOfTitle.push(mediumArray[j].question)
      shuffle(questionArr[j + 10])
      if (j > 18) {
        for (let k = 0; k < 30; k++) {
          questionArr.push(hardArray[k].incorrect_answers) //hard
          questionArr[k + 30].push(hardArray[k].correct_answer)
          arrOfTitle.push(hardArray[k].question)
          shuffle(questionArr[k + 30])
        }
      }
    }
  }

  if (questionArr[i].length === 4) {
    if (i < 4) {
      const btn = document.createElement("button")
      div1.appendChild(btn)
    }
  }
  shuffle(questionArr[i])
}
console.log(questionArr)
console.log(arrOfTitle)
let count = 60
let counterTimerColor = 0
//trovare bottoni
const buttons = document.querySelectorAll(" button")
const button1 = buttons[0]
const button2 = buttons[1]
const button3 = buttons[2]
const button4 = buttons[3]
//testo bottoni
for (let i = 0; i < questionArr[0].length; i++) {
  buttons[i].innerText = questionArr[0][i]
}
let totalResult = 0
const lengthArray = arreyOfQuestions.length
const click = function (btn, i) {
  for (let j = 0; j < buttons.length; j++) {
    if (buttons[j].innerText === arreyOfQuestions[i].correct_answer) {
      buttons[j].classList.add("correctAnswer")
      setTimeout(() => {
        buttons[j].classList.remove("correctAnswer")
      }, 1500)
    }
  }
  if (btn.innerText === arreyOfQuestions[i].correct_answer) {
    totalResult++
  }
  if (btn.innerText !== arreyOfQuestions[i].correct_answer) {
    btn.classList.add("selected")
  }

  setTimeout(function () {
    btn.classList.remove("selected")
  }, 1500)
  if (i === arreyOfQuestions.length - 1) {
    clearInterval(interval)
    window.location.href = "./Result.html"
  }
  counterTimerColor = 0
  setTimeout(() => {
    count = 1
  }, 1000)
}
//contatore
const timerCounter = function () {
  let i = 0

  const interval = setInterval(function () {
    counterTimerColor += 1.69
    count--
    timerH2.innerHTML = count
    borderTimer.style.background = `conic-gradient(rgba(255, 255, 255, 0.13) 0% ${counterTimerColor}%,rgb(139, 228, 255) 0%)`

    if (counterTimerColor === 101.39999999999992) {
      counterTimerColor = 1
    }
    button1.onclick = function () {
      click(button1, i)
    }
    button2.onclick = function () {
      click(button2, i)
    }
    button3.onclick = function () {
      click(button3, i)
    }
    button4.onclick = function () {
      click(button4, i)
    }

    //cambio domande
    if (count === 0) {
      i++
      count = 60
      h3.innerHTML = arrOfTitle[i]
      if (questionArr[i].length < 3) {
        button3.style.display = "none"
        button4.style.display = "none"
      } else if (questionArr[i].length > 2) {
        button3.style.display = "inline"
        button4.style.display = "inline"
      }
      for (let j = 0; j < questionArr[i].length; j++) {
        buttons[j].innerText = questionArr[i][j]
      }

      p.innerHTML = `question ${i + 1} <span>/10</span>`
    }

    // interruzione ciclo
    if (i === arreyOfQuestions.length - 1) {
      const percentageResult = (totalResult / arreyOfQuestions.length) * 100

      localStorage.setItem("correct", totalResult)
      localStorage.setItem("correctPercentage", percentageResult)
      localStorage.setItem("length", lengthArray)
      // setInterval(function () {
      //   clearInterval(interval);
      //   window.location.href = "./Result.html";
      // }, 59500);
    }
    // }
  }, 1000)
  return count
}
window.onload = timerCounter()
