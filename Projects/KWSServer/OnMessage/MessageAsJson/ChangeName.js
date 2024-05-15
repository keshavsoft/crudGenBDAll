let StartFunc = ({ inDataAsJson, inws, inClients }) => {
        let LocalChangedObject = inClients.get(inws);
        LocalChangedObject.Name = LocalDataAsJson.Message;
}

export { StartFunc };