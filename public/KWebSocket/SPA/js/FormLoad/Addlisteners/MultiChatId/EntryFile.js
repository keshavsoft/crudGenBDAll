import { StartFunc as StartFuncClickFunc } from "./ClickFunc/EntryFile.js";

let StartFunc = () => {
  document
    .getElementById("MultiChatId")
    .addEventListener("click", StartFuncClickFunc);
};

export { StartFunc };
