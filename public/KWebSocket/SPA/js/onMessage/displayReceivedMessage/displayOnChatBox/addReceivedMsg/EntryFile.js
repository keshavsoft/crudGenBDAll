let StartFunc = (inData, profileId) => {
    if (inData.fromId === profileId) {
        let receivedMessage = inData.Message;
        const template = document.getElementById("templateChatMsg");
        const chatContent = document.getElementById("chat-content");
        let chatMessage = template.content.getElementById("chat-message");
        let chat = template.content.getElementById("chat");
        chat.classList.add("chat-left");
        chatMessage.textContent = receivedMessage;
        chatContent.appendChild(template.content.cloneNode(true));
    };
};

export {StartFunc};