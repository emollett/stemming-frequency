const {
  getFrequency,
  stemInputWord,
  checkMultipleWords,
  stemmingFrequency,
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
  const count = getFrequency(input, "friend");
  expect(count).toBe(5);
});

test("should stem the word to check", () => {
  const output = stemInputWord("friendly");
  expect(output).toBe("friend");
  const output2 = stemInputWord("classes");
  expect(output2).toBe("class");
  const output3 = stemInputWord("classification");
  expect(output3).toBe("class");
});

test("should count how many times a word that requires stemming appears", () => {
  const count = getFrequency(input, "friendly");
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

test("should return a message if the word isn't found", () => {
  const newInput = "Flowery flowers";
  const output = stemmingFrequency(newInput, wordsToCheck);
  expect(output["following"]).toBe("Word not found");
});

test("should throw an error if the input is not a string", () => {
  const output = stemmingFrequency(6, wordsToCheck);
  expect(output.message).toBe("Input is not a string");
});

test("should not return an error if the input is a string", () => {
  const output = stemmingFrequency(input, wordsToCheck);
  expect(output["following"]).toBe(1);
});
