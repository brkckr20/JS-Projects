let openBtn = document.querySelector<HTMLElement | any>("#openBtn");
let hideModal = document.querySelector<HTMLElement | any>(".hideModal");
let closeBtn = document.querySelector<HTMLElement | any>('#closeBtn');

openBtn?.addEventListener("click", function () {
  hideModal.style.visibility = "visible";
  hideModal.style.opacity = ".8";
  hideModal.style.bottom = "0";
})

closeBtn?.addEventListener("click", function () {
  hideModal.style.visibility = "hidden";
  hideModal.style.opacity = "0";
  hideModal.style.bottom = "20%";
})