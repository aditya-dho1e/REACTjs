import { Person } from "./Person";
import { people } from "../../../data";
import React from "react";

function List() {
  return people.map((person, idx) => {
    return <Person key={idx} {...person} />;
  });
}

export default List;
