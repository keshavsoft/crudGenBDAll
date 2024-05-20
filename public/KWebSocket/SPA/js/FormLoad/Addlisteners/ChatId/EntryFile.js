import { StartFunc as StartFuncClickFunc } from "./ClickFunc/EntryFile.js";

let StartFunc = () => {
  document
    .getElementById("chatId")
    .addEventListener("click", StartFuncClickFunc);

};

export { StartFunc };
