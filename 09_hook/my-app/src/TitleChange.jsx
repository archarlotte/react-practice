import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function TitleChange() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    document.title = counter;
  }, [counter])
  
  return (
    <div><div>TitleChange</div>
    <h2>{counter}</h2>
    <button onClick={()=>increase()}>+1</button>
      <button onClick={()=>decrease()}>-1</button>
    </div>
  )
}
