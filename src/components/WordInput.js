import React from "react";

const WordInput = ({ word, inputText }) => {
  return (
    <div>
      <h2>Enter a word:</h2>
      <input type="text" value={word} onChange={inputText} />
      <hr/>
    </div>
  );
};

export default WordInput;
