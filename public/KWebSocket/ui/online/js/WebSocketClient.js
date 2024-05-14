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

        if(data.type === 'returnOnlineClients'){
            displayOnlineClients(data.res);
        };
};;

    webSocket.onclose = function (e) {
    };
};
 
function displayOnlineClients(inData){
    const cardBody = document.getElementById('card-bodyId');
    cardBody.innerHTML="";

    inData.forEach((user) => {
        addComment(user.id);
    });
};

function addComment(profileId) {
    const template = document.getElementById('templateId');
        
    const cardBody = document.getElementById('card-bodyId');
    // template.content.getElementById('avatarId').innerHTML = '<img src="../assets/compiled/jpg/2.jpg" alt="Avatar">';
    template.content.getElementById('comment-profileNameId').textContent = profileId;
    cardBody.appendChild(template.content.cloneNode(true));
    
    // template.content.getElementById('comment-timeId').textContent = '5 seconds ago';
    // template.content.getElementById('comment-messageId').textContent = 'Hello, World!';
    // const existingComments = cardBody.getElementsByClassName('comment-profileName');
    // const profileNames = Array.from(existingComments).map(comment => comment.textContent);
    // if (!profileNames.includes(profileId)) {
    //     cardBody.appendChild(template.content.cloneNode(true));
    // }
}

StartFunc();