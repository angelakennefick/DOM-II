
const logo = document.querySelector(".logo-heading");
logo.addEventListener('focus', () =>{
document.body.style.background = 'salmon'
});

// 2
logo.addEventListener('click', () =>{
document.body.style.background = 'white'
});

// 3
logo.addEventListener('dblclick', () =>{
    logo.style.color = 'salmon';
    });

// 4
const intro = document.querySelector(".intro");
intro.addEventListener('keydown', () =>{
    document.body.style.cursor = "crosshair";
    });
    
// 5
const contentSection = document.querySelector(".content-section");
contentSection.addEventListener('wheel', () => {
 document.body.style.cursor = "pointer";
});  
    
//  6
window.addEventListener('load', () => {
    logo.style.transform = "skewX(20deg)"
});

// 7
let navLinks = document.querySelectorAll(".nav a");

navLinks[0].addEventListener('mouseover', () => {
    navLinks[0].style.transform ="skewY(20deg)"
   });  

// 8
navLinks[1].addEventListener('select', () => {
    navLinks[1].style.transform ="rotate(90deg)"
   });  
// 9
navLinks[2].addEventListener('pointermove', () => {
    navLinks[2].style.transform ="scale(5, 10)"
   });  
// 10
navLinks[3].addEventListener('scroll', () => {
    navLinks[3].style.transform ="translate(50px, 100px)"
   });  


// event prop + prevent default
navLinks.forEach(a => {
    a.stopPropagation();
    a.preventDefault();
});
    
    
 