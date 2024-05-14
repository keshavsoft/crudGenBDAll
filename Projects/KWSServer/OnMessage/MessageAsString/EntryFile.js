let StartFunc = ({ inDataAsString, inws }) => {
    let LocalDataAsSting = inDataAsString;

    if(inDataAsString === "returnOnlineClients"){
        console.log("string : ", LocalDataAsSting, new Date());
        inws.send("These are the Online Clients...");
    }
    // console.log("string : ", LocalDataAsSting, new Date());
};

// module.exports = StartFunc;
export { StartFunc };