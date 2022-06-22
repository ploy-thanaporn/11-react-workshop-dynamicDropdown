import { useState } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Food from "./components/Food";
import MenuData from "./MenuData";

function App() {
  const [foods, setFoods] = useState(MenuData);

  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === "เมนูทั้งหมด") {
      setFoods(MenuData);
    } else {
      const result = MenuData.filter((element) => {
        return element.menu === category;
      });
      setFoods(result);
    }
  };

  return (
    <div className="container">
      <Dropdown changeFoodData={changeFoodData} />
      <div className="content">
        {foods.map((item, index) => {
          return <Food key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
