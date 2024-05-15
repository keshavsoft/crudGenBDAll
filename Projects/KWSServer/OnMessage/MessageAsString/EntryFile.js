let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalDataAsSting = inDataAsString;
    console.log("LocalDataAsSting : ", LocalDataAsSting);
    if (LocalDataAsSting === "returnOnlineClients") {
        let LocalArray = []

        for (let [key, value] of inClients) {
            LocalArray.push(value);
        };

        inws.send(JSON.stringify({ type: 'returnOnlineClients', res: LocalArray }));
    };
    if (LocalDataAsSting === "GetWebSocketId") {
        let localWebSocketData=inClients.get(inws);

        inws.send(JSON.stringify({ type: 'GetWebSocketId', webSocketId: localWebSocketData.id }));
    };
};

export { StartFunc };