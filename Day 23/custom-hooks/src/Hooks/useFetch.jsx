import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);

  let fetchData = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((val) => setData(val));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data];
};

export default useFetch;
