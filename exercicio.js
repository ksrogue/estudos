// const media = -3;

// if (media >= 0 && media < 5) {
//   console.log("Reprovado!");
// } else if (media > 5 && media <= 7) {
//   console.log("Recuperação!");
// } else if (media > 7) {
//   console.log("Aprovado!");
// } else {
//   console.log("Dado Inválido...");
// }
// const n = [0, 1, 2, 3, 4];
// const par = [];
// const impar = [];

// for (i = 0; i < n.length; i++) {
//   if (i % 2 == 0) {
//     par.push(i);
//   } else {
//     impar.push(i);
//   }
// }

const salBruto = 2300;
const beneficio = 250;
var newSal;

if (salBruto > 0 && salBruto <= 1100.0) {
  newSal = salBruto * 0.95 + beneficio;
} else if (salBruto > 1100.0 && salBruto <= 2500.0) {
  newSal = salBruto * 0.9 + beneficio;
} else if (salBruto > 2500.0) {
  newSal = salBruto * 0.85 + beneficio;
} else {
  newSal = "Valor Inválido!";
}

console.log(newSal);
