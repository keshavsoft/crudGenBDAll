import { StartFunc as StartFuncjFLocalToInputUserNameId } from "./jFLocalToInputUserNameId.js";

let StartFunc = (inJsonData) => {
    let jVarLocalData = inJsonData;
    // console.log("jVarLocalData : ", jVarLocalData);
    StartFuncjFLocalToInputUserNameId(jVarLocalData.Name);
};

export { StartFunc };