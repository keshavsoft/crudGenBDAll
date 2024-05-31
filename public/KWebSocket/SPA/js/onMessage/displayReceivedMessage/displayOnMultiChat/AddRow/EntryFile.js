import { StartFunc as StartFuncBuildMsgContainer } from "./BuildMsgContainer.js";
import { StartFunc as StartFuncNewMsg } from "./NewMsg.js";
let existinguser =[];
let StartFunc = (inData) => {
    console.log(existinguser,inData.fromId);
    if(existinguser.includes(inData.fromId)===false){
        StartFuncBuildMsgContainer(inData);
        existinguser.push(inData.fromId);
    }

    
    console.log(existinguser,"after keeping");
    StartFuncNewMsg(inData);

};

export { StartFunc };
