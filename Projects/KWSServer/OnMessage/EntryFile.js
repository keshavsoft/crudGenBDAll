import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";

let StartFunc = ({ inData, inws, inClients, inWss }) => {
    let LocalData = inData;
    // console.log("LocalData : ", LocalData);
    try {
        let LocalDataAsJson = JSON.parse(LocalData);
     
        CommonMessageAsJson({ inDataAsJson: LocalDataAsJson, inws, inClients, inWss });

        return;
    } catch (error) {
        //        console.log("aeeeeeeeeeeeee : ",error);
    };

    CommonMessageAsString({ inDataAsString: LocalData.toString(), inws, inClients });
};

// module.exports = StartFunc;
export { StartFunc };