import { useState } from "react";
import "./App.css";

import CalorieTracker from "./components/CalorieTracker";
import Card from "./components/Card";

function App() {
  const [item, setItem] = useState([]);

  const push = (data) => {
    setItem([...item, data]);
  };

  const pop = (inx) => {
    setItem(
      item.filter((it, ind) => {
        return ind !== inx;
      })
    );
    //console.log(item);
  };
  return (
    <div>
      <CalorieTracker push={push} />
      {item.map((it, ind) => {
        return (
          <Card
            key={ind}
            pop={pop}
            uniqueID={ind}
            title={it.itemName}
            calories={it.count}
          />
        );
      })}
    </div>
  );
}

export default App;
