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
    buttonElement.addEventListener("click", (e) => clickHandler(e, _memoryObj));
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

function showOnDisplay(_memoryObj) {
  const display = document.getElementById("display");
  if (_memoryObj.num1 === undefined) {
    display.innerText = "";
  } else if (_memoryObj.result) {
    display.innerText = _memoryObj.result;
  } else {
    display.innerText = `${_memoryObj.num1} ${_memoryObj.operator} ${_memoryObj.num2}`;
  }
}

function clearAll(_memoryObj) {
  setObjectInitialValues(_memoryObj);
  showOnDisplay(_memoryObj);
}

function clearCurrent(_memoryObj) {
  _memoryObj.isFirstNumberInput
    ? (_memoryObj.num1 = "")
    : (_memoryObj.num2 = "");

  showOnDisplay(_memoryObj);
}

function setOperator(operator, _memoryObj) {
  _memoryObj.operator = operator;
  _memoryObj.isFirstNumberInput = false;
}

function setNumber(number, _memoryObj) {
  _memoryObj.isFirstNumberInput
    ? (_memoryObj.num1 += number)
    : (_memoryObj.num2 += number);
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

function getResult(_memoryObj) {
  const result = calculate(
    _memoryObj.num1,
    _memoryObj.num2,
    _memoryObj.operator
  );
  clearAll(_memoryObj);
  _memoryObj.num1 = result;
}

function mainButtonClick(e, _memoryObj) {
  const value = e.target.innerText;
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(value)) {
    setOperator(value, _memoryObj);
  } else if (value === "=") {
    getResult(_memoryObj);
  } else {
    setNumber(value, _memoryObj);
  }

  showOnDisplay(_memoryObj);
}

const container = document.querySelector("#container");

createUI(container, clearAll, clearCurrent, mainButtonClick, memoryObj);
