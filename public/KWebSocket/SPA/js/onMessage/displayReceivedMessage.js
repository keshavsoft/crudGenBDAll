let StartFunc = (data) => {
  try {
    const profileId = document.getElementById("receiverId").innerText;

    if (data.fromId === profileId) {
      let receivedMessage = data.Message;
      const template = document.getElementById("templateChatMsg");
      const chatContent = document.getElementById("chat-content");
      let chatMessage = template.content.getElementById("chat-message");
      let chat = template.content.getElementById("chat");
      chat.classList.add("chat-left");
      chatMessage.textContent = receivedMessage;
      chatContent.appendChild(template.content.cloneNode(true));
    };

    return;
  } catch (error) { }

  var $table = $("#table");
  data.date = new Date()
  console.log(data);
  // $table.bootstrapTable();
  addRow($table, data);
};

function addRow($table, data) {
  // var table = $('table').bootstrapTable();
  console.log($table);
  $table.bootstrapTable("insertRow", {
    index: 0,
    row: {
      id: 1,
      From: data.fromId,
      Message: data.Message,
      Date: data.date,
    },
  });
}

export { StartFunc };
