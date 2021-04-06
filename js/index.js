Array.from(document.links).forEach((link) =>{
    link.addEventListener('click', (event) =>{
        event.preventDefault();
    })
})

const logo = document.querySelector(".logo-heading");
logo.addEventListener('mouseover', () =>{
document.body.style.background = 'salmon'
});