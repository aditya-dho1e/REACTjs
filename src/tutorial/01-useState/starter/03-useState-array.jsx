import { useState } from "react";
import { data } from "../../../data.js";
// console.log(data);

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section>
      <h2>useState array example</h2>
      <div>
        {people.map(({ id, name }) => {
          return (
            <div key={id}>
              <h4>{name}</h4>
              <button
                onClick={() => {
                  removePerson(id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setPeople([]);
        }}
        className="btn"
      >
        Clear All
      </button>
    </section>
  );
};

export default UseStateArray;
