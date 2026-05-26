const canva = document.querySelector(".canva-container");
const colorPicker = document.querySelector(".canva-color");
const gridSize = 256;
const historico = [];

//  adiciona os quadros ao canva:
for (let i = 0; i < gridSize; i++) {
  const newPixel = document.createElement("div");
  newPixel.classList.add("canva-pixel");
  canva.appendChild(newPixel);
}
// muda a cor do quadro selecionado:
canva.addEventListener("click", (e) => {
  if (e.target.classList.contains("canva-pixel")) {
    const pixel = e.target;

    const lastColor = pixel.style.backgroundColor || "rgb(255, 255, 255)";

    historico.push({
      e: pixel,
      previousColor: lastColor,
    });

    pixel.style.backgroundColor = colorPicker.value;
  }
});
// apaga todas as cores:
function clearColor() {
  const colorToClear = document.querySelectorAll(".canva-pixel");
  colorToClear.forEach((e) => {
    e.style.backgroundColor = "white";
  });
}
// desfaz a ultima cor pintada:
function undo() {
  const lastAction = historico.pop();

  if (lastAction) {
    lastAction.e.style.backgroundColor = lastAction.previousColor;
  }
}
// desfaz apertando ctrl z:
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
    e.preventDefault();
    undo();
  }
});
// salva o canva em uma imagem.png:
function saveToPng() {
  const image = document.createElement("canvas");
  const ctx = image.getContext("2d");

  image.width = 256;
  image.height = 256;

  const allPixels = document.querySelectorAll(".canva-pixel");

  allPixels.forEach((pixel, i) => {
    const col = i % 16;
    const row = Math.floor(i / 16);

    const computedStyle = window.getComputedStyle(pixel);
    const color = computedStyle.backgroundColor || "rgb(255, 255, 255)";

    ctx.fillStyle = color;
    ctx.fillRect(col * 16, row * 16, 16, 16);
  });

  const link = document.createElement("a");

  link.download = "pixel-art.png";
  link.href = image.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
