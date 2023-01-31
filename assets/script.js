// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

// // 01 - LES EVENT LISTENERS SUR LES FLECHES
// const arrowLeft = document.querySelector(".arrow_left"); // Je sélectionne les images en utilisant leurs classes
// const arrowRight = document.querySelector(".arrow_right");


// // J'ajoutez des écouteurs d'événements click aux images
// arrowLeft.addEventListener("click", function() {
// 	console.log("Flèche gauche cliquée");
//   });
  
//   arrowRight.addEventListener("click", function() {
// 	console.log("Flèche droite cliquée");
//   });


  
// // 02 - LES BOULLET POINTS
// const dots = document.querySelectorAll(".dot"); // Tous les points de balle
// var currentIndex = 0;

// // Boucle sur chaque point de balle et ajouter un écouteur d'événement clique
// dots.forEach(function(dot, i) {
//   dot.addEventListener("click", function() {
//     console.log("Point de balle " + (i + 1) + " cliqué");
//     currentIndex = i;
//     updateDots();
//   });
// });

// // Mettre à jour l'état des points de balle
// function updateDots() {
//   dots.forEach(function(dot, i) {
//     if (i === currentIndex) {
//       dot.classList.add("dot_selected");
//     } else {
//       dot.classList.remove("dot_selected");
//     }
//   });
// }



// // 03 - MODIFICATION DU SLIDE AU CLICK SUR LES FLECHES

// const images = [
// 	"./assets/images/slideshow/slide1.jpg", 
// 	"./assets/images/slideshow/slide2.jpg", 
// 	"./assets/images/slideshow/slide3.jpg", 
// 	"./assets/images/slideshow/slide4.png"
// ];


// const bannerImage = document.querySelector(".banner-img");
// var currentIndex = 0;

// // changer le texte sur les slides
// const tagLine = document.querySelector(".tagLine");

// function updateSlide() {
//   tagLine.innerHTML = slides[currentIndex].tagLine;
//   updateDots();
// }

// // click sur la flèche droite
// document.querySelector(".arrow_right").addEventListener("click", function() {
// 	currentIndex = (currentIndex + 1) % images.length;
// 	bannerImage.src = images[currentIndex];
// 	updateDots();
//   });

// // click sur la flèche gauche 
// document.querySelector(".arrow_left").addEventListener("click", function() {
// 	if (currentIndex === 0) {
// 	  currentIndex = images.length - 1;
// 	} else {
// 	  currentIndex = (currentIndex - 1) % images.length;
// 	}
// 	bannerImage.src = images[currentIndex];
// 	updateDots();
//   });
  
//   function updateDots() {
// 	for (var i = 0; i < dots.length; i++) {
// 	  dots[i].classList.remove("dot_selected");
// 	}
// 	dots[currentIndex].classList.add("dot_selected");
//   }


// Solution 2

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
