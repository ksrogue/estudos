import { useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";

function App() {
  return (
    <div className="battle">
      <TopContainer stage="1" round="1" />
      <div className="battleground">
        <EnemyContainer name="wolf" />
        <PlayerContainer name="ksrogue" />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;


// TODO
// enemies = wolf, goblin, bandit, orc, dragon;
// heal after combat;
// skills interaction;

