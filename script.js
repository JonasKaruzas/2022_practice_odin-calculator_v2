const num1 = "";
const num2 = "";
const operator = "";
const result = 0;
const isFirstNumberInput = true;

function createUI(
  _container,
  clearAllHandler,
  clearCurrentHandler,
  clickHandler
) {
  const buttonValues = [
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "=",
    "+",
  ];

  const board = document.createElement("div");
  const display = document.createElement("div");
  board.append(display);

  const clearAllBtn = document.createElement("button");
  board.append(clearAllBtn);

  const clearCurrentBtn = document.createElement("button");
  board.append(clearCurrentBtn);

  buttonValues.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = button;
    buttonElement.addEventListener("click", clickHandler);
    board.append(buttonElement);
  });

  board.id = "board";
  display.id = "display";
  clearAllBtn.id = "clearAllBtn";
  clearCurrentBtn.id = "clearCurrentBtn";

  clearAllBtn.innerText = "Clear All";
  clearCurrentBtn.innerText = "Clear Current";

  clearAllBtn.addEventListener("click", clearAllHandler);
  clearCurrentBtn.addEventListener("click", clearCurrentHandler);

  _container.append(board);
}

const container = document.querySelector("#container");

function a() {
  console.log(1);
}
function b() {
  console.log(2);
}
function c() {
  console.log(3);
}

createUI(container, a, b, c);
