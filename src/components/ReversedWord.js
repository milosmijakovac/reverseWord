import React from "react";

const ReversedWord = ({reversedWord, addWord}) => {
  return (
    <div>
      <h2>Reverse Word: {reversedWord} </h2>
      <button type="submit" onClick={addWord}>
          Add
        </button>
        <hr/>
    </div>
  );
};

export default ReversedWord;
