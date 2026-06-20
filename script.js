// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.innerHTML = nav.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

        filterBtns.forEach(btn =>
            btn.classList.remove('active')
        );

        btn.classList.add('active');

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {

            if(filter === 'all' ||
               item.dataset.category === filter) {

                item.style.display = 'block';

            } else {

                item.style.display = 'none';

            }
        });
    });
});

// Testimonials Slider
const testimonialCards =
    document.querySelectorAll('.testimonial-card');

let currentTestimonial = 0;

function showTestimonial(index) {

    testimonialCards.forEach((card, i) => {

        card.style.display =
            i === index ? 'block' : 'none';

    });

}

showTestimonial(0);

setInterval(() => {

    currentTestimonial =
        (currentTestimonial + 1) %
        testimonialCards.length;

    showTestimonial(currentTestimonial);

}, 5000);

// Contact Form
document.getElementById('contactForm')
.addEventListener('submit', function(e) {

    e.preventDefault();

    alert(
      'Thank you for your message! I will get back to you soon.'
    );

    this.reset();

});