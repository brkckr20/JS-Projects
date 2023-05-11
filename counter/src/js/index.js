var count = 0;
var num = document.getElementById('number');
var increase = document.getElementById('btnDecrease');
var decrease = document.getElementById('btnIncrease');
var reset = document.getElementById('btnReset');
increase === null || increase === void 0 ? void 0 : increase.addEventListener("click", function () {
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
});
decrease === null || decrease === void 0 ? void 0 : decrease.addEventListener("click", function () {
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
});
reset === null || reset === void 0 ? void 0 : reset.addEventListener("click", function () {
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
});
