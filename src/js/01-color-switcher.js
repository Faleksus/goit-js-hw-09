import '../css/common.css';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

refs.stopBtn.setAttribute('disabled', true);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const changeColor = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
            const colorNameEl = getRandomHexColor();
            refs.body.style.background = colorNameEl;
            refs.startBtn.setAttribute('disabled', true);
            refs.stopBtn.removeAttribute('disabled');
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.removeAttribute('disabled');
        refs.stopBtn.setAttribute('disabled', true);
    },
};

refs.startBtn.addEventListener('click', () => {
    changeColor.start();
});

refs.stopBtn.addEventListener('click', () => {
    changeColor.stop();
});