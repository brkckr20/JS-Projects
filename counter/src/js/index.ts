let count = 0;

const num = document.getElementById('number') as HTMLElement;
const increase = document.getElementById('btnDecrease');
const decrease = document.getElementById('btnIncrease');
const reset = document.getElementById('btnReset');

increase?.addEventListener("click", function () {
    count++;
    num.textContent = String(count);
    if (count > 0) {
        if (num instanceof Element) {
            num.style.color = "green";
        }
    }
    else if (count == 0) {
        if (num instanceof Element) {
            num.style.color = "black";
        }
    }
    else {
        if (num instanceof Element) {
            num.style.color = "red";
        }
    }
})

decrease?.addEventListener("click", function () {
    count--;
    num.textContent = String(count);
    if (count > 0) {
        if (num instanceof Element) {
            num.style.color = "green";
        }
    }
    else if (count == 0) {
        if (num instanceof Element) {
            num.style.color = "black";
        }
    }
    else {
        if (num instanceof Element) {
            num.style.color = "red";
        }
    }
})


reset?.addEventListener("click", function () {
    count = 0;
    num.textContent = String(count);
    if (count > 0) {
        if (num instanceof Element) {
            num.style.color = "green";
        }
    }
    else if (count == 0) {
        if (num instanceof Element) {
            num.style.color = "black";
        }
    }
    else {
        if (num instanceof Element) {
            num.style.color = "red";
        }
    }
})