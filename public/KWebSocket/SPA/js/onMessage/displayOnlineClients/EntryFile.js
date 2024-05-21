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
        addComment(user.id, user.Name, user.loginDateTime, loopIndex + 1);
    });

    StartFuncAddListeners();
}

function addComment(profileId, profileName, loginDateTime, loopIndex) {
    const template = document.getElementById('templateId');

    const cardBody = document.getElementById('card-bodyId');
    template.content.getElementById('comment-profileNameId').textContent = profileName;
    template.content.getElementById('comment-messageId').textContent = profileId;
    template.content.getElementById('comment-numberId').textContent = loopIndex;
    template.content.getElementById('comment-timeId').textContent = getDateTime(loginDateTime);

    cardBody.appendChild(template.content.cloneNode(true));
};

function getDateTime(loginDateTime){
    // const {year, month, date, hours, minutes, seconds} = loginDateTime;
    // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // let TZ = hours >= 12 ? 'PM' : 'AM';
    // let hour = hours % 12 || 12;
    // return `${date} ${months[month]} ${year}, ${hour}:${minutes} ${TZ}`;
    const currentTime = new Date();
    const login = new Date(loginDateTime);
    // console.log("date is",login);
    // console.log("date is",currentTime);
    const diff = currentTime - login;
    // console.log("diff is",diff);
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const remainingSeconds = Math.floor(diff / 1000) % 60;


    // console.log("Bhaskar:   ",loginDateTime.getHours());
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds ago`;
}

export { StartFunc };