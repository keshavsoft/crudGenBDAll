let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:") {
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}
let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {

    webSocket = new WebSocket(jVarLocalUrlForWS);

    webSocket.onopen = (event) => {
        webSocket.send("k1");
    };

    webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        // if (data.type === 'user online') {
        //     console.log("User online:",data.userId);
        // }
        // if(data.type === 'userId'){
        //     console.log("User id:",data.userId);
        // }
        if(data.type === 'returnOnlineClients'){
            displayOnlineClients(data.res);
        }

        // console.log(event.data);
    };;

    webSocket.onclose = function (e) {
    };
};


StartFunc();