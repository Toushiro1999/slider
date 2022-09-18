const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');


let index = 0;

const activeSlide = n => {
    for(const slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
};
const activeDots = n => {
    for(const dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDots(index);
};

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++ ;
        prepareCurrentSlide(index);
    };
};

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index-- ;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDog) => {
    item.addEventListener('click', () => {
        index = indexDog;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);