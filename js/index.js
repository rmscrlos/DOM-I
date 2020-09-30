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
