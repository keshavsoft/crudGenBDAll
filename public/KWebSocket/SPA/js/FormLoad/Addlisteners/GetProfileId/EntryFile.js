import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
  document
    .getElementById("profileId")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };
