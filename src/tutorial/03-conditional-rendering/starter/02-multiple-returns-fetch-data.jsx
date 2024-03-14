import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an Error...</h2>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "75px" }}
        src={avatar_url}
        alt={name}
      />
      <p>{name}</p>
      <p>works at {company}</p>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
