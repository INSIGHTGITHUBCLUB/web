const game2Info = [
  {
    background: require("@/assets/images/1.png"),
    content:
      "Staff are often unaware of the risks when connecting to public Wi-Fi. The purpose of this text-based adventure game is to enlighten employees on the risks and educate them on how to stay safe.",
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
      "Welcome,<br>{{name}}! This game is intended to help you understand the risks when connecting to public Wi-Fi. You can proceed the game by clicking the page. Each page will contain a scenario to guide you towards the next level. Once you start the game, you are required to fill in the blank, complete multiple-choice questions or true or false questions. After you are finished with the game, the number of correct answers will be shown in the end. They will be counted towards your final score. You can start your journey now!",
  },
  {
    background: require("@/assets/images/11.png"),
    content:
      "Nowadays, people use public Wi-Fi all the time in coffee shops, hotels, bars – the list goes on. However, if you do need to access the internet while away from your home or office, <br>You should be aware of the many threats to data security that lie in wait on public Wi-Fi.",
  },
  {
    background: require("@/assets/images/12.png"),
    content:
      "Data sent over public Wi-Fi can be/cannot be intercepted by attackers.",
    formItem: "radio",
    formItemContent: ["can be", "cannot be"],
    key: "game2Q1",
  },
  {
    background: require("@/assets/images/13.png"),
    content:
      "Any sensitive information that you send or receive while using these networks could be put at risk.",
    formItem: "radio",
    formItemContent: ["True", "False"],
    key: "game2Q2",
  },
  {
    background: require("@/assets/images/14.png"),
    content:
      "When looking to connect to public Wi-Fi, one of the most commons threat is public Wi-Fi networks.",
  },
  {
    background: require("@/assets/images/14.png"),
    content:
      "These networks often have almost identical names to genuine networks and are designed to trick you into connecting.",
  },
  {
    background: require("@/assets/images/14.png"),
    content:
      "Once connected, everything you do online can be seen by cyber criminals who monitor your activity waiting for any financial information or account credentials to be entered.",
  },
  {
    background: require("@/assets/images/14.png"),
    content: "This is what is known as a____________________.",
    formItem: "input",
    key: "game2Q3",
  },
  {
    background: require("@/assets/images/14.png"),
    content: "It’s also worth remembering that ______________ can also be used as a way of infecting your devices with malware.",
    formItem: "input",
    key: "game2Q4",
  },
  {
    background: require("@/assets/images/14.png"),
    content: "Cyber criminals can easily send across Trojans, viruses & other kinds of malicious software via a secure/unsecure Wi-Fi connection.",
    formItem: "radio",
    formItemContent: ["secure", "unsecure"],
    key: "game2Q5",
  },
  {
    background: require("@/assets/images/14.png"),
    content: "These are then able to cause damage to your computer and could also compromise any sensitive information stored within."
  },
  {
    background: require("@/assets/images/15.png"),
    content: "Fortunately, there are several steps you can take to stay safe when using Public Wi-Fi."
  },
  {
    background: require("@/assets/images/15.png"),
    content: "1: Verify Your Connection.<br>Make sure to check with a member of staff that you are connected to the correct public Wi-Fi."
  },
  {
    background: require("@/assets/images/15.png"),
    content: "Otherwise you could end up leaking sensitive information."
  },
  {
    background: require("@/assets/images/16.png"),
    content: "2. Use HTTPS.<br>You have probably seen the padlock before when typing a URL into your browser."
  },
  {
    background: require("@/assets/images/16.png"),
    content: "This is telling you that the site you are visiting is both sending and receiving information that is encrypted."
  },
  {
    background: require("@/assets/images/16.png"),
    content: "What is Encryption:___________________________________________.",
    formItem: "input",
    key: "game2Q6",
  },
  {
    background: require("@/assets/images/17.png"),
    content: "3. Turn off File Sharing."
  },
  {
    background: require("@/assets/images/17.png"),
    content: "Another thing you can do it to turn on/turn off any file sharing or AirDrop features before connecting to public Wi-Fi.",
    formItem: "radio",
    formItemContent: ["turn on", "turn off"],
    key: "game2Q7",
  },
  {
    background: require("@/assets/images/17.png"),
    content: "If you do leave file sharing enabled, then attackers can access confidential information without you even realizing."
  },
  {
    background: require("@/assets/images/18.png"),
    content: "4. Be smart with Sensitive Data.<br>Unless it is essential, then you should refrain from logging into social media, financial or email accounts while connected to public Wi-Fi."
  },
  {
    background: require("@/assets/images/18.png"),
    content: "If you do need to check your bank account or send an email containing sensitive information, then it is worth doing it on your own device/private network.",
    formItem: "radio",
    formItemContent: ["own device", "private network"],
    key: "game2Q8",
  },
  {
    background: require("@/assets/images/19.png"),
    content: "5. Use a VPN<br>By using a Virtual Private Network, also known as a VPN."
  },
  {
    background: require("@/assets/images/19.png"),
    content: "Even if an attacker positions themselves in the middle of your connection, your data will be intercepted/remain encrypted and impossible to read without a decryption key.",
    formItem: "radio",
    formItemContent: ["be intercepted", "remain encrypted and impossible to read without a decryption key"],
    key: "game2Q9",
  },
  {
    background: require("@/assets/images/19.png"),
    content: "By following these steps, you will be able to benefit from all of the advantages that public Wi-Fi offers. While also being able to ensure that sensitive data remain secure."
  },
  {
    background: require("@/assets/images/10.png"),
    content: "Congratulations! You have completed the game and successfully answered all the questions.<br>In lesson 2 game, you have answered {{game2Score}} questions correctly. The number of correct answers will be counted towards your final score. Thank you for your participation and enjoy the learning of iSecurity Platform!"
  },
];

const answers = {
  game2Q1:
    "can be",
  game2Q2:
    "True",
  game2Q3: "Man-in-the-Middle-Attack",
  game2Q4: "Public Wi-Fi",
  game2Q5: "Unsecure",
  game2Q6: "Encryption is incredibly useful if a malicious user is lurking on public Wi-Fi, just waiting for you to enter credit card numbers, passwords or account",
  game2Q7: "Turn off",
  game2Q8: "own device",
  game2Q9: "remain encrypted and impossible to read without a decryption key",
};

const calcGame2Score = (obj) => {
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

export { game2Info, calcGame2Score };
