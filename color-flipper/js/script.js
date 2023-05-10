var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var button = document.querySelector("#btnColorChanger");
var span = document.querySelector("#myColorSpan");
function randomHexChar() {
    return Math.floor(Math.random() * hex.length);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    var hex_color = '#';
    for (var i = 0; i < 6; i++) {
        hex_color += hex[randomHexChar()];
    }
    span !== null ? span.innerHTML = hex_color : null;
    document.body.style.backgroundColor = hex_color;
});
