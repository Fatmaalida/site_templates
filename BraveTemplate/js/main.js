const mainMenu = document.querySelector('.navbar-collapse');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll(' .navbar-collapse .navbar-nav li a');




openMenu.addEventListener('click',show);

closeMenu.addEventListener('click' , disnone);


function disnone(){
    mainMenu.style.display='none';
    $(".openMenu").removeClass("d-none");
}

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    $(".openMenu").addClass("d-none");
    
}
function close(){
    mainMenu.style.top = '-100%';
    
    
}









const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav(){

    if(window.scrollY > navbar.offsetHeight + 50) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')
    }
}


$(document).ready(function(){

    function isScrolledIntoView(element) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elementTop = $(element).offset().top,
            elementBottom = elementTop + $(element).height();
    
        return ((elementBottom > docViewTop) && (elementTop < docViewBottom));
    }
    function animateViewport() {
        $('.add-animate').each(function() {
            var animateType = $(this).attr('data-animated');
    
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animated ' + animateType).removeClass('add-animate');
            }
        });
    }
    animateViewport();

    $(window).on("resize scroll", function() {
        animateViewport();
    });
  });



  const testcontainer = document.querySelector('.testcontainer')

  const test = document.querySelector('.test')

  const userImage = document.querySelector('.user-img')

  const username = document.querySelector('.username-test')

  const role = document.querySelector('.role')

  const testimonials = [
    {
        name:"Renee Sims",
        position:"Software Developer",
        photo:"https://randomuser.me/api/portraits/women/43.jpg",

        text:"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        name:"Sasho Jower",
        position:"Graphic Designer",
        photo:"https://randomuser.me/api/portraits/women/63.jpg",

        text:"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        name:"Joey Clarkes",
        position:"Accountant",
        photo:"https://randomuser.me/api/portraits/men/43.jpg",

        text:"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        name:"Jonathan Nunfiez",
        position:"Director",
        photo:"https://randomuser.me/api/portraits/men/48.jpg",

        text:"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
    {
        name:"Cristina Celkev",
        position:"Software Developer",
        photo:"https://randomuser.me/api/portraits/women/78.jpg",

        text:"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },
]

let idx = 1

function uptadeTestimonials(){
    const {name, position, photo, text} = testimonials[idx]

    testimonials.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1){

        idx = 0

    }



}

setInterval(uptadeTestimonials, 10000)



// const counters = document.querySelectorAll('.counter')

// counters.forEach(counter => {

//             counter.innerText = '0'

//             const updateCounter = () => {
//                 const target = +counter.getAttribute('data-target-dismiss')
//                 const c = +counter.innerText

//                 const increment = target / 100

//                 if(c < target) {

//                     counter.innerText = `${Math.ceil(c + increment)}`
//                     setTimeout(updateCounter, 1)
//                 } else {

//                     counter.innerText = target
//                 }
//             }

//             updateCounter()



// })

const boxesContainer = document.getElementById('boxes')
const btnMagic = document.getElementById('btnMagic')

btnMagic.addEventListener('click', () => boxesContainer.classList.toggle('big'))


function createBoxes(){
    for( let i=0; i < 4; i++){
        for( let j=0; j < 4; j++){
            const boxx = document.createElement('div')
            boxx.classList.add('boxx')
            boxx.style.backgroundPosition = `${-j* 125}px ${-i*125}px` 
            boxesContainer.appendChild(boxx)
        }
    }
}

createBoxes()

let radialBarPath1 = document.querySelector(".radialBarPath1")
let radialBarPath2 = document.querySelector(".radialBarPath2")
let radialBarPath3 = document.querySelector(".radialBarPath3")
let radialBarPath4 = document.querySelector(".radialBarPath4")
counter1 = document.querySelector(".counter1");
counter2 = document.querySelector(".counter2");
counter3 = document.querySelector(".counter3");
counter4 = document.querySelector(".counter4");

let progressStartValueOne = 0,    
progressEndValueOne = 90,    
speed1 = 22;

let progress1 = setInterval(() => {
progressStartValueOne++;

counter1.textContent = `${progressStartValueOne}`
// radialBarPath1.style.background =  `conic-gradient(#00bbf0 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValueOne == progressEndValueOne){
    clearInterval(progress1);
}    
}, speed1);

// Second spins 

let progressStartValueTwo = 0,    
progressEndValueTwo = 80,    
speed2 = 22;

let progress2 = setInterval(() => {
progressStartValueTwo++;

counter2.textContent = `${progressStartValueTwo}`


if(progressStartValueTwo == progressEndValueTwo){
    clearInterval(progress2);
}    
}, speed2);

// third spin 

let progressStartValueThree = 0,    
progressEndValueThree = 75,    
speed3 = 22;

let progress3 = setInterval(() => {
progressStartValueThree++;

counter3.textContent = `${progressStartValueThree}`

if(progressStartValueThree == progressEndValueThree){
    clearInterval(progress3);
}    
}, speed3);

// fourth spin


let progressStartValueFour = 0,    
progressEndValueFour = 85,    
speed4 = 22;

let progress4 = setInterval(() => {
progressStartValueFour++;

counter4.textContent = `${progressStartValueFour}`


if(progressStartValueFour == progressEndValueFour){
    clearInterval(progress4);
}    
}, speed4);



