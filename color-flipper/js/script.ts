const hex : Array<string | number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btnColorChanger");
const span = document.querySelector("#myColorSpan");

function randomHexChar() {
    return Math.floor(Math.random() * hex.length);
}

button?.addEventListener("click", () => {
    let hex_color = '#';

    for (let i = 0; i < 6;i++){
        hex_color += hex[randomHexChar()]
    }

    span !== null ? span.innerHTML = hex_color : null;
    document.body.style.backgroundColor = hex_color;
});

