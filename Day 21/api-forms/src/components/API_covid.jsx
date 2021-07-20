import { useEffect, useState } from "react";
import "../App.css";

const ApiCovid = () => {
  const [po, setPo] = useState(null);

  useEffect(() => {
    const fetch_api = async () => {
      const response = await fetch(
        "https://covid2019-api.herokuapp.com/v2/country/india"
      );
      const posts = await response.json(); // const posts_text = response.text();
      setPo(posts);
    };
    //fetch api
    fetch_api();
  }, []);

  return (
    <h1 className="Data">
      Location:
      {po && <div>{po.data.location}</div>}
      Confimed:
      {po && <div>{po.data.confirmed}</div>}
      Deaths:
      {po && <div>{po.data.deaths}</div>}
      Recovered:
      {po && <div>{po.data.recovered}</div>}
      Active:
      {po && <div>{po.data.active}</div>}
    </h1>
  );
};

export default ApiCovid;
