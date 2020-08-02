let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.info__button-edit');
let popupCloseButton = popup.querySelector('.popup__button-close');

let popupOpen = function () {
    popup.classList.toggle('popup_opened');
}

let popupClose = function (event) {
    if (event.target !== event.currentTarget) return;
    popupOpen();
}

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupOpen);
popup.addEventListener('click', popupClose);


let formElement = document.querySelector('.popup__container');
let inputValue = formElement.querySelectorAll('.popup__input');
let title = document.querySelector('.info__title');
let subtitle = document.querySelector('.info__subtitle');

function formSubmitHandler(evt) {
    evt.preventDefault();
    title.textContent = inputValue[0].value;
    subtitle.textContent = inputValue[1].value;
    popupOpen();
}

formElement.addEventListener('submit', formSubmitHandler);
