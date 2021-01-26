import React from "react";

const Form = ({ word, inputText }) => {
  return (
    <div>
      <h2>Enter a word:</h2>
      <input type="text" value={word} onChange={inputText} />
      <hr/>
    </div>
  );
};

export default Form;
