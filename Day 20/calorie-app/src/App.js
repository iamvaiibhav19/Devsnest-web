import React, { useState } from "react";
import Food from "./components/foods.jsx";
import "./App.css";

// const CalorieCount = [
//   { id: 0, title: "Pizza", calorie: 100 },
//   { id: 1, title: "Pasta", calorie: 180 },
//   { id: 2, title: "Lassania", calorie: 70 },
//   { id: 3, title: "Brownie", calorie: 220 },
//   { id: 4, title: "Panipuri", calorie: 100 },
//   { id: 5, title: "Coke", calorie: 150 },
//   { id: 6, title: "Peanut Butter", calorie: 180 },
//   { id: 7, title: "Cake", calorie: 300 },
//   { id: 8, title: "Vada Rassa", calorie: 200 },
// ];

function App() {
  const [calorie, setCalorie] = useState([
    { id: 0, title: "Pizza", calorie: 100 },
    { id: 1, title: "Pasta", calorie: 180 },
    { id: 2, title: "Lassania", calorie: 70 },
    { id: 3, title: "Brownie", calorie: 220 },
    { id: 4, title: "Panipuri", calorie: 100 },
    { id: 5, title: "Coke", calorie: 150 },
    { id: 6, title: "Peanut Butter", calorie: 180 },
    { id: 7, title: "Cake", calorie: 300 },
    { id: 8, title: "Vada Rassa", calorie: 200 },
  ]);
  const deleteCalorie = (id) => {
    setCalorie(
      calorie.filter((it) => {
        return it.id !== id;
      })
    );
  };
  return (
    <div className="container">
      <h1>Calorie Reader Only</h1>
      {calorie.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h4
            style={{ paddingTop: "30px", fontWeight: "700", fontSize: "22px" }}
          >
            No Entry found
          </h4>
        </div>
      ) : (
        <div className="box">
          {calorie.map((key, index) => (
            <Food
              key={index}
              deleteCalorie={deleteCalorie}
              uniqueId={key.id}
              title={key.title}
              calories={key.calorie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
