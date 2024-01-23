// light dark theme
const toggleElement = document.querySelector(".themes__toggle");

const toggleDarkTheme = () => {
  toggleElement.classList.toggle("themes__toggle--isActive");
};

const toggleDarkThemeWithEnter = (event) => {
  if (event.key === "Enter") toggleDarkTheme();
};

toggleElement.addEventListener("keydown", toggleDarkThemeWithEnter);
toggleElement.addEventListener("click", toggleDarkTheme);

//logic for the calculator
let storedNumber = "";
let currentNumber = "";
let operation = "";

const resultElements = document.querySelector(".calc__result");
const keyElements = document.querySelectorAll("[data-type]");

const updateUI = (value) => {
  resultElements.innerText = !value ? "0" : value;
};

const numberButtonHandler = (value) => {
  if (value === "." && currentNumber.includes(".")) return;
  if (value === "0" && !currentNumber) return;
  currentNumber += value;

  updateUI(currentNumber);
};

const resetButtonHandler = () => {
  storedNumber = "";
  currentNumber = "";
  operation = "";
  updateUI(currentNumber);
};

const deleteButtonHandler = () => {
  if (!currentNumber || currentNumber === "0") return;
  if (currentNumber.length === 1) {
    currentNumber = "";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
  updateUI(currentNumber);
};

const executeOperation = () => {
  console.log(operation);
  console.log(currentNumber);
  console.log(storedNumber);
  if (currentNumber && storedNumber && operation) {
    switch (operation) {
      case "+":
        storedNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
        break;
      case "-":
        storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
        break;
      case "*":
        storedNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
        break;
      case "/":
        storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
        break;
    }
    currentNumber = "";
    updateUI(storedNumber);
  }
};

const opeartionButtonHandler = (operationValue) => {
  if (!storedNumber && !currentNumber) return;

  if (currentNumber && !storedNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
    operation = operationValue;
  } else if (storedNumber) {
    operation = operationValue;
    if (currentNumber) executeOperation();
  }
};

keyElementsHandler = (element) => {
  element.addEventListener("click", () => {
    const type = element.dataset.type;
    if (type === "number") {
      numberButtonHandler(element.dataset.value);
    } else if (type === "operation") {
      switch (element.dataset.value) {
        case "c":
          resetButtonHandler();
          break;
        case "Backspace":
          deleteButtonHandler();
          break;
        case "Enter":
          executeOperation();
          break;
        default:
          opeartionButtonHandler(element.dataset.value);
      }
    }
  });
};

keyElements.forEach(keyElementsHandler);

// use keyboard as input source

const availableNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
];
const availableOpeaions = ["+", "-", "*", "/"];
const availableKeys = [
  ...availableNumbers,
  ...availableOpeaions,
  "Backspace",
  "Enter",
  "c",
];

window.addEventListener("keydown", (event) => {
  // const key = event.key;
  // keyboardWithoutHover(key);
  keyboardWithHover(event.key);
});

const keyboardWithHover = (key) => {
  if (availableKeys.includes(key)) {
    const elem = document.querySelector(`[data-value="${key}"]`);
    elem.classList.add("hover");
    setTimeout(() => {
      elem.click();
    }, 300);
  }
};

// const keyboardWithoutHover = () => {
//   if (availableNumbers.includes(key)) {
//     numberButtonHandler(key);
//   } else if (availableOpeaions.includes(key )){
//     opeartionButtonHandler(key);
//   } else if (key === "Backspace"){
//     deleteButtonHandler();
//   } else if (key === "Enter"){
//     executeOperation();
//   }
// }
