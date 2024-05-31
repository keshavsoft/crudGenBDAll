let StartFunc = (inData) => {

console.log(document.getElementById(inData.fromId));
let chatContentDiv = document.getElementById(inData.fromId).getElementsByClassName('chat-content')[0];
    let chatContent = document.createElement('div');
    chatContent.className = 'left';
    chatContent.innerHTML = inData.Message;
    chatContentDiv.appendChild(chatContent);
};

export { StartFunc };