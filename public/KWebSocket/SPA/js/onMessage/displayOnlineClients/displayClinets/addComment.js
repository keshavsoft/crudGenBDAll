import { StartFunc as StartFuncGetDateTime } from "./getDateTime.js";

let StartFunc = (profileId, profileName, loginDateTime, loopIndex) => {
    const template = document.getElementById('templateId');

    const cardBody = document.getElementById('card-bodyId');
    template.content.getElementById('comment-profileNameId').textContent = profileName;
    template.content.getElementById('comment-messageId').textContent = profileId;
    template.content.getElementById('comment-numberId').textContent = loopIndex;
    template.content.getElementById('comment-timeId').textContent = StartFuncGetDateTime(loginDateTime);

    cardBody.appendChild(template.content.cloneNode(true));
};

export { StartFunc };
