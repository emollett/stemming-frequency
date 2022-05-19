function getFrequency(input, word) {
  const stemmedWord = stemInputWord(word);
  if (stemmedWord == "flow") {
    var re = new RegExp(/flow([^(e)]|$)/, "gi");
  } else {
    var re = new RegExp(stemmedWord, "gi");
  }
  const frequency = input.match(re);
  return frequency?.length;
}

function stemInputWord(word) {
  return word.replace(/(ly|es|ification|ing)$/, "");
}

function checkMultipleWords(input, wordsToCheck) {
  const wordCount = new Object();
  wordsToCheck.forEach((word) => {
    const stemmedWord = stemInputWord(word);
    const frequency = getFrequency(input, stemmedWord);
    wordCount[word] = frequency || "Word not found";
  });
  return wordCount;
}

module.exports = {
  getFrequency,
  stemInputWord,
  checkMultipleWords,
};
