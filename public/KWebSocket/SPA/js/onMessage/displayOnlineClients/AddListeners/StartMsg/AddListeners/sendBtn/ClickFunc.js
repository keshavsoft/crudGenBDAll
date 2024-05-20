let StartFunc = () => {
  const chatContent = document.getElementById("chat-content");
  const inputMsg = document.getElementById("inputMsg");
  const msg = inputMsg.value;
  
  let profileId = document.getElementById("receiverId").innerText;

  if (msg) {
    inputMsg.value = "";
    const chat = document.createElement("div");

    chat.classList.add("chat");
    chat.innerHTML = `
      <div class="chat-body">
          <div class="chat-message">${msg}</div>
      </div>
  `;
    chatContent.appendChild(chat);

    webSocket.send(
      JSON.stringify({
        Type: "sendMessage",
        toId: profileId,
        Message: msg,
      })
    );
  }

  // const template = document.getElementById("templateChatMsg");
  // const chatContent = document.getElementById("chat-content");
  // let inputMessage = document.getElementById("inputMsg").value;
  // let chatMessage = template.content.getElementById("chat-message");
  // chatMessage.textContent = inputMessage;
  // chatContent.appendChild(template.content.cloneNode(true));
  // document.getElementById("inputMsg").value = " ";
};

export { StartFunc };
