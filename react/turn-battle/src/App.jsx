import { useEffect, useRef, useState } from "react";
import "./app.css";
// components
import TopContainer from "./components/top-container";
import EnemyContainer from "./components/enemy-container";
import PlayerContainer from "./components/player-container";
import ActionBar from "./components/actionbar";
import Restart from "./components/restart-button";
// audio
import pAudio from "/src/assets/audio/sword_slash.mp3";
import eAudio from "/src/assets/audio/player_hurt.mp3";
import dAudio from "/src/assets/audio/card_swipe.mp3";
// sprites
import playerSprite from "/src/assets/img/player_sprite.png";
import playerDownSprite from "/src/assets/img/player_down_sprite.png";
import wolfSprite from "/src/assets/img/wolf_sprite.png";
import goblinSprite from "/src/assets/img/goblin_sprite.png";
import banditSprite from "/src/assets/img/bandit_sprite.png";
import orcSprite from "/src/assets/img/orc_sprite.png";
import dragonSprite from "/src/assets/img/dragon_sprite.png";

function App() {
  const enemies = [
    {
      name: "wolf",
      hp: 99,
      maxHp: 99,
      sprite: wolfSprite,
    },
    {
      name: "goblin",
      hp: 99,
      maxHp: 99,
      sprite: goblinSprite,
    },
    {
      name: "thief",
      hp: 99,
      maxHp: 99,
      sprite: banditSprite,
    },
    {
      name: "orc",
      hp: 99,
      maxHp: 99,
      sprite: orcSprite,
    },
    {
      name: "dragon",
      hp: 100,
      maxHp: 100,
      sprite: dragonSprite,
    },
  ];
  const [currentEnemy, setCurrentEnemy] = useState(0);
  const moves = ["rock", "paper", "scissors"];
  const damage = 33;
  const [player, setPlayer] = useState({
    name: "player",
    hp: 99,
    maxHp: 99,
    sprite: playerSprite,
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
  const [totalRound, setTotalRound] = useState(1);
  const [result, setResult] = useState("result");
  const [pIcon, setPicon] = useState("dice");
  const [eIcon, setEicon] = useState("dice");
  const [pAnim, setPanim] = useState("");
  const [eAnim, setEanim] = useState("");
  const [hidden, setHidden] = useState("");
  const [show, setShow] = useState("");
  const [endText, setEndText] = useState("");
  const [hiddenDamage, setHiddenDamage] = useState("hidden-damage");

  const [enemy, setEnemy] = useState(enemies[0]);

  let lose = false;

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
      drawAudio.current.play().catch((err) => {
        console.warn("audio autoplay blocked from browser:", err);
      });
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
      if (!isGameOver) {
        setTimeout(() => {
          setIsCooldown(false);
          setEanim("");
          setPanim("");
          setHiddenDamage("hidden-damage");
        }, 1500);
      }
    }
  };

  // atualiza as barras de hp
  const uiRender = (target, res, pIcon, eIcon) => {
    if (target === "player") {
      setPlayer((prev) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage),
      }));
      setHiddenDamage("");
      setPanim("player-hit");
      enemyAudio.current.play().catch((err) => {
        console.warn("audio autoplay blocked from browser:", err);
      });
    } else if (target === "enemy") {
      setEnemy((prev) => ({
        ...prev,
        hp: Math.max(0, prev.hp - damage),
      }));
      setEanim("enemy-hit");
      playerAudio.current.play().catch((err) => {
        console.warn("audio autoplay blocked from browser:", err);
      });
    }
    setRound((prev) => prev + 1);
    setTotalRound((prev) => prev + 1);
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
    const nextEnemy = currentEnemy + 1;
    setStage((prev) => prev + 1);

    if (stage < 5) {
      setCurrentEnemy(nextEnemy);

      setEnemy({ ...enemies[nextEnemy] });

      setPlayer((prev) => ({
        ...prev,
        hp: prev.maxHp,
      }));

      setPicon("dice");
      setEicon("dice");
      setResult("Next Enemy");
      setRound(1);
    } else {
      // fim do jogo;
      setTimeout(endGame, 1500);
    }
  };

  const callGameOver = () => {
    lose = true;
    setResult("GameOver");
    setIsGameOver(true);
    setGameOver("game-over");
    setCooldown("cooldown");

    setPlayer((prev) => ({
      ...prev,
      sprite: playerDownSprite,
    }));
    setTimeout(endGame, 1000);
  };

  const endGame = () => {
    setEndText(lose ? "You Were Defeated!" : "You Won All Battles!");
    setHidden("hidden");
    setShow("show");
  };

  const handleRefresh = () => {
    // window.location.reload();
    setCurrentEnemy(0);
    setEnemy({ ...enemies[0] });
    setPlayer({
      name: "player",
      hp: 99,
      maxHp: 99,
      sprite: playerSprite,
    });

    setStage(1);
    setRound(1);
    setTotalRound(1);
    setResult("result");
    setPicon("dice");
    setEicon("dice");

    setIsCooldown(false);
    setIsGameOver(false);
    setGameOver("");
    setPanim("");
    setEanim("");
    setHidden("");
    setShow("");
    setEndText("");
    setHiddenDamage("hidden-damage");
  };

  return (
    <>
      <div className={`end-game-container ${show}`}>
        <p>{endText}</p>
        <span>total rounds:{totalRound}</span>
        <Restart refresh={handleRefresh} />
      </div>

      <div className={`battle ${hidden}`}>
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
            hiddenDamage={hiddenDamage}
          />
          <ActionBar onClick={handleMoves} coolDown={cooldown} />
        </div>
        <audio ref={playerAudio} src={pAudio}></audio>
        <audio ref={enemyAudio} src={eAudio}></audio>
        <audio ref={drawAudio} src={dAudio}></audio>
      </div>
    </>
  );
}

export default App;
