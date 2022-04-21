setInterval(setDate, 1000);

const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour.hand');
const hands = document.querySelector('.hand');
const clock = document.querySelector('.clock');
const { body } = document;

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

// Change the background
function changeBackground(number) {
    let previousBackground;
    if (body.className) {
        previousBackground = body.className;
    }
    // Class body reset
    body.className = '';
    switch(number) {
        case '1':
        return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
        case '2':
        return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
        case '3':
        return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
        case '4':
        return (previousBackground === 'background-4' ? false : body.classList.add('background-4'));
    }
}

setDate();