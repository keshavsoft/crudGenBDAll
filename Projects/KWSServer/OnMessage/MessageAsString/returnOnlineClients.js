let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalArray = []

    for (let [key, value] of inClients) {
        LocalArray.push(value);
    };

    inws.send(JSON.stringify({ type: 'returnOnlineClients', res: LocalArray }));
}
export { StartFunc };