const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector(".banner-img")
const bannerTxt = document.querySelector("#banner p")

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

let currentSlide = 0
let bulletsDots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span");
	dot.classList.add("dot");
	bulletsDots.appendChild(dot);
	if (i === currentSlide) {
		dot.classList.add("dot_selected");
	}
}

arrowLeft.addEventListener("click", () => {
	currentSlide--
	if (currentSlide < 0) {
		currentSlide = slides.length - 1
	}
	updateCaroussel();
})

arrowRight.addEventListener("click", () => {
	currentSlide++
	if (currentSlide >= slides.length) {
		currentSlide = 0
	}
	updateCaroussel();
})

function updateCaroussel() {
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	bannerTxt.innerHTML = slides[currentSlide].tagLine;
	const listDot = document.querySelectorAll(".dot")
	listDot.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}
