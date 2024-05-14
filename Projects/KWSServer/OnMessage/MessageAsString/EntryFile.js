let StartFunc = ({ inDataAsString, inws, inClients }) => {
    let LocalDataAsSting = inDataAsString;

    if(inDataAsString === "returnOnlineClients"){
        console.log("string : ", LocalDataAsSting, new Date());
        // inws.send(`These are the Online Clients...${inClients.size}`);
        // wss.clients.forEach((client) => {
        //     if (client !== ws && client.readyState === WebSocket.OPEN) {
        //       client.send(JSON.stringify({ type: 'user offline', userId: id })); // Customize message, extract user ID from URL
        //     }
        // });
        let LocalArray=[]
        for (let [key, value] of inClients) {
            // console.log( key+ " is " + value);
            console.log( value);
            LocalArray.push(value);
        }
        inws.send(JSON.stringify({type: 'returnOnlineClients', res: LocalArray}));
    }
    // console.log("string : ", LocalDataAsSting, new Date());
};

// module.exports = StartFunc;
export { StartFunc };