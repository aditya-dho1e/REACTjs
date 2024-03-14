import { useState } from "react";
import { data } from "../../../data.js";

const UserChallenge = () => {
  const [username, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    const userUpdated = [...user, { id: user.length + 1, name: username }];
    setUser(userUpdated);
    setName("");
  };

  const removeUser = (id) => {
    const usersUpdated = user.filter((person) => person.id !== id);
    setUser(usersUpdated);
    console.log(usersUpdated);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {user.map((u, idx) => (
        <div key={idx}>
          <h4>{u.name}</h4>
          <button className="btn" onClick={() => removeUser(u.id)}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
