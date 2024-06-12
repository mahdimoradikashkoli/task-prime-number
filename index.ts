import {
  generatRandomNumberButton,
  generatFirstNumberButton,
  clearButton,
} from "./src/getElement.js";
import {
  generatRandomeNumber,
  generateFirstPrimeNumber,
  clearInput,
} from "./src/event.js";
generatRandomNumberButton?.addEventListener("click", generatRandomeNumber);
clearButton?.addEventListener("click", clearInput);
generatFirstNumberButton?.addEventListener("click",generateFirstPrimeNumber)