let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalArray = []
    for (let [key, value] of inClients) {
        if (key !== inws) {
            LocalArray.push(value);
        }
    };

    inws.send(JSON.stringify({ type: 'returnOnlineClientsWOMe', res: LocalArray }));
}
export { StartFunc };