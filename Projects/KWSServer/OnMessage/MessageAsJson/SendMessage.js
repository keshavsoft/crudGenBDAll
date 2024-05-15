let StartFunc = ({ inDataToClientAsJson, inws,inClients }) => {
    let LocalSendObject = inClients.get(inws);
    // console.log("iinDataToClientAsJson : ",inDataToClientAsJson);
    let toId = inDataToClientAsJson.toId;
    // console.log("toId : ",toId);
    let toWs = Getws(inClients, toId);
    console.log("toWs : ",inClients.get(toWs));
    toWs.send(JSON.stringify({ type: 'sendMessage', Message: inDataToClientAsJson.Message, toId: toId, fromId: LocalSendObject.id}));
    
    


}
let Getws = (inClients, toId)=> {
    for (let [key, value] of inClients.entries()) {
      if (value.id === toId)
        return key;
    }
}
  
export {StartFunc};