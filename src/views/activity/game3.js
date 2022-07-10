const game3Info = [
  {
    background: require("@/assets/images/1.png"),
    content:
      "Staff are often unaware of the risks when creating passwords. The purpose of this text-based adventure game is to remind staff on the risks of choosing weak passwords and teach them to create strong passwords.",
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
    background: require("@/assets/images/20.png"),
    character: require("@/assets/images/5.png"),
    characterClass: 'image5',
    content: "This is a cyber criminal, Tom!",
  },
  {
    background: require("@/assets/images/20.png"),
    character: require("@/assets/images/5.png"),
    characterClass: 'image5',
    content:
      "He is currently trying to hack into an unsuspecting social media manager (Amy’s) account for sensitive information.",
  },
  {
    background: require("@/assets/images/21.png"),
    content:
      "However, it doesn’t take Tom to figure out that there are some passwords that are highly predictable and unfortunately common.",
  },
  {
    background: require("@/assets/images/21.png"),
    content: "Abc123, qwerty, Password1, and many others are examples of this.",
  },
  {
    background: require("@/assets/images/21.png"),
    content:
      "He frantically attempts each one of them, one after another into Amy’s password field for her email.",
  },
  {
    background: require("@/assets/images/21.png"),
    content:
      "Wait! Looks like you may have underestimated Amy there, Tom.<br>Her email account remains secure.",
  },
  {
    background: require("@/assets/images/22.png"),
    content:
      "Unless of course, Amy has left an alternate way of getting her password, on her public social media.",
  },
  {
    background: require("@/assets/images/22.png"),
    content:
      "Oh no, Amy’s publicly shared obsession for his popstar is an easy assumption for what she might use as her password that anyone after a simple Google search of her name can see.",
  },
  {
    background: require("@/assets/images/22.png"),
    content:
      "And now Tom is in.<br>Oh goodness, look at all that data that Tom is managed to come across!",
  },
  {
    background: require("@/assets/images/23.png"),
    content:
      "The filenames to those attachments – could they sound more attractive?<br>At the click of a button, these are downloaded, and company data has been compromised.",
  },
  {
    background: require("@/assets/images/24.png"),
    content:
      "Being the social media manager, Amy runs other social media accounts for her company.<br>Let’s hope she hasn’t used the same password for them.<br>Looks like she did.",
  },
  {
    background: require("@/assets/images/25.png"),
    content:
      "So how could Amy have been more secure when creating her accounts?<br>As opposed to birthdays, pets, interest etc.<br>It’s better to have a password that isn’t directly linked to publicly obtainable information about yourself.",
  },
  {
    background: require("@/assets/images/25.png"),
    content:
      "This time, Amy comes up with three random words.<br>Blue, Turkey, Hawaii, 66.<br>Ahh, now that’s a strong password.<br>Just avoid writing them down and displaying them.",
  },
  {
    background: require("@/assets/images/26.png"),
    content:
      "Let’s see Tom try and guess that now.<br>Though Tom is clearly struggling a lot more than before, it’s not impossible for it to come by pure chance.<br>See, luckily though Amy also has two-factor authentication turned on.",
  },
  {
    background: require("@/assets/images/27.png"),
    content:
      "This means that instead of letting Tom get into her emails, the email service asks for a code from an authenticator app to confirm her identity.<br>Amy should take this opportunity to change her password.",
  },
  {
    background: require("@/assets/images/28.png"),
    content:
      "Here, your knowledge of information security will be tested to check if you have fully understood the learning materials.",
  },
  {
    background: require("@/assets/images/28.png"),
    content:
      "Staff should never use generic passwords like abc123 or P@sswordI.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game3Q1",
  },
  {
    background: require("@/assets/images/28.png"),
    content:
      "Staff are allowed to use personal information like birthdays or pet names in passwords.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game3Q2",
  },
  {
    background: require("@/assets/images/28.png"),
    content:
      "Staff are encouraged to writing down passwords or sharing them between colleagues.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game3Q3",
  },
  {
    background: require("@/assets/images/28.png"),
    content:
      "It is necessary to turn on two-factor authentication!",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game3Q4",
  },
  {
    background: require("@/assets/images/10.png"),
    content:
      "Congratulations! You have completed the game and successfully answered all the questions.<br>In lesson 3 game, you have answered {{game3Score}} questions correctly. The number of correct answers will be counted towards your final score. Thank you for your participation and enjoy the learning of iSecurity Platform!"
  },
];

const answers = {
  game3Q1: "True",
  game3Q2: "False",
  game3Q3: "False",
  game3Q4: "True"
};

const calcGame3Score = (obj) => {
  let count = 0;
  let allCount = 0;
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      allCount++;
      const userAnswer = obj[key];
      const formatedUserAnswer = userAnswer
        .toLocaleLowerCase()
        .replace(/[\s\?\.]/g, "");
      const corrAnswer = answers[key];
      const formatedCorrAnswer = corrAnswer
        .toLocaleLowerCase()
        .replace(/[\s\?\.]/g, "");
      if (formatedUserAnswer === formatedCorrAnswer) count++;
    }
  }
  return count;
};

export { game3Info, calcGame3Score };
