import { StartFunc as StartFuncAddReceivedMsg } from "./addReceivedMsg/EntryFile.js";

let StartFunc = ({inData, profileId}) => {
    StartFuncAddReceivedMsg(inData, profileId);
};

export {StartFunc};