const { checkMultipleWords } = require("./stemmingFrequency");
const wordsToCheck = [
  "following",
  "flow",
  "classification",
  "class",
  "flower",
  "friend",
  "friendly",
  "classes",
];

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter input text, or type exit to exit: ",
});

readline.prompt();

readline.on("line", (line) => {
  switch (line.trim()) {
    case "exit":
      readline.close();
      break;
    default:
      answer = checkMultipleWords(line, wordsToCheck);
      console.table(answer);
      break;
  }
  readline.prompt();
});

readline.on("close", function () {
  process.exit(0);
});
