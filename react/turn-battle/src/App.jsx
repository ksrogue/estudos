import { useEffect, useRef, useState } from "react";
import "./app.css";
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";
import pAudio from "/src/assets/audio/sword_slash.mp3";
import eAudio from "/src/assets/audio/player_hurt.mp3";
import dAudio from "/src/assets/audio/card_swipe.mp3";
// sprites
import playerSprite from "/src/assets/img/player_sprite.png";
import playerDownSprite from "/src/assets/img/player_down_sprite.png";
import wolfSprite from "/src/assets/img/wolf_sprite.png";
import goblinSprite from "/src/assets/img/goblin_sprite.png";

function App() {
  const moves = ["rock", "paper", "scissors"];
  const damage = 33;
  const [player, setPlayer] = useState({
    name: "player",
    hp: 100,
    maxHp: 100,
    sprite: playerSprite,
  });
  const [enemy, setEnemy] = useState({
    name: "wolf",
    hp: 100,
    maxHp: 100,
    sprite: wolfSprite,
  });

  // audio
  const playerAudio = useRef(null);
  const enemyAudio = useRef(null);
  const drawAudio = useRef(null);

  // estados
  const [isCooldown, setIsCooldown] = useState(false);
  const [cooldown, setCooldown] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOver, setGameOver] = useState("");
  const [stage, setStage] = useState(1);
  const [round, setRound] = useState(1);
  const [result, setResult] = useState("result");
  const [pIcon, setPicon] = useState("dice");
  const [eIcon, setEicon] = useState("dice");
  const [pAnim, setPanim] = useState("");
  const [eAnim, setEanim] = useState("");

  useEffect(() => {
    if (enemyAudio.current) {
      enemyAudio.current.volume = 0.3;
    }
  }, []);

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
      drawAudio.current.play();
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
      enemyAudio.current.play();
    } else if (target === "enemy") {
      setEnemy((prev) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage),
      }));
      setEanim("enemy-hit");
      playerAudio.current.play();
    }
    setRound((prev) => prev + 1);
    setResult(res);
    setPicon(pIcon);
    setEicon(eIcon);
  };

  useEffect(() => {
    if (isGameOver) return;
    if (player.hp <= 0) {
      // gameover;
      setTimeout(callGameOver, 200);
    } else if (enemy.hp <= 0) {
      // proximo inimigo;
      setTimeout(nextRound, 500);
    }
  }, [player.hp, enemy.hp]);

  useEffect(() => {
    setCooldown(isCooldown || isGameOver ? "cooldown" : "");
  }, [isCooldown, isGameOver]);

  const nextRound = () => {
    setStage((prev) => prev + 1);

    setEnemy({
      name: "Goblin",
      hp: 100,
      maxHp: 100,
      sprite: goblinSprite,
    });
    setPlayer((prev) => ({
      ...prev,
      hp: 100,
    }));

    setPicon("dice");
    setEicon("dice");
    setResult("Next Enemy");
    setRound(1);
  };
  const callGameOver = () => {
    setResult("GameOver");
    setIsGameOver(true);
    setGameOver("game-over");
    setCooldown("cooldown");
    setPlayer((prev) => ({
      ...prev,
      sprite: playerDownSprite,
    }));
  };
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
          sprite={enemy.sprite}
        />
        <PlayerContainer
          name={player.name}
          pHp={player.hp}
          pMhp={player.maxHp}
          anim={pAnim}
          sprite={player.sprite}
          className={gameOver}
        />
        <ActionBar onClick={handleMoves} coolDown={cooldown} />
      </div>
      <audio ref={playerAudio} src={pAudio}></audio>
      <audio ref={enemyAudio} src={eAudio}></audio>
      <audio ref={drawAudio} src={dAudio}></audio>
    </div>
  );
}

export default App;
