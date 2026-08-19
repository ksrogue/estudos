import { useEffect, useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";

function App() {
  const moves = ["rock", "paper", "scissors"];
  const damage = 33;
  const [player, setPlayer] = useState({
    name: "player",
    hp: 100,
    maxHp: 100,
  });
  const [enemy, setEnemy] = useState({
    name: "wolf",
    hp: 100,
    maxHp: 100,
  });

  // estados
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldown, setCooldown] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [stage, setStage] = useState(1);
  const [round, setRound] = useState(1);
  const [result, setResult] = useState("result");
  const [pIcon, setPicon] = useState("dice");
  const [eIcon, setEicon] = useState("dice");
  const [pAnim, setPanim] = useState("");
  const [eAnim, setEanim] = useState("");

  const randomMove = () => {
    return moves[Math.floor(Math.random() * moves.length)];
  };
  const handleMoves = (pMove) => {
    if (!isCooldown && !isGameOver) {
      const enemyMove = randomMove();
      const playerMove = pMove === "dice" ? randomMove() : pMove;
      const playerWin =
        (playerMove === "rock" && enemyMove === "scissors") ||
        (playerMove === "scissors" && enemyMove === "paper") ||
        (playerMove === "paper" && enemyMove === "rock");

      if (playerMove === enemyMove) {
        // empate;
        uiRender("", "DRAW!", playerMove, enemyMove);
      } else if (playerWin) {
        // jogador vence;
        uiRender("enemy", "WIN!", playerMove, enemyMove);
      } else {
        // inimigo vence;
        uiRender("player", "LOSE!", playerMove, enemyMove);
      }
      setIsCooldown(true);
    }
    if (!isGameOver) {
      setTimeout(() => {
        setIsCooldown(false);
        setEanim("");
        setPanim("");
      }, 1500);
    }
  };

  // atualiza as barras de hp
  const uiRender = (target, res, pIcon, eIcon) => {
    if (target === "player") {
      setPlayer((prev) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage),
      }));
      setPanim("player-hit");
    } else if (target === "enemy") {
      setEnemy((prev) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage),
      }));
      setEanim("enemy-hit");
    }
    setRound((prev) => prev + 1);
    setResult(res);
    setPicon(pIcon);
    setEicon(eIcon);
  };

  useEffect(() => {
    if (player.hp <= 0) {
      // gameover;
      setResult("GameOver");
      setIsGameOver(true);
      setCooldown("cooldown");
    } else if (enemy.hp <= 0) {
      // proximo inimigo;
      setStage(stage + 1);
    }
  }, [player.hp, enemy.hp]);

  useEffect(() => {
    setCooldown(isCooldown ? "cooldown" : "");
    if (isGameOver) {
      setCooldown("cooldown");
    }
  }, [isCooldown]);

  return (
    <div className="battle">
      <TopContainer
        stage={stage}
        round={round}
        result={result}
        pIcon={pIcon}
        eIcon={eIcon}
      />
      <div className="battleground">
        <EnemyContainer
          name={enemy.name}
          eHp={enemy.hp}
          eMhp={enemy.maxHp}
          anim={eAnim}
        />
        <PlayerContainer
          name={player.name}
          pHp={player.hp}
          pMhp={player.maxHp}
          anim={pAnim}
        />
        <ActionBar onClick={handleMoves} coolDown={cooldown} />
      </div>
    </div>
  );
}

export default App;
