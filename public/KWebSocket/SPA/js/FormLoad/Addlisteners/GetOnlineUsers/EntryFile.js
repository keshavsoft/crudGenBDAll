import { StartFunc as StartFuncClickFunc } from "./ClickFunc/EntryFile.js";

let StartFunc = () => {
  document
    .getElementById("getOnlineUsers")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };
