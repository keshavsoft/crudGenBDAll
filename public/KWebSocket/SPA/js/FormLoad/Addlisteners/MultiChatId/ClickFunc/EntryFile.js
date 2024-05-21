import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncBuildBSTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = () => {
  let temp = document.getElementById("templateMultiChat");
  let clon = temp.content.cloneNode(true);
  let replace = document.getElementById("SectionId");
  document.getElementById("pageId").replaceChild(clon, replace);
  document.getElementById("headId").style.display = "none";
  replace.style.display = "none";
  document.getElementById("breadCrumpId").style.display = "none";

  StartFuncBuildBSTable();
  // StartFuncAddListeners();
};

export { StartFunc };
