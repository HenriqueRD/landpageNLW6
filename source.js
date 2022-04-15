//MOBILE
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a')
for(const x of toggle) {
    x.addEventListener('click', function() {
        nav.classList.toggle('show');
    })
}
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//CAROSSEL
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: false,
        }
    },
});

//SCROLLREVEAL
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 500,
    reset: true,
})
scrollReveal.reveal(`
    #home .image, #home .infoHome,
    #about .image, #about .infoAbout,
    #services .infoServices, #services .card,
    #testimonials h1, #testimonials  .swiper-container,
    #contact, #footer`,
    {interval: 100}
);

//ARROW UP
const arrowUp = document.querySelector('#arrow');
window.addEventListener('scroll', function () {
    if(this.window.scrollY > 550) {
        arrowUp.classList.add('show');
    }else{
        arrowUp.classList.remove('show');
    }
});