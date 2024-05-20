import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = () => {
  let temp = document.getElementById("templateChatBox");
  let clon = temp.content.cloneNode(true);
  let replace = document.getElementById("SectionId");
  document.getElementById("pageId").replaceChild(clon, replace);
  document.getElementById("headId").style.display = "none";
  replace.style.display = "none";
  document.getElementById("breadCrumpId").style.display = "none";

  StartFuncAddListeners();
};

export { StartFunc };
