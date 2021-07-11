import Food from "./components/foods";
import "./App.css";

const CalorieCount = [
  { title: "Pizza", calorie: 100 },
  { title: "Pasta", calorie: 180 },
  { title: "Lassania", calorie: 70 },
  { title: "Brownie", calorie: 220 },
  { title: "Panipuri", calorie: 100 },
  { title: "Coke", calorie: 150 },
  { title: "Peanut Butter", calorie: 180 },
  { title: "Cake", calorie: 300 },
  { title: "Vada Rassa", calorie: 200 },
];
function App() {
  return (
    <div className="container">
      <h1>Calorie Reader Only</h1>
      <div className="box">
        {CalorieCount.map((key, index) => (
          <Food key={index} title={key.title} calories={key.calorie} />
        ))}
      </div>
    </div>
  );
}

export default App;
