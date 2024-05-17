let StartFunc = () => {
    var input = document.getElementById("SendButtonId");

    // Execute a function when the user presses a key on the keyboard
    input.addEventListener("click", function (event) {
        const template = document.getElementById('templateId');
        const chatContent = document.getElementById('chat-content');
        let inputMessage = document.getElementById('SendMessageInputId').value;
        template.content.getElementById('chat-message').textContent = inputMessage;
        chatContent.appendChild(template.content.cloneNode(true));
        document.getElementById('SendMessageInputId').value = " ";
    });
};

export { StartFunc }