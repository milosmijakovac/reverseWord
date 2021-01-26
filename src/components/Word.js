import React from 'react'

export const Word = ({addedWords}) => {
  return (
   <>
      {addedWords.map(item => (
        <li key={item.id}>{item.word}</li>
      ))}
   </>
  )
}
