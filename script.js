const memoryObj = {
  num1: "",
  num2: "",
  operator: "",
  result: 0,
  isFirstNumberInput: true,
};

function createUI(
  _container,
  clearAllHandler,
  clearCurrentHandler,
  clickHandler,
  _memoryObj
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

  clearAllBtn.addEventListener("click", () => clearAllHandler(_memoryObj));
  clearCurrentBtn.addEventListener("click", () =>
    clearCurrentHandler(_memoryObj)
  );

  _container.append(board);
}

function setObjectInitialValues(_memoryObj) {
  _memoryObj.num1 = "";
  _memoryObj.num2 = "";
  _memoryObj.operator = "";
  _memoryObj.isFirstNumberInput = true;
}

function showOnDisplay(num) {
  const display = document.getElementById("display");
  display.innerText = num;
}

function clearAll(_memoryObj) {
  setObjectInitialValues(_memoryObj);
  showOnDisplay(0);
}

function clearCurrent(_memoryObj) {
  _memoryObj.isFirstNumberInput
    ? (_memoryObj.num1 = "")
    : (_memoryObj.num2 = "");

  showOnDisplay(0);
}

function c() {
  console.log(3);
}

const container = document.querySelector("#container");

createUI(container, clearAll, clearCurrent, c, memoryObj);
