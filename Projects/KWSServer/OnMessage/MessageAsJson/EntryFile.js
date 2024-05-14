let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;
    console.log("-----------22222222 : ",LocalDataAsJson);
          
    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "FromPeer") {
            console.log("LocalDataAsJson : ", LocalDataAsJson.Message);
        };
    };

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "ChangeName") {
            // inClients.delete(inws);
            console.log("------------ : ",LocalDataAsJson);
            let LocalChangedObject = inClients.get(inws);
            LocalChangedObject.Name = LocalDataAsJson.Message;
console.log("LocalChangedObject : ",LocalChangedObject);
           // inClients.set(inws, LocalChangedObject);

            // const id = uuidv4();
            // const color = Math.floor(Math.random() * 360);
            // const Name = LocalDataAsJson.Message;
            // const metadata = { id, color, Name };

            // inClients.set(inws, metadata);

            console.log("ChangeName : ", LocalDataAsJson.Message);
        };
    };

};


function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


export { StartFunc };