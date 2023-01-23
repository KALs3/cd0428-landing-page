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
const sections = document.querySelectorAll('section');
const listitem = document.getElementById("navbar__list");

// build the nav
function createNewList() {
  for(let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let liName = section.getAttribute('data-nav'); // get the data-nav attribute
    let liLink = section.getAttribute('id');  // get the id attribute value 
    
    let createLi = document.createElement('li');

    createLi.innerHTML = `<a class="menu__link" href=#${liLink}>${liName}</a> `; // set the innerHTML of the new li element to a link element   
    
    listitem.appendChild(createLi); 
  }
}
createNewList();






// Add class 'active' to section when near top of viewport

let currentActiveSection;  // the variable will hold the reference to the last active section
function setActive (){
  for(let section of sections){
    const rect = section.getBoundingClientRect(); 
    if(rect.top >=0 && rect.bottom <= window.innerHeight ){ // This line checks if the current section is visible within the viewport 
      if(currentActiveSection !== section){
        if (currentActiveSection) {
          currentActiveSection.classList.remove("your-active-class");
        } /**  This line checks if the current active section is different from the current section. 
        If it is, it will remove the active class from the previous active section.*/
      }
      section.classList.add("your-active-class");
      currentActiveSection = section;
    }
  }
}


window.addEventListener("scroll", setActive);



// Scroll to Anchor
const navAnchor = document.querySelectorAll("header nav a")
for (const anchor of navAnchor){
  anchor.addEventListener('click' ,scrollBehivour);
}

function scrollBehivour(scroll){

    scroll.preventDefault();  // Prevent the default behavior of the anchor element

    const href = this.getAttribute("href");    // Get the href attribute value of the clicked anchor element
  
    document.querySelector(href).scrollIntoView({ // Select the element with the matching id and scroll it into view with smooth behavior

    behavior: "smooth"

  });

}



