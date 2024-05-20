

let StartFunc = () => {
    document.getElementById("getOnlineUsers").addEventListener("click", function () {
        // console.log(webSocket.send("returnOnlineClientsWOMe").res);
        webSocket.send("returnOnlineClientsWOMe");
    });
};

export { StartFunc };