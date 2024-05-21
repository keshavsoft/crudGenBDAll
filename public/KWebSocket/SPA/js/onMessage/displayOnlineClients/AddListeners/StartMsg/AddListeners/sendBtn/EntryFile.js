import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document
    .getElementById("sendBtn")
    .addEventListener("click", StartFuncClickFunc);
    
    document.getElementById("inputMsg").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("sendBtn").click();
        }
    });
}

export {StartFunc};