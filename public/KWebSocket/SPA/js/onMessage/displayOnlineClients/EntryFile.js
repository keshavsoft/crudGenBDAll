import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncDisplayClients } from "./displayClinets/EntryFile.js";

let StartFunc = (inData) => {
    if (inData.length === 0) {
        const cardBody = document.getElementById('card-bodyId');
        cardBody.innerHTML = "NO ONLINE USERS FOUND!";
        return;
    }

    StartFuncDisplayClients(inData);

    StartFuncAddListeners();
}

export { StartFunc };