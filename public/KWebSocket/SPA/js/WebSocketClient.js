let jVarLocalHostName = window.location.host;
let jVarLocalUrlForWS;

if (location.protocol === "https:") {
    jVarLocalUrlForWS = "wss://" + jVarLocalHostName;
}
if (location.protocol === "http:"){
    jVarLocalUrlForWS = "ws://" + jVarLocalHostName;
}

// let webSocket;
let StartFunc = () => {
    jFLocalEstablishWebSocket();
};

let jFLocalEstablishWebSocket = () => {
    webSocket = new WebSocket(jVarLocalUrlForWS);
    webSocket.onopen = (event) => {
        console.log("WebSocket is open now.");
        document.getElementById("OnlinePeopleId").style.color = "green";
        webSocket.send("k1");
    };

    webSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(webSocket,"webSocket ra mahithuuuuuuu")
        console.log("event : ", data.type);
        if (data.type === 'returnOnlineClientsWOMe') {
            console.log("res length::::",data.res.length);
            displayOnlineClients(data.res);
        };
        if (data.type === 'GetWebSocketId') {
            localStorage.setItem('webSocketId', data.webSocketId);
        };
        if (data.type === 'sendMessage') {
            console.log("data.Message", data.Message);
            console.log("data.fromId", data.fromId);
        }

    };;

    webSocket.onclose = function (e) {
        console.log("Socket is closed. Reconnect will be attempted in 1 second.");
        document.getElementById("OnlinePeopleId").style.color = "red";
    };
};

function displayOnlineClients(inData) {
    if(inData.length===0){
        const cardBody = document.getElementById('card-bodyId');
        cardBody.innerHTML = "NO ONLINE USERS FOUND!";
        return;
    }
    const cardBody = document.getElementById('card-bodyId');
    cardBody.innerHTML = "";

    inData.forEach((user, loopIndex) => {
        addComment(user.id, user.Name, loopIndex + 1);
    });
};

function addComment(profileId, profileName, loopIndex) {
    const template = document.getElementById('templateId');

    const cardBody = document.getElementById('card-bodyId');
    // template.content.getElementById('avatarId').innerHTML = '<img src="../assets/compiled/jpg/2.jpg" alt="Avatar">';
    template.content.getElementById('comment-profileNameId').textContent = profileName;
    template.content.getElementById('comment-messageId').textContent = profileId;
    template.content.getElementById('comment-timeId').textContent = loopIndex;
    cardBody.appendChild(template.content.cloneNode(true));

    // template.content.getElementById('comment-timeId').textContent = '5 seconds ago';

    // const existingComments = cardBody.getElementsByClassName('comment-profileName');
    // const profileNames = Array.from(existingComments).map(comment => comment.textContent);
    // if (!profileNames.includes(profileId)) {
    //     cardBody.appendChild(template.content.cloneNode(true));
    // }
}
// console.log("WebSocketClient.js loaded", webSocket);
// function startchat() {
//     const chatContent = document.getElementById('chat-content');
//     const inputMsg = document.getElementById('inputMsg');
//     const sendBtn = document.getElementById('sendBtn');
//     console.log("reeeeeey" , chatContent, inputMsg, sendBtn);
    
//     let profileId = localStorage.getItem("currentMsgId");
    
//     sendBtn.addEventListener('click', () => {
    
//         const msg = inputMsg.value;
//         console.log("msg raaaaa", msg );
//         if (msg) {
//             webSocket.send(JSON.stringify({
//                 Type: "sendMessage",
//                 toId: profileId,
//                 Message:msg
//             }));
//             inputMsg.value = '';
    
//             const chat = document.createElement('div');
    
//             chat.classList.add('chat');
//             chat.innerHTML = `
//                 <div class="chat-body">
//                     <div class="chat-message">${msg}</div>
//                 </div>
//             `;
//             chatContent.appendChild(chat);
//         }
//     });  
//     }




StartFunc();