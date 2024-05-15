let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let localWebSocketData=inClients.get(inws);
    inws.send(JSON.stringify({ type: 'GetWebSocketId', webSocketId: localWebSocketData.id }));
}
export { StartFunc };