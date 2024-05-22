// import { Json } from "sequelize/lib/utils";

let StartFunc = (event) => {
  console.log("WebSocket is open now.");
  document.getElementById("UserNameId").style.color = "green";
  webSocket.send("k1");

  //my ipaddress
  GetMyAddress()
    .then((ip) => {
      // console.log("ip: ", ip);
      webSocket.send(JSON.stringify({ Type: "myIpAddress", ip: ip }));
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //my location
  getmylocation()
    .then((myLocation) => {
      // console.log('Current Position:', myLocation);
      webSocket.send(
        JSON.stringify({
          Type: "myLocation",
          latitude: myLocation.latitude,
          longitude: myLocation.longitude,
        })
      );
    })
    .catch((error) => {
      console.error("Error getting position:", error);
    });
};

let GetMyAddress = async () => {
  try {
    let response = await $.getJSON("https://api.ipify.org?format=json");
    return response.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return null;
  }
};

function getmylocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const myLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(myLocation);
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

export { StartFunc };
