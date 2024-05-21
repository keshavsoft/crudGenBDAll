import { StartFunc as StartFuncGetOnlineUsers } from "./GetOnlineUsers/EntryFile.js";
import { StartFunc as StartFuncGetProfileId } from "./GetProfileId/EntryFile.js";
import { StartFunc as StartFuncChangeNameId } from "./ChangeName/EntryFile.js";
import { StartFunc as StartFuncChatId } from "./ChatId/EntryFile.js";
import { StartFunc as StartFuncMultiChatId } from "./MultiChatId/EntryFile.js";
import { StartFunc as StartFuncCommonListeners } from "./commonListeners/EntryFile.js";

const StartFunc = () => {
  StartFuncCommonListeners();
  StartFuncGetOnlineUsers();
  StartFuncGetProfileId();
  StartFuncChangeNameId();
  StartFuncChatId();
  StartFuncMultiChatId();
};

export { StartFunc };
