// let CommonMessageAsJson = require("./MessageAsJson/EntryFile");
// let CommonMessageAsString = require("./MessageAsString/EntryFile");

// import { StartFunc as CommonMessageAsJson } from "./MessageAsJson/EntryFile.js";
import { StartFunc as CommonMessageAsString } from "./MessageAsString/EntryFile.js";

let StartFunc = ({ inData, inws,inClients }) => {
    let LocalData = inData;

    try {
        LocalDataAsJson = JSON.parse(LocalData);
        console.log(" Local Data: ",LocalDataAsJson);
        // CommonMessageAsJson({ inDataAsJson: LocalDataAsJson });

        return;
    } catch (error) {

    };

    CommonMessageAsString({ inDataAsString: LocalData.toString(), inws,inClients });
};

// module.exports = StartFunc;
export {StartFunc};
