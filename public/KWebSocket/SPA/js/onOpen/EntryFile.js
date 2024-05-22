// import { Json } from "sequelize/lib/utils";

let StartFunc = (event) => {
    console.log("WebSocket is open now.");
    document.getElementById("UserNameId").style.color = "green";
    webSocket.send("k1");


    //my ipaddress
    GetMyAddress().then(ip => {
        console.log("ip: ", ip);
        webSocket.send(JSON.stringify({ type: "myIpAddress", ip: ip }));
    }).catch(error => {
        console.error("Error:", error);
    });

    //my location
    let myLocation = getmylocation();
    // console.log("myLocation: ", myLocation);
    webSocket.send(JSON.stringify({ type: "myLocation", latitude:myLocation.latitude, longitude:myLocation.longitude }));

};

let GetMyAddress = async () => {
    try {
        let response = await $.getJSON("https://api.ipify.org?format=json");
        return response.ip;
    } catch (error) {
        console.error("Error fetching IP address:", error);
        return null; 
    }
}

function getmylocation(){
    let myLocation ={}
    navigator.geolocation.getCurrentPosition(function(location) {
    myLocation.latitude = location.coords.latitude;
    myLocation.longitude = location.coords.longitude;
});
return myLocation;
};

export { StartFunc };