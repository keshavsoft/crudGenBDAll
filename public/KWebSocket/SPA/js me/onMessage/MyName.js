let StartFunc = (inJsonData) => {
    let jVarLocalData = inJsonData;
    console.log("jVarLocalData : ", jVarLocalData);
    jFLocalToInputUserNameId(jVarLocalData.Name);
};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

export { StartFunc };