import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    
    document.getElementById("inputMsg").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          // document.getElementById("sendBtn").click();
          StartFuncClickFunc();
        }
    });
}

export {StartFunc};