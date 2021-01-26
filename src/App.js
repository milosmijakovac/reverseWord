import { useState } from "react";
import "./App.css";
import WordInput from "./components/WordInput";
import ReversedWord from "./components/ReversedWord";
import  ReversedList  from "./components/ReversedList";

function App() {
  const [word, setWord] = useState("");
  const [reversedWord, setReversedWord] = useState("");
  const [addedWords, setAddedWords] = useState([]);

  const handleWordInput = e => {
    setWord(e.target.value);
    let word = e.target.value;
    let rWord = word.length > 1 ? word.split("").reverse().join("") : "";
    setReversedWord(rWord);
  };

  const addWord = e => {
    e.preventDefault();
    if(!word) return
    setAddedWords([
      ...addedWords,
      { word: reversedWord, id: Math.random() * 100 }
    ]);
    setWord("");
    setReversedWord("");
  };

  const handleClear = () => {
    setAddedWords([]);
  };

  return (
    <div className="container">
      <WordInput word={word} inputText={handleWordInput} />

      <ReversedWord reversedWord={reversedWord} addWord={addWord} />


      <ReversedList addedWords={addedWords} clearList={handleClear}/>
     
    </div>
  );
}

export default App;
