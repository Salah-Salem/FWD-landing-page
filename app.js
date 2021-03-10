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
const allSections = document.querySelectorAll('section');
const ul = document.getElementById("navbar__list");
const frag = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

allSections.forEach(element =>{ 
 
 const dataNav = element.getAttribute('data-nav');
 const list = document.createElement('li');
 const aTag = document.createElement('a') ; 

 list.addEventListener( "click" , ()=> {
     element.scrollIntoView({behavior :"smooth" });
 } );

 aTag.textContent = dataNav ; 
 list.appendChild(aTag); 
 frag.appendChild(list);


});

ul.appendChild(frag); 


// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    allSections.forEach(activeSection =>{

        let sectionsSize = activeSection.getBoundingClientRect();
        if (sectionsSize.top >=0 && sectionsSize.top <= 200 ){
            allSections.forEach(sections => {
                sections.classList.remove('your-active-class');
            });
            activeSection.classList.add('your-active-class') ;
            const getATag = document.querySelectorAll('a'); 
            getATag.forEach( linkA => {
            if(activeSection.getAttribute('data-nav') === linkA.textContent){
                getATag.forEach(link => {
                    link.classList.remove('rect');
                });
                linkA.classList.add('rect');
            }
            });
        }
    });
});




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
