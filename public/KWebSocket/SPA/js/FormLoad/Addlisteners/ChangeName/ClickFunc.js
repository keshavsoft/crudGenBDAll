let StartFunc = async () => {
  const ipAPI = "//api.ipify.org?format=json";
  const response = await fetch(ipAPI);
  const data = await response.json();
  const inputValue = "";
  const { value: username } = await Swal.fire({
    title: "Enter your User Name",
    input: "text",
    inputValue,
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
  if (username) {
    let jVarLocalObjectToSend = {};
    jVarLocalObjectToSend.Type = "ChangeName";
    jVarLocalObjectToSend.Message = `${username}`;
    webSocket.send(JSON.stringify(jVarLocalObjectToSend));
  }
};

export { StartFunc };
