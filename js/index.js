// Array.from(document.links).forEach((link) =>{
//     link.addEventListener('click', (event) =>{
//         event.preventDefault();
//     })
// })

// 1
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