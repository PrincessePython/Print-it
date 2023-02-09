const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let index = 0;
const banner = document.querySelector('.banner-img');
const tagLine = document.querySelector('.tagLine');
const dots = document.querySelectorAll('.dot');

document.querySelector('.arrow_right').addEventListener('click', function() {
	index++;
	if (index === slides.length) {
		index = 0;
	}
	banner.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	dots.forEach(function(dot) {
		dot.classList.remove('dot_selected');
	});
	dots[index].classList.add('dot_selected');
});

document.querySelector('.arrow_left').addEventListener('click', function() {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	banner.src = `./assets/images/slideshow/${slides[index].image}`;
	tagLine.innerHTML = slides[index].tagLine;
	dots.forEach(function(dot) {
		dot.classList.remove('dot_selected');
	});
	dots[index].classList.add('dot_selected');
});
