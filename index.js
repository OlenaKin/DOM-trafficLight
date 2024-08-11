let lights = ['red', 'yellow', 'green'];
let currentLight = 0;

function updateTrafficLight() {
    document.getElementById('redLight').className = 'light';
    document.getElementById('yellowLight').className = 'light';
    document.getElementById('greenLight').className = 'light';

    let currentColor = lights[currentLight];
    document.getElementById(`${currentColor}Light`).classList.add(currentColor);

    currentLight = (currentLight + 1) % lights.length;
}

document.getElementById('changeLightBtn').addEventListener('click', updateTrafficLight);