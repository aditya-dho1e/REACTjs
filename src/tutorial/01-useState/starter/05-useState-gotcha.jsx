import { useState } from "react";

const UseStateGotcha = () => {
  let [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setValue((currValue) => {
        return currValue + 1;
      });
    }, 3000);
  };

  return (
    <div>
      <h2>useState "gotcha"</h2>
      <button onClick={handleClick}>Counter: {value}</button>
    </div>
  );
};

export default UseStateGotcha;
