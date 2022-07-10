const game1Info = [
  {
    background: require("@/assets/images/1.png"),
    content:
      "Staff are unaware of the risks when working in the office. The purpose of this text-based adventure game is to educate users on how to maintain information security and web safe when working in the office.",
  },
  {
    background: require("@/assets/images/1.png"),
    content: "Please enter your name:",
    formItem: "input",
    key: "name",
  },
  {
    background: require("@/assets/images/1.png"),
    content:
      "Welcome,<br>{{name}}! This game is intended to help you understand the risks when working in the office. You can proceed the game by clicking the page. Each page will contain a scenario to guide you towards the next level. Once you start the game, you are required to fill in the blank, complete multiple-choice questions or true or false questions. After you are finished with the game, the number of correct answers will be shown in the end. They will be counted towards your final score. You can start your journey now!",
  },
  {
    background: require("@/assets/images/2.png"),
    content:
      "Though you may feel like it’s an exciting and somewhat relaxing opportunity to work at office.<br>It is important to not carelessly let your security awareness down.",
  },
  {
    background: require("@/assets/images/2.png"),
    character: require("@/assets/images/3.png"),
    characterClass: 'image3',
    content:
      "Take our lady Amy here for example.<br>She is working on some invoices in the office.",
  },
  {
    background: require("@/assets/images/4.png"),
    content:
      "As you can see, there is a lot of sensitive information she is downloading.",
  },
  {
    background: require("@/assets/images/4.png"),
    content: "I hope it’s safely secure on her office computer.",
  },
  {
    background: require("@/assets/images/4.png"),
    character: require("@/assets/images/5.png"),
    characterClass: 'image5',
    content:
      "Wait! All the invoices Amy has downloaded from office is sent directly to Tom.",
  },
  {
    background: require("@/assets/images/6.png"),
    content: "But how?",
  },
  {
    background: require("@/assets/images/7.png"),
    content: "Let’s rewind all this mess.",
  },
  {
    background: require("@/assets/images/7.png"),
    content:
      "What is the cause of downloaded files being sent directly to Tom?",
    formItem: "input",
    key: "game1Q1",
  },
  {
    background: require("@/assets/images/7.png"),
    content:
      "Normally Amy has to maintain the security of her own devices when working in the office.<br>So, Amy, it looks like you need to take some more responsibility over security.",
  },
  {
    background: require("@/assets/images/7.png"),
    content: "What should Amy do to prevent this from happening?",
    formItem: "input",
    key: "game1Q2",
  },
  {
    background: require("@/assets/images/8.png"),
    content:
      "Make sure anti-virus software is up to date and running on the computer.<br>Executing these steps will often help patch any recently discovered security issues related to the devices.",
  },
  {
    background: require("@/assets/images/8.png"),
    content:
      "Before we crack on with those invoices though, is your Wi-Fi network password protected and therefore safe from others freely connecting, by any chance?",
    formItem: "radio",
    formItemContent: ["I will check them.", "I decline to check them."],
    key: "game1Q3",
  },
  {
    background: require("@/assets/images/9.png"),
    content:
      "Here, your knowledge of information security will be tested to check if you have fully understood the learning materials.",
  },
  {
    background: require("@/assets/images/9.png"),
    content:
      "It is not your responsibility to be proactive about security when working in the office. Instead, the IT support team should ensure security of devices, data and the network.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game1Q4",
  },
  {
    background: require("@/assets/images/9.png"),
    content:
      "Employees should download and install operating system updates as soon as they are available.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game1Q5",
  },
  {
    background: require("@/assets/images/9.png"),
    content:
      "Staff should ensure that their antivirus is up-to-date and enabled.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game1Q6",
  },
  {
    background: require("@/assets/images/9.png"),
    content:
      "Staff should protect their Wi-Fi network and router with strong passwords.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game1Q7",
  },
  {
    background: require("@/assets/images/10.png"),
    content:
      "Congratulations! You have completed the game and successfully answered all the questions.<br>In lesson 1 game, you have answered {{game1Score}} questions correctly. The number of correct answers will be counted towards your final score. Thank you for your participation and enjoy the learning of iSecurity Platform!",
  },
];

const answers = {
  game1Q1: 'The cause of downloaded files being sent directly to Tom is likely due to malware being installed on Amy’s computer.',
  game1Q2: "She should download and install an operating system update as soon as she is notified about it.",
  game1Q3: "I will check them.",
  game1Q4: "False",
  game1Q5: "True",
  game1Q6: "True",
  game1Q7: "True",
}

const calcGame1Score = (obj) => {
  let count = 0
  let allCount = 0
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      allCount++
      const userAnswer = obj[key]
      const formatedUserAnswer = userAnswer.toLocaleLowerCase().replace(/[\s\?\.]/g, "");
      const corrAnswer = answers[key]
      const formatedCorrAnswer = corrAnswer.toLocaleLowerCase().replace(/[\s\?\.]/g, "");
      if (formatedUserAnswer === formatedCorrAnswer) count++
    }
  }
  return count
}

export { game1Info, calcGame1Score };
