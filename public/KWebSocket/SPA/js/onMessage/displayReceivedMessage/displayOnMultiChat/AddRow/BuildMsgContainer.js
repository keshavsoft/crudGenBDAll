let StartFunc = (inData) => {
    // Create the structure
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';
    colDiv.id = inData.fromId;

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    colDiv.appendChild(cardDiv);

    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card-header';
    cardDiv.appendChild(cardHeaderDiv);

    const mediaDiv = document.createElement('div');
    mediaDiv.className = 'media d-flex align-items-center';
    cardHeaderDiv.appendChild(mediaDiv);

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'avatar me-3';
    mediaDiv.appendChild(avatarDiv);

    // const img = document.createElement('img');
    // img.src = './assets/compiled/jpg/1.jpg';
    // avatarDiv.appendChild(img);

    const avatarStatus = document.createElement('span');
    avatarStatus.className = 'avatar-status bg-success';
    avatarDiv.appendChild(avatarStatus);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name flex-grow-1';
    mediaDiv.appendChild(nameDiv);

    const h6 = document.createElement('h6');
    h6.className = 'mb-0';
    console.log(inData.fromId);
    h6.textContent = inData.fromId;
    nameDiv.appendChild(h6);

    const span = document.createElement('span');
    span.className = 'text-xs';
    span.textContent = 'Online';
    nameDiv.appendChild(span);

    const button = document.createElement('button');
    button.className = 'btn btn-sm';
    mediaDiv.appendChild(button);

    const i = document.createElement('i');
    i.setAttribute('data-feather', 'x');
    button.appendChild(i);

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body pt-4 bg-grey';
    cardDiv.appendChild(cardBodyDiv);

    const chatContentDiv = document.createElement('div');
    chatContentDiv.className = 'chat-content';
    cardBodyDiv.appendChild(chatContentDiv);

    const cardFooterDiv = document.createElement('div');
    cardFooterDiv.className = 'card-footer';
    cardDiv.appendChild(cardFooterDiv);

    const messageFormDiv = document.createElement('div');
    messageFormDiv.className = 'message-form d-flex flex-direction-column align-items-center';
    cardFooterDiv.appendChild(messageFormDiv);

    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.className = 'black';
    const iconSmile = document.createElement('i');
    iconSmile.setAttribute('data-feather', 'smile');
    anchor.appendChild(iconSmile);
    messageFormDiv.appendChild(anchor);

    const inputWrapperDiv = document.createElement('div');
    inputWrapperDiv.className = 'd-flex flex-grow-1 ms-4';
    messageFormDiv.appendChild(inputWrapperDiv);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control';
    input.placeholder = 'Type your message..';
    inputWrapperDiv.appendChild(input);

    // Append the complete structure to the chat container
    document.getElementById('multi-recieve-msg').appendChild(colDiv);
};

export { StartFunc };