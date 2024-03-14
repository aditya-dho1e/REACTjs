import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  return (
    <section>
      <button
        className="btn"
        onClick={() => {
          setValue(!value);
        }}
      >
        Toggle
      </button>
      {value ? <Comp></Comp> : ""}
    </section>
  );
};

const Comp = () => {
  useEffect(() => {
    const setId = setInterval(() => {
      console.log("hello from interval");
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(setId);
      console.log("cleanup");
    };
  }, []);
  return <h2>2nd Component</h2>;
};

export default CleanupFunction;
