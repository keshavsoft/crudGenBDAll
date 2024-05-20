import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
  document
    .getElementById("getOnlineUsers")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };
