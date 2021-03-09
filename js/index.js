// Stop nav items from refreshing the page
Array.from(document.links).forEach((link) =>{
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        console.log('test')
    });
});

// Type 1
const headerLogo = document.querySelector(".logo-heading");

headerLogo.addEventListener('mouseover', ()=>{
    headerLogo.textContent = "Super Fun Bus";
    headerLogo.style.fontSize = '6rem';
});

//Type 2
headerLogo.addEventListener('mouseout', ()=>{
    headerLogo.textContent = "Fun Bus";
    headerLogo.style.fontSize = '4rem';
});

// Type 3
const nav = document.querySelector(".nav");

nav.addEventListener('click', () =>{
    alert("It don't work");
});

// Type 4
const welcome = document.querySelector('.intro h2');

document.addEventListener('keydown', ()=>{
    welcome.style.color = 'orange';
    console.log('keydown');
});

//Type 5
document.addEventListener('keyup', ()=>{
    welcome.style.color = 'black';
    console.log('keyup');
});

//Type 6
const body = document.querySelector('body');
document.addEventListener('wheel', ()=>{
    body.style.backgroundColor = 'pink';
});

//Type 7
const header = document.querySelector('.main-navigation');
body.addEventListener('dblclick', (event)=>{
    header.style.backgroundColor = 'red'
    console.log(event);
    event.stopPropagation

});

//Type 8
const contentSection = document.querySelector('.content-section');
contentSection.addEventListener('focus', (event)=>{
    contentSection.style.display = 'none';
    console.log(event);
});

// Type 9
const img = document.querySelector('.img-fluid')
document.addEventListener('select', (event)=>{
    img.style.width = '300px';
    console.log(event);
});

//Type 10
const destination = document.querySelector('p')
window.addEventListener('load', (event)=>{
    destination.style.color = "red";
    console.log(event);
    event.stopPropagation;
});