import { StartFunc as StartFuncSaveButtonClickId } from "./ShowUserButtonClick/GetOnlineButtonClicked.js";
import { StartFunc as StartFuncProfileButtonClickId } from "./ShowUserButtonClick/GetProfileName.js";
import  { StartFunc as StartFuncChnageNameClickId } from "./ShowUserButtonClick/ChangeName.js";


const StartFunc = () => {
    StartFuncSaveButtonClickId();
    StartFuncProfileButtonClickId();
    StartFuncChnageNameClickId();
};

export { StartFunc };