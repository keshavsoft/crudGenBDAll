// import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = () => {
  webSocket.send("returnOnlineClientsWOMe");

  // StartFuncAddListeners();
};

export { StartFunc };
