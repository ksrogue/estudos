let date = new Date().getFullYear();

const name = "David William";
const age = date - 1997;

console.log(`Meu nome é ${name} e tenho ${age} anos.`);

let actor = {
  nome: "",
  level: 1,
  job: "unployed",
  maxHp: 100,
  hp: 100,
  attack: 10,
  defense: 5,
};

let enemy = {
  nome: "wolf",
  attack: 5,
  defense: 3,
  maxHp: 50,
  hp: 50,
};

function levelUp() {
  actor.level++;
  actor.maxHp += 20;
  actor.hp = actor.maxHp;
}

function attack() {
  let damage = actor.attack - enemy.defense;
}

attack();

function ksrogue(atacando, defendendo) {
  let damage = atacando.attack - defendendo.defense;
  console.log(damage);
}

ksrogue(actor, enemy);
