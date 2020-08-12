let popup = document.querySelector('.popup');
let popupOverlay = popup.querySelector('.popup__overlay');
let popupOpenButton = document.querySelector('.info__button-edit');
let popupCloseButton = popup.querySelector('.popup__button-close');

let formElement = document.querySelector('.popup__container');
let inputName = formElement.querySelector('.popup__input_value_name');
let inputJob = formElement.querySelector('.popup__input_value_job');

let title = document.querySelector('.info__title');
let subtitle = document.querySelector('.info__subtitle');

function popupToogle() {
	if (!popup.classList.contains('popup_opened')) {
		inputName.value = title.textContent
		inputJob.value = subtitle.textContent
	}
	if (event.target !== event.currentTarget) return;
	popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToogle);
popupCloseButton.addEventListener('click', popupToogle);
popupOverlay.addEventListener('click', popupToogle);

function formSubmitHandler(evt) {
	evt.preventDefault();
	title.textContent = inputName.value;
	subtitle.textContent = inputJob.value;
	popupToogle();
}

formElement.addEventListener('submit', formSubmitHandler);
