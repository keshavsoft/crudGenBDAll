import { StartFunc as StartFuncChangeName } from "./ChangeName.js";
import { StartFunc as StartFuncFromPeer } from "./FromPeer.js";
import { StartFunc as StartFuncSendMessage } from "./SendMessage.js";
import {StartFunc as StartFuncSendMessageToAll} from "./SendMessageToAll.js";

let StartFunc = ({ inDataAsJson, inws, inClients, inWss }) => {
    let LocalDataAsJson = inDataAsJson;
    console.log("Message As Json : ", LocalDataAsJson);

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
        if (LocalDataAsJson.Type === "sendMessageToAll") {
            StartFuncSendMessageToAll({ inDataToClientAsJson: LocalDataAsJson, inws, inClients, inWss});
        };
    };
};

export { StartFunc };