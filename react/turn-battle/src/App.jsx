import { useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";

function App() {
  const player = {
    name: "ksrogue",
    sprite: "",
    deadSprite: "",
    currentHp: 100,
    maxHp: 100,
  };
  const enemies = [
    { name: "wolf", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
    { name: "goblin", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
    { name: "bandit", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
    { name: "orc", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
    { name: "dragon", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  ];
  const [stage, setStage] = useState(1);
  const [round, setRound] = useState(1);

  const moves = ["rock", "paper", "scissors"];
  let pMove;
  let eMove;

  function randomMove() {
    pMove = moves[Math.floor(Math.random() * moves.length)];
    eMove = moves[Math.floor(Math.random() * moves.length)];
  }

  return (
    <div className="battle">
      <TopContainer stage={stage} round={round} />
      <div className="battleground">
        <EnemyContainer name="wolf" />
        <PlayerContainer name={player.name} />
        <ActionBar />
      </div>
    </div>
  );
}

export default App;

// TODO
// heal after combat;
// skills interaction;
