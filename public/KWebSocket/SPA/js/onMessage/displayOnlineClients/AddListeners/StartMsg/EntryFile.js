import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    // document
    // .getElementById("message")
    // .addEventListener("click", (event)=>{
    //     StartFuncClickFunc(event);
    // });

    const elements = document.querySelectorAll('.sendMessageClass');
    // console.log(elements);
    elements.forEach( el => {
        el.addEventListener('click', StartFuncClickFunc);
    });
}

export {StartFunc};