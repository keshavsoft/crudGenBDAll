import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";


let StartFunc = () => {
  document
    .getElementById("changeUserName")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };
