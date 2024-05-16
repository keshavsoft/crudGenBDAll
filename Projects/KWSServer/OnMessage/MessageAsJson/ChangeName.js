let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.Name = LocalDataAsJson.Message;
};

export { StartFunc };