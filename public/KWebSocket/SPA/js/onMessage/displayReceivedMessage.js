let StartFunc = (data) => {
    let receivedMessage = data.Message;
    const template = document.getElementById("templateChatMsg");
  const chatContent = document.getElementById("chat-content");
  let chatMessage = template.content.getElementById("chat-message");
  let chat = template.content.getElementById("chat");
  chat.classList.add("chat-left");
  chatMessage.textContent = receivedMessage;
  chatContent.appendChild(template.content.cloneNode(true));
}

export {StartFunc};