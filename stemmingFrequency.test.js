const {
  getFrequency,
  stemInputWord,
  checkMultipleWords,
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

test("count how many times friend appears", () => {
  const count = getFrequency(input, "friend");
  expect(count).toBe(5);
});

test("stem input word friendly", () => {
  const output = stemInputWord("friendly");
  expect(output).toBe("friend");
});

test("count how many times friendly appears", () => {
  const count = getFrequency(input, "friendly");
  expect(count).toBe(5);
});

test("stem to class", () => {
  const output = stemInputWord("classes");
  expect(output).toBe("class");
  const output2 = stemInputWord("classification");
  expect(output).toBe("class");
});

test("get the count for multiple words at once", () => {
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

test("return a message if the word isn't found", () => {
  const newInput = "Flowery flowers";
  const output = checkMultipleWords(newInput, wordsToCheck);
  expect(output["following"]).toBe("Word not found");
});
