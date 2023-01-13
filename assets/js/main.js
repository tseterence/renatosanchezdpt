AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 700, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// Scroll to top button
let scrollButton = document.getElementById('btn-back-to-top');

scrollButton.addEventListener('click', backToTop);
function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
		scrollButton.style.display = 'block';
	else scrollButton.style.display = 'none';
}

// Language toggle
const spanishToggle = document.getElementById('languageSwitch');
const englishContent = document.getElementsByClassName('eng');
const spanishContent = document.getElementsByClassName('esp');

function enableEnglish() {
	Array.from(spanishContent).forEach((el) => (el.style.display = 'none'));
	Array.from(englishContent).forEach((el) => (el.style.display = 'block'));
}
function enableSpanish() {
	Array.from(englishContent).forEach((el) => (el.style.display = 'none'));
	Array.from(spanishContent).forEach((el) => (el.style.display = 'block'));
}

// const enableSpanish = () => {
// 	document.body.classList.add('esp');
// 	// 2. Update darkMode in localStorage
// 	localStorage.setItem('spanish', 'enabled');
// 	// 3. toggle the checkbox
// 	languageToggle.setAttribute('checked', true);
// };

spanishToggle.addEventListener('click', function () {
	this.checked ? console.log('Checked...') : console.log('Not checked...');
});
