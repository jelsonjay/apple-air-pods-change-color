'use strict';

const boxColors = document.querySelectorAll('.colors .color');
const btnCapacity = document.querySelectorAll('.capacity .size');
const imgWrap = document.querySelector('img-container');
const imageElement = document.querySelector('.img-container .image');
const listName = ['Air Jordan', 'Nike', 'Adidas'];

for (let i = 0; i < btnCapacity.length; i++) {
	let button = btnCapacity[i];

	button.addEventListener('click', function () {
		document
			.querySelector('.capacity .size.selected')
			.classList.remove('selected');
		this.classList.add('selected');
	});
}

for (let i = 0; i < boxColors.length; i++) {
	let btnColor = boxColors[i];

	btnColor.addEventListener('click', function () {
		document
			.querySelector('.colors .color.selected')
			.classList.remove('selected');
		this.classList.add('selected');
		imageElement.src = './images/airpods-' + this.dataset.name + '.png';
		//imageElement.style.backgroundColor = this.dataset.color;
	});
}
