const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const indicators = document.querySelector('.slider-indicators');

let currentSlide = 0;
const slideInterval = 5000; // Change slide every 5 seconds

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    indicators.children[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators.children[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Create indicator dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(index));
    indicators.appendChild(dot);
});

// Set up event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Set up automatic sliding
let slideTimer = setInterval(nextSlide, slideInterval);

// Pause automatic sliding when hovering over the slider
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideTimer);
});
sliderContainer.addEventListener('mouseleave', () => {
    slideTimer = setInterval(nextSlide, slideInterval);
});


// slider Animation 

const searchFun = () => {
    let filter = document.getElementById('myinput').value.toUpperCase(); // Get the input value and convert to uppercase
    let items = document.getElementsByClassName('item'); // Get all grid items
    
    for (let i = 0; i < items.length; i++) { 
        let p = items[i].getElementsByTagName('p')[0]; // Get the location (the second <p> tag)
        if (p) {
            let textValue = p.textContent || p.innerText; // Get the text content of the location
            if (textValue.toUpperCase().indexOf(filter) > -1) { // If the input matches any part of the location
                items[i].style.display = ""; // Show the grid item
            } else {
                items[i].style.display = "none"; // Hide the grid item
            }
        }       
    }
};
