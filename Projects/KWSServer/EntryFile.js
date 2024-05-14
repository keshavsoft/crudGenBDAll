import { WebSocketServer } from 'ws';
import WebSocket from "ws";
import { StartFunc as CommoninsertToClients } from './insertToClients.js';
import { StartFunc as CommonOnMessage } from "./OnMessage/EntryFile.js";

let wss;

const clients = new Map();

// let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")

let StartFunc = (server) => {
    wss = new WebSocketServer({ server });

    wss.on("connection", WsOnConnection);
};

let WsOnConnection = (ws, req) => {
    CommoninsertToClients({
        inClients: clients,
        ws
    });

    let id = clients.get(ws).id;

    // CommonSaveToJsonOnConnections({
    //     inVerifyToken: LocalFromVerifyToken,
    //     inws: ws,
    //     inClients: clients,
    //     inRequest: req
    // });

    ws.on('message', (data, isBinary) => {
        let k1 = clients.get(ws);

        CommonOnMessage({
            inData: data,
            inws: ws,
            inClients: clients
        });

        setTimeout(function timeout() {
            ws.send(Date.now());
        }, 500);
    });

    ws.on('close', () => {
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(JSON.stringify({ type: 'user offline', userId: id })); // Customize message, extract user ID from URL
            }
        });
        clients.delete(ws);
        console.log("Number of users online: ", clients.size);
    });

    

    ws.send(Date.now());
};

export { StartFunc };