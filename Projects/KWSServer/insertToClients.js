// let CommonSaveToJsonOnConnections = require("./LogHistory/OnConnection/EntryFile")

let StartFunc = ({ inClients, ws }) => {
    const id = uuidv4();
    const color = Math.floor(Math.random() * 360);
    const Name = "Anonymous";
    const loginTime = getDate();
    const metadata = { id, color, Name, loginTime };

    inClients.set(ws, metadata);
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


function getDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    return dateTime;
}

//module.exports = StartFunc;
export { StartFunc };