import { useState } from "react";
import "../calorieTracker.css";

const CalorieTracker = ({ push }) => {
  const [itemName, setItemName] = useState("");
  const [count, setCount] = useState("");

  //   const handleName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const handleCount = (e) => {
  //     setCount(e.target.value);
  //   };

  const handleItem = (event) => {
    event.preventDefault();
    let data = {
      itemName: itemName,
      count: count,
    };
    console.log(data);
    push(data);
  };

  return (
    <div>
      <form className="formData">
        <div className="container">
          <input
            className="item_name"
            value={itemName}
            name="name"
            type="text"
            placeholder="Item Name"
            onChange={(e) => setItemName(e.target.value)}
          ></input>
          <input
            className="item_calorie"
            value={count}
            type="number"
            name="count"
            placeholder="Calorie Count"
            onChange={(e) => setCount(e.target.value)}
          ></input>
        </div>
        <button
          className="add_item"
          type="submit"
          onClick={(e) => handleItem(e)}
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default CalorieTracker;
