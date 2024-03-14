import React, { useReducer } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from "./actions";
import reducer from "./reducer";
const defaultState = { people: data, isLoading: false };

const ReducerBasics = () => {
  // const [people, setPeople] = React.useState(data);

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_LIST, payload: { id } });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length >= 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
