import { StartFunc as StartFuncAddComment } from "./addComment.js";

let StartFunc = (inData) => {
    const cardBody = document.getElementById('card-bodyId');
    cardBody.innerHTML = "";

    inData.forEach((user, loopIndex) => {
        StartFuncAddComment(user.id, user.Name, user.loginDateTime, loopIndex + 1);
    });
};

export { StartFunc };
