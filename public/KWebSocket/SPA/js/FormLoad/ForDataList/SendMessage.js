let StartFunc = (event) => {

    // Traverse up the DOM tree to find the comment element
    let commentElement = event.target.closest('.comment');
    if (!commentElement) {
        console.error('Comment element not found');
        return;
    }

    // Get the profile ID from the comment element
    let profileId = commentElement.querySelector('.comment-body').querySelector('#comment-messageId').textContent;

    console.log('Profile ID:', profileId);
    localStorage.setItem("currentMsgId", profileId);

    // Send your WebSocket message with the profile ID
    webSocket.send(JSON.stringify({
        Type: "sendMessage",
        toId: profileId,
        Message: "Hello"
    }));
    const center = document.getElementById('centerpage');
    center.innerHTML = `<object type="text/html" data="./chat.html" style="width: 100%; height: 100%; "></object>`;
    // startchat();
};

export { StartFunc };