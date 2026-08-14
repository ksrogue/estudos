import { useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";

function App() {
  const [player, setPlayer] = useState({
    name: "ksrogue",
    sprite: "",
    deadSprite: "",
    currentHp: 100,
    maxHp: 100,
  });

  // enemies = [
  //   { name: "wolf", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  //   { name: "goblin", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  //   { name: "bandit", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  //   { name: "orc", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  //   { name: "dragon", sprite: "", deadSprite: "", currentHp: 100, maxHp: 100 },
  // ];
  const [enemy, setEnemy] = useState({
    name: "wolf",
    sprite: "",
    deadSprite: "",
    currentHp: 100,
    maxHp: 100,
  });
  const [stage, setStage] = useState(1);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [pAnim, setPAnim] = useState("");
  const [eAnim, setEAnim] = useState("");

  const moves = ["rock", "paper", "scissors"];

  const damage = 33;

  const handleOnClick = (clicked) => {
    if (isGameOver || isCooldown) return;
    if (clicked === "dice") {
      // random play;
      battle(randomMove(), randomMove());
    } else {
      battle(clicked, randomMove());
    }

    setIsCooldown(true);
    // retorna as animações pro estado padrão;
    if (!isGameOver) {
      setTimeout(() => {
        defaultAnimation();
        setIsCooldown(false);
      }, 1000);
    }
  };

  const battle = (pMove, eMove) => {
    const playerWin =
      (pMove === "rock" && eMove === "scissors") ||
      (pMove === "scissors" && eMove === "paper") ||
      (pMove === "paper" && eMove === "rock");

    if (pMove === eMove) {
      //  draw;
      setRound((prev) => prev + 1);
      console.log("draw");
    } else if (playerWin) {
      // player wins;
      const newHp = Math.max(0, enemy.currentHp - damage);
      setEnemy((prev) => ({
        ...prev,
        currentHp: newHp,
      }));
      setEAnim("enemy-hit");
      setRound((prev) => prev + 1);

      if (newHp <= 0) {
        console.log("inimigo perdeu");
      }
      console.log("player win");
    } else {
      const newHp = Math.max(0, player.currentHp - damage);
      // enemy win;
      setPlayer((prev) => ({
        ...prev,
        currentHp: newHp,
      }));
      setPAnim("player-hit");
      setRound((prev) => prev + 1);

      if(newHp <= 0) {
        console.log("jogador perdeu")
        // gameover;
      }
      console.log("enemy win");
    }
  };

  const randomMove = () => {
    return moves[Math.floor(Math.random() * moves.length)];
  };

  const defaultAnimation = () => {
    setEAnim("");
    setPAnim("");
  };
  return (
    <div className="battle">
      <TopContainer stage={stage} round={round} />
      <div className="battleground">
        <EnemyContainer
          name={enemy.name}
          eHp={enemy.currentHp}
          eMhp={enemy.maxHp}
          anim={eAnim}
        />
        <PlayerContainer
          name={player.name}
          pHp={player.currentHp}
          pMhp={player.maxHp}
          anim={pAnim}
        />
        <ActionBar
          onClick={handleOnClick}
          coolDown={isCooldown ? "cooldown" : ""}
        />
      </div>
    </div>
  );
}

export default App;

// TODO
// heal after combat;
// skills interaction;
