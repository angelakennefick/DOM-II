
const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () =>{
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
intro.addEventListener('mouseover', () =>{
    document.body.style.cursor = "crosshair";
    });
    
// 5
const contentSection = document.querySelector(".content-section");
contentSection.addEventListener('mouseover', () => {
 document.body.style.cursor = "pointer";
});  
    
  
       

 
    
    
 