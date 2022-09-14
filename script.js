const state = {
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

function setStateInitialValues() {
  state.num1 = "";
  state.num2 = "";
  state.operator = "";
  state.isFirstNumberInput = true;
}

function showOnDisplay() {
  const display = document.getElementById("display");
  if (state.num1 === undefined) {
    display.innerText = "";
  } else if (state.result) {
    display.innerText = state.result;
  } else {
    display.innerText = `${state.num1} ${state.operator} ${state.num2}`;
  }
}

function clearAll() {
  setStateInitialValues();
  showOnDisplay();
}

function clearCurrent() {
  if (state.isFirstNumberInput) {
    state.num1 = "";
  } else {
    state.num2 = "";
  }

  showOnDisplay();
}

function setOperator(operator) {
  state.operator = operator;
  state.isFirstNumberInput = false;
}

function setNumber(number) {
  if (state.isFirstNumberInput) {
    state.num1 += number;
  } else {
    state.num2 += number;
  }
}

function calculate(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;

    default:
      break;
  }
  return result;
}

function getResult() {
  const result = calculate(state.num1, state.num2, state.operator);
  clearAll();
  state.num1 = result;
}

function numberAndOperatorClick(e) {
  const value = e.target.innerText;
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(value)) {
    setOperator(value);
  } else if (value === "=") {
    getResult();
  } else {
    setNumber(value);
  }

  showOnDisplay();
}

const container = document.querySelector("#container");

createUI(container, clearAll, clearCurrent, numberAndOperatorClick);
