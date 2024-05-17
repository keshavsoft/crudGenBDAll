import { StartFunc as StartFuncSendButtonId } from "./SendButtonId/EntryFile.js";
import { StartFunc as StartFuncSendMessageInputId } from "./SendMessageInputId/EntryFile.js";

let StartFunc = (inEvent) => {
    StartFuncSendButtonId();
    StartFuncSendMessageInputId();
};

export { StartFunc };