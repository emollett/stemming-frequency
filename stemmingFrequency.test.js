const {
  getFrequency,
  stemWord,
  checkMultipleWords,
  processInput
} = require("./stemmingFrequency");

const input =
  "Friends are friendlier friendlies that are friendly and classify the friendly classification class. Flowery flowers flow through following the flower flows.";
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

test("should count how many times a word appears", () => {
  const count = getFrequency(input.split(" "), "flower");
  expect(count).toBe(1);
});

test("should stem the word to check", () => {
  const output = stemWord("friendly");
  expect(output).toBe("friend");
  const output2 = stemWord("classes");
  expect(output2).toBe("clas");
  const output3 = stemWord("classification");
  expect(output3).toBe("clas");
});

test("should stem the words in the input string", () => {
  const output = processInput(input);
  expect(output[0]).toBe("friend");
  expect(output[12]).toBe("clas");
  expect(output[13]).toBe("flower");
  expect(output[20]).toBe("flow");
})

test("should count how many times a word that requires stemming appears", () => {
  const stemmedInput = processInput(input)
  const count = getFrequency(stemmedInput, "friendly");
  expect(count).toBe(5);
});

test("should count how many times multiple words appear", () => {
  const output = checkMultipleWords(input, wordsToCheck);
  expect(output["following"]).toBe(1);
  expect(output["flow"]).toBe(2);
  expect(output["classification"]).toBe(3);
  expect(output["class"]).toBe(3);
  expect(output["flower"]).toBe(3);
  expect(output["friend"]).toBe(5);
  expect(output["friendly"]).toBe(5);
  expect(output["classes"]).toBe(3);
});

test("should throw an error if the input is not a string", () => {
  const output = checkMultipleWords(6, wordsToCheck);
  expect(output.message).toBe("Input is not a string");
});

test("should stem from prefixes", () => {
  const preFixInput = "Reclassify the declassified classic before unfollowing and unfriending my friend"
  const output = checkMultipleWords(preFixInput, wordsToCheck);
  expect(output["following"]).toBe(1);
  expect(output["flow"]).toBe(0);
  expect(output["classification"]).toBe(2);
  expect(output["class"]).toBe(2);
  expect(output["flower"]).toBe(0);
  expect(output["friend"]).toBe(2);
  expect(output["friendly"]).toBe(2);
  expect(output["classes"]).toBe(2);
});
