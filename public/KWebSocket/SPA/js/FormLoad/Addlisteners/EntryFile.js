import { StartFunc as StartFuncGetOnlineUsers } from "./GetOnlineUsers/EntryFile.js";
import { StartFunc as StartFuncGetProfileId } from "./GetProfileId/EntryFile.js";
import { StartFunc as StartFuncChangeNameId } from "./ChangeName/EntryFile.js";

const StartFunc = () => {
  StartFuncGetOnlineUsers();
  StartFuncGetProfileId();
  StartFuncChangeNameId();
};

export { StartFunc };
