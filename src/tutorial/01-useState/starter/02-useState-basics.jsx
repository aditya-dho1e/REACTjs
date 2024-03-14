import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  return (
    <section>
      <h2>You Clicked {count} many times</h2>
      <button type="button" className="btn" onClick={inc}>
        Increment Count
      </button>
    </section>
  );
};

export default UseStateBasics;
