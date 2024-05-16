import { StartFunc as StartFuncChangeName } from "./ChangeName.js";
import { StartFunc as StartFuncFromPeer } from "./FromPeer.js";
import { StartFunc as StartFuncSendMessage } from "./SendMessage.js";

let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer") {
            StartFuncFromPeer({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };

        if (LocalDataAsJson.Type === "ChangeName") {
            StartFuncChangeName({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };

        if (LocalDataAsJson.Type === "sendMessage") {
            StartFuncSendMessage({ inDataToClientAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };
    };
};

export { StartFunc };