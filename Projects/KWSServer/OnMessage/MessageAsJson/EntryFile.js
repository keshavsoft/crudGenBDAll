import { StartFunc as StartFuncChangeName } from "./ChangeName.js";
import { StartFunc as StartFuncFromPeer } from "./FromPeer.js";

let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;
    console.log("-----------22222222 : ",LocalDataAsJson);
    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer"){
        StartFuncFromPeer({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        }
        if (LocalDataAsJson.Type === "ChangeName"){
            StartFuncChangeName({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        }
    };

};


export { StartFunc };