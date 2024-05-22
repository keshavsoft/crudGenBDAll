let StartFunc = (loginDateTime) => {
    const currentTime = new Date();
    const login = new Date(loginDateTime);
    // console.log("date is",login);
    // console.log("date is",currentTime);
    const diff = currentTime - login;
    // console.log("diff is",diff);
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const remainingSeconds = Math.floor(diff / 1000) % 60;


    // console.log("Bhaskar:   ",loginDateTime.getHours());
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds ago`;
};

export { StartFunc };
