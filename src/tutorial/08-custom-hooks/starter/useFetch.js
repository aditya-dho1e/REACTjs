import { useEffect } from "react";

// const [isLoading, setIsLoading] = useState(true);
// const [isError, setIsError] = useState(false);
// const [user, setUser] = useState(null);

var isLoading = true;
var isError = false;
var setUser = null;

export const useFetch = async (url) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      isLoading = false;
      isError = true;
      return { isLoading, isError, setUser };
    }
    setUser = await resp.json();
  } catch (error) {
    isError = true;
  }
  return { isLoading, isError, setUser };
};
