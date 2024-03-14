import React from "react";
import { people } from "../../../data";
import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, nickName = "randomShit", images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{nickName}</h2>
      <img style={{ width: "50px" }} src={img} alt="" />
    </div>
  );
}
