import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    document
    .getElementById("sendBtn")
    .addEventListener("click", StartFuncClickFunc);
}

export {StartFunc};