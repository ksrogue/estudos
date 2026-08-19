import { useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";

function App() {
  const moves = ["rock", "paper", "scissors"];

  const handlePlayerAction = () => {
    
  }
  
  return (
    <div className="battle">
      <TopContainer />
      <div className="battleground">
        <EnemyContainer />
        <PlayerContainer />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;
