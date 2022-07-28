var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomPicker = document.querySelector(".random-picker");
var body = document.getElementById("gradient");

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function getRandomColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16).padStart(2, 0)}${green.toString(16).padStart(2, 0)}${blue.toString(16).padStart(2, 0)}`;
}

randomPicker.addEventListener("click", function () {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
});

