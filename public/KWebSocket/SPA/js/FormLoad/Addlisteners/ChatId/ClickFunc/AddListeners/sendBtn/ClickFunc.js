let StartFunc = () => {
  const chatContent = document.getElementById("chat-content");
  const inputMsg = document.getElementById("inputMsg");
  const msg = inputMsg.value;
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
  }
};

export { StartFunc };
