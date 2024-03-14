import React, { useContext } from "react";
import { NavbarContext } from "./Narbar";
const UserContainer = () => {
  const { user, logout } = useContext(NavbarContext);
  console.log(user);
  return <></>;
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hi there, {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Login</p>
      )}
    </div>
  );
};

export default UserContainer;
