import React, { useState } from "react";

export default function Button2() {
  let [value, setValue] = useState(0);

  let handleCount = () => {
    setValue((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <button className="button1" onClick={handleCount}>
      {value}
    </button>
  );
}
