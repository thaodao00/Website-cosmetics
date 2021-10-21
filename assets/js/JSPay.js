let changeButton = document.querySelector(".pay__user-info__body-change");

changeButton.onclick = function () {
    document.querySelector(".modal-address").style.display = "flex";
}

let backButton = document.querySelector(".auth-form__controls-back")

backButton.onclick = function () {
    document.querySelector(".modal-address").style.display = "none";
}

let modalOverlay = document.querySelector(".modal__overlay");

modalOverlay.onclick = function () {
    document.querySelector(".modal-address").style.display = "none";
}