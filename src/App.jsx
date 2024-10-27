import "./App.css";
import Card from "./components/Card/Card";
import Owner from "./components/Owner/Owner";
import data from "../data.json";
import { useState } from "react";

function App() {
  const [timeframe, setTimeframeState] = useState("Weekly");

  function setTimeframe(data) {
    setTimeframeState(data);
  }

  return (
    <main>
      <Owner timeframe={timeframe} setTimeframe={setTimeframe}></Owner>
      {data.map((item) => (
        <Card key={item.id} data={item} timeframe={timeframe}/>
      ))}
    </main>
  );
}

export default App;
