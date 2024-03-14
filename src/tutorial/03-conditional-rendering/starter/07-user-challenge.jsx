import { useState } from "react";

const UserChallenge = () => {
  const login = () => {
    setUser({ name: "Roronoa Zoro" });
  };

  const logout = () => {
    setUser(null);
  };
  const [user, setUser] = useState(null);
  return (
    <section>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </section>
  );
};

export default UserChallenge;
