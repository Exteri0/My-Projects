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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * 
 * @param x = required section  
 * @returns true if section in viewport
 * 
 */
function inView(x){
    let y = x.getBoundingClientRect()
    if(y.top>= -10&&y.top<=500) return true
    return false
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// this function builds the navigation panel
function buildNav(){
    let temp = document.getElementById('navbar__list');
    for (let section of sections){
        let newelem = document.createElement('li');
        let secname = section.getAttribute('data-nav');
        let secid = section.getAttribute('id');
        newelem.setAttribute("id",`${secid}`);
        newelem.setAttribute("class",'menu__link');
        newelem.innerHTML = `${secname}`;
        temp.append(newelem);
    }
    
}
/**
 * @desc this function checks all of the sections to determine which of them is in the view port using the helper function inView 
 * and then adds the active class to it
 */
function setActive(){
    for (let section of sections){
        if(inView(section)){
            section.classList.add('your-active-class');
            for(let listElement of listElements){
                if(section.id===listElement.id){
                    listElement.classList.add('active_li')
                    listElement.classList.remove('menu__link')
                }else{
                    listElement.classList.add('menu__link')
                    listElement.classList.remove('active_li')
                }
            }
        }
        else{
            section.classList.remove('your-active-class')

        }

    }


}
/**
 * 
 * @param event is the event coming from the listener (the click)
 * @desc this function gets the id of the navigation li element that's been clicked and then finds the section in the body of the html that 
 * has the same id and then scrolls to it using scrollIntoView   
 */
function scrollToSection(event){
    for(let listElement of listElements){
        if(event.target.id === listElement.id ){
            for(let section of sections){
                if(section.id === listElement.id){
                    section.scrollIntoView({
                        behavior:'smooth',
                        block:'center'
                    })
                }
            }
        }
    }
}
// build the nav
buildNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

const listElements = document.getElementsByTagName('li')

/**
 * End Main Functions
 * Begin Events
 * 
*/
addEventListener('scroll', function() {
    setActive()
});
addEventListener('click',function(event){
    scrollToSection(event)
})
// Build menu 

// Scroll to section on link click

// Set sections as active

