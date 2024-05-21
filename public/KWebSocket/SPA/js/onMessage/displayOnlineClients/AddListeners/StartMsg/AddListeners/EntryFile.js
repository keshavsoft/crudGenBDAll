import { StartFunc as StartFuncSendBtn } from "./sendBtn/EntryFile.js";
import {StartFunc as StartFuncInputMessage} from "./InputMessageSend/EntryFile.js";

const StartFunc = () => {

    StartFuncSendBtn();
    StartFuncInputMessage();
  
};

export { StartFunc };
