let StartFunc = ({ inDataAsJson, inws, inClients }) => {
    let LocalDataAsJson = inDataAsJson;
    let LocalChangedObject = inClients.get(inws);
    LocalChangedObject.Name = LocalDataAsJson.Message;

    let LocalReturnObject = {};
    LocalReturnObject.type = 'MyName';
    LocalReturnObject.Name = LocalDataAsJson.Message;

    inws.send(JSON.stringify(LocalReturnObject));
};

export { StartFunc };