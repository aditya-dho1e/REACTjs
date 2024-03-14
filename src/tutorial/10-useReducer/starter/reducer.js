import { CLEAR_LIST, REMOVE_LIST, RESET_LIST } from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    const newState = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newState };
  }
};

export default reducer;
