// generate a random color

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
const startChange = () => {
    if (intervalId == null) {
        intervalId = setInterval(chageColor, 1000)
    }
    function chageColor() {
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChange = () => {
    clearInterval(intervalId);
    intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)