let StartFunc = () => {
    const sidebar = document.querySelectorAll('.sidebar-item');
    sidebar.forEach(element => {
        element.addEventListener('click', () => {
            sidebar.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        });
    });
    console.log("online isisis ",online);
    console.log("chat isisis ",chat);
};

export { StartFunc };