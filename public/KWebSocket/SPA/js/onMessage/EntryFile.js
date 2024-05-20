import { StartFunc as StartFuncMyName } from "./MyName.js";

let StartFunc = (inEvent) => {
    const data = JSON.parse(inEvent.data);
    console.log("data from server", data);

    if (data.type === 'returnOnlineClientsWOMe') {
        displayOnlineClients(data.res);
    };

    if (data.type === 'GetWebSocketId') {
        localStorage.setItem('webSocketId', data.webSocketId);
    };

    if (data.type === 'sendMessage') {
    };

    if (data.type === 'MyName') {
        StartFuncMyName(data);
    };
};

function displayOnlineClients(inData) {
    if (inData.length === 0) {
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
};

export { StartFunc };