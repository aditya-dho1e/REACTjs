import { useEffect } from "react";
import { useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url);
      setUsers(await result.json());
      // console.log(await result.json());
    };
    getData();
  }, []);

  return (
    <section>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user, index) => {
          return (
            <li key={index}>
              <img src={user.avatar_url} alt="" />
              <div>
                <h5>{user.login}</h5>
                <a href={user.html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
