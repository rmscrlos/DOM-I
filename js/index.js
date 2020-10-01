const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//nav
let navLinks = document.querySelectorAll('a');
navLinks.forEach((item, index) => (item.textContent = siteContent['nav'][`nav-item-${index + 1}`]));
// console.log(navLinks);

//cta section
let myString = 'DOM\n Is\n Awesome';
const ctaHOne = document.querySelector('.cta-text h1');
ctaHOne.innerText = myString;
// console.log(ctaHOne);

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = 'Get Started';

// main content
// top content
const topHFour = document.querySelectorAll('.top-content .text-content h4');
const topContent = document.querySelectorAll('.top-content .text-content p');
topHFour[0].textContent = siteContent['main-content']['features-h4'];
topHFour[1].textContent = siteContent['main-content']['about-h4'];
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];
// console.log(topHFour);
// console.log(topContent);

// middle img
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

//bottom content
const botHFour = document.querySelectorAll('.bottom-content .text-content h4');
const botContent = document.querySelectorAll('.bottom-content .text-content p');
botHFour[0].textContent = siteContent['main-content']['services-h4'];
botHFour[1].textContent = siteContent['main-content']['product-h4'];
botHFour[2].textContent = siteContent['main-content']['vision-h4'];
botContent[0].textContent = siteContent['main-content']['services-content'];
botContent[1].textContent = siteContent['main-content']['product-content'];
botContent[2].textContent = siteContent['main-content']['vision-content'];

// contact section
const contactHFour = document.querySelector('.contact h4');
const contactPs = document.querySelectorAll('.contact p');
contactHFour.textContent = siteContent['contact']['contact-h4'];

contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

// footer
const foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];

// append and prepend
const appnd = document.createElement('a');
appnd.setAttribute('href', '#');
appnd.textContent = 'Appended';
// console.log(appnd);

const prepnd = document.createElement('a');
prepnd.setAttribute('href', '#');
prepnd.textContent = 'Prepended';
console.log(prepnd);

const nav = document.querySelector('nav');
nav.prepend(prepnd);
// nav.append(appnd);

//stretch - dark mode
const head = document.querySelector('head');
// console.log(head);
const darkMode = document.createElement('style');
head.appendChild(darkMode);

const modeBtn = document.createElement('button');
console.log(modeBtn);
modeBtn.textContent = 'Dark/light';

//fixing problem with border after click
// const main = document.querySelector('.main-content');
// main.style.borderTop = '2px solid #000';
// main.style.borderBotttom = '2px solid #000';

modeBtn.addEventListener('click', function() {
	darkMode.innerHTML =
		'.dark-mode {background: #000; color: #fff;} #logo-img{background: #fff;} .main-content{border-bottom: 2px solid #fff !important; border-top: 2px solid #fff; !important}';
	let body = document.querySelector('body');
	body.classList.toggle('dark-mode');
	if (body.className === '') {
		darkMode.innerHTML = '';
	}
});

// append modeBtn
nav.append(modeBtn);
