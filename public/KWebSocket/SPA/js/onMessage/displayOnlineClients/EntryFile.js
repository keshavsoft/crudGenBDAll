import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

let StartFunc = (inData) => {
    if (inData.length === 0) {
        const cardBody = document.getElementById('card-bodyId');
        cardBody.innerHTML = "NO ONLINE USERS FOUND!";
        return;
    }
    const cardBody = document.getElementById('card-bodyId');
    cardBody.innerHTML = "";

    inData.forEach((user, loopIndex) => {
        addComment(user.id, user.Name, user.loginTime, loopIndex + 1);
    });

    StartFuncAddListeners();
}

function addComment(profileId, profileName, loginTime, loopIndex) {
    const template = document.getElementById('templateId');

    const cardBody = document.getElementById('card-bodyId');
    template.content.getElementById('comment-profileNameId').textContent = profileName;
    template.content.getElementById('comment-messageId').textContent = profileId;
    template.content.getElementById('comment-numberId').textContent = loopIndex;
    template.content.getElementById('comment-timeId').textContent = loginTime;
    cardBody.appendChild(template.content.cloneNode(true));
};

export { StartFunc };