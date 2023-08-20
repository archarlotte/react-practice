import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>
        Counter: {counter}
      </h2>
      <button onClick={()=>increase()}>+1</button>
      <button onClick={()=>decrease()}>-1</button>
    </div>
  )
}
export default Counter;