const wordList = ['School', 'Apple', 'React', 'Guess', 'Table'];

const WordList = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};

export default WordList;
