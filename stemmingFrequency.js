function processInput(input) {
  const inputArray = input.replace(/\./g, "").toLowerCase().split(" ");

  var stemmedInputArray = [];
  inputArray.forEach((word) => {
    const stemmedWord = stemWord(word);
    stemmedInputArray.push(stemmedWord);
  });

  return stemmedInputArray;
}

function getFrequency(input, word) {
  const stemmedWord = stemWord(word);
  const frequency = input.filter((element) => element === stemmedWord).length;
  return frequency;
}

function stemWord(word) {
  const suffixesRemoved = word.replace(/(ly|ses|sification|ing|s|lier|lies|y|sify|ed|sed|sified)$/, "");
  const prefixesRemoved = suffixesRemoved.replace(/^(un|sub|mis|de|re)/, "");
  return prefixesRemoved;
}

function checkMultipleWords(input, wordsToCheck) {
  try {
    if (typeof input == "string") {
      const stemmedInput = processInput(input);

      const wordCount = new Object();
      wordsToCheck.forEach((word) => {
        const frequency = getFrequency(stemmedInput, word);
        wordCount[word] = frequency;
      });

      return wordCount;

    } else {
      throw new Error("Input is not a string");
    }
  } catch (e) {
    return e;
  }
}

module.exports = {
  getFrequency,
  stemWord,
  checkMultipleWords,
  processInput,
};
