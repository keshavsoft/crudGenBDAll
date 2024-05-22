import { StartFunc as StartFuncDisplayOnChatBox } from "./displayOnChatBox/EntryFile.js";
import { StartFunc as StartFuncDisplayOnMultiChat } from "./displayOnMultiChat/EntryFile.js";

let StartFunc = (data) => {
  try {
    const profileId = document.getElementById("receiverId").innerText;

    StartFuncDisplayOnChatBox({inData: data, profileId});

    return;
  } catch (error) { }

  
  
  StartFuncDisplayOnMultiChat({inData: data});
};


export { StartFunc };
