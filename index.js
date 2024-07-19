let stopElement = document.getElementById("stopButton");
let readyElement = document.getElementById("readyButton");
let goElement = document.getElementById("goButton");
let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");

function stopButton() {
    stopElement.style.backgroundColor = "#cf1124";
    stopLightElement.style.backgroundColor = "#cf1124";

    readyElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";

    goElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";
}

function readyButton() {
    readyElement.style.backgroundColor = "#f7c948";
    readyLightElement.style.backgroundColor = "#f7c948";

    stopElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";

    goElement.style.backgroundColor = "#1f1d41";
    goLightElement.style.backgroundColor = "#4b5069";
}

function goButton() {
    goElement.style.backgroundColor = "#199473";
    goLightElement.style.backgroundColor = "#199473";

    readyElement.style.backgroundColor = "#1f1d41";
    readyLightElement.style.backgroundColor = "#4b5069";

    stopElement.style.backgroundColor = "#1f1d41";
    stopLightElement.style.backgroundColor = "#4b5069";
}