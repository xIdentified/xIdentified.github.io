let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide")[0].getElementsByTagName("img");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Improved navbar toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('show'); // Toggle nav visibility
        toggleButton.classList.toggle('open'); // Toggle button class to change icon
    });
});
