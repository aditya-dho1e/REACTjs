import { useState } from "react";

const ToggleChallenge = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          isTrue ? setIsTrue(false) : setIsTrue(true);
        }}
      >
        Toggle
      </button>
      {isTrue && <Comp></Comp>}
    </div>
  );
};

const Comp = () => {
  return (
    <div>
      <h2>A Component</h2>
    </div>
  );
};

export default ToggleChallenge;
