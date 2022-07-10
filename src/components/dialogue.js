import {userStore as useUserStore} from '@/store'

const dialogues = [
  {
    Q: "Hello",
    A: "hi! Welcome to the iSecurity Platform. May I help you?",
  },
  {
    Q: "Where are the training games and learning materials?",
    A: "The training games and learning materials can be found under the resources section.",
  },
  {
    Q: "Where can I take the lessons?",
    A: "The lessons can be taken under the activities section.",
  },
  {
    Q: "Go to the support page.",
    A: "Here is the link.",
  },
  {
    Q: "Go to the feedback page.",
    A: "Here is the link.",
  },
  {
    Q: "What is information security?",
    A: "Information security is the act of protecting digital information assets.",
  },
  {
    Q: "What is ransomware?",
    A: "Ransomware is malicious software that encrypts data on a computer until a sum of money is paid to the hacker.",
  },
  {
    Q: "What is my score of lesson 1?",
    A: "",
  },
  {
    Q: "What is my score of lesson 2?",
    A: "",
  },
  {
    Q: "What is my score of lesson 3?",
    A: "",
  },
];

const sleep = (time) => new Promise(resolve => {
  setTimeout(resolve, time);
})

const fetchAnswer = async (query) => {
  await sleep(300)
  let formatedQuery = query.toLocaleLowerCase().replace(/[\s\?\.]/g, "");
  let foundAnswer;
  for (const dialogue of dialogues) {
    let formatedQ = dialogue.Q.toLocaleLowerCase().replace(/[\s\?\.]/g, "");
    if (formatedQuery === formatedQ) {
      foundAnswer = dialogue.A;
      const userStore = useUserStore()
      switch (formatedQuery) {
        case 'whatismyscoreoflesson1':
          foundAnswer = userStore.lesson1
          break;
        case 'whatismyscoreoflesson2':
          foundAnswer = userStore.lesson2
          break;
        case 'whatismyscoreoflesson3':
          foundAnswer = userStore.lesson3
          break;
        default:
          break;
      }
      break
    } else {
      continue;
    }
  }
  if (!foundAnswer) {
    foundAnswer = "Please contact manual customer service.";
  }
  return foundAnswer
};

export default fetchAnswer;
