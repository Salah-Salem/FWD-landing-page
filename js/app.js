/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const navItems = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/** detrmine what section in viewpoert */
function getViewPort(element) {
    const rect = element.getBoundingClientRect()
    // return !(rect.top > innerHeight || rect.top < 0);
    return (rect.top >= 0 && rect.bottom < innerHeight);
}
// making navbar links take background based on active section 
function getActiveLink(section) {
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        if (link.textContent === section.getAttribute('data-nav')){
            link.style.background = 'linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100% )';
            link.style.color= '#fff';
        }else {
            link.style.background = '';
            link.style.color = '#000';
        }
    })
}

// additional feature 
// toggling header navbar function 
const barsBtn = document.querySelector('.bars__btn');
barsBtn.addEventListener('click', () => {
   (navList.style.display) === 'none' ? navList.style.display = 'flex' : navList.style.display = 'none';
   (navList.style.display) === 'none' ? (barsBtn.style.width = '100%',barsBtn.style.float = 'right') : barsBtn.style.width = '20%';
})

//scrolling down function 
const topBtn = document.querySelector('.top__btn');
const  scrollToBottom = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }
// scrolling back to the top function 
const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav 

function displayNavBar () {
    navItems.forEach(item => {
        const newEle = document.createElement('li');
        const newLink = document.createElement('a');
            navigateByClick(newEle,item);
        newLink.textContent = item.getAttribute('data-nav');
        newLink.classList.add('menu__link');
        newEle.appendChild(newLink);
        fragment.appendChild(newEle)
    })
    navList.appendChild(fragment)
}

// Add class 'active' to section when near top of viewport

const changeActiveSection = () => {
    navItems.forEach((item) => {
        document.addEventListener( 'scroll', event => {
        if (getViewPort(item)) {
            getActiveLink(item);
            item.classList.add('your-active-class');
        }else 
            {
                item.classList.remove('your-active-class');
            }
        })
    })
}

// Scroll to anchor ID using scrollTO event

const navigateByClick = (newEle,item) => {
    newEle.addEventListener('click', () => {
        item.scrollIntoView({behavior: 'smooth'})
    })
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
displayNavBar();

// Scroll to section on link click

// Set sections as active
changeActiveSection();
// scroll to the Bottom
window.onscroll = function() {scrollToBottom()};
// back to the top 
topBtn.addEventListener('click',scrollToTop);