import React from "react";

const ReversedList = ({ addedWords, clearList }) => {
  return (
    <div>
      <h2>Reversed Words List:</h2>
      <ul>
        {addedWords.map(item => (
          <li key={item.id}>{item.word}</li>
        ))}
      </ul>
      <button onClick={clearList}>Clear list</button>
      <hr />
    </div>
  );
};

export default ReversedList;
