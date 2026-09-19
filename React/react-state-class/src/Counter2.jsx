//Callback in set state function

import { useState } from "react";

export default function Counter2() {
  let [count, setCount] = useState(0);

  let incCount = () => {
    //count will increase by 2
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });

    //setCount(29);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count 2</button>
    </div>
  );
}
