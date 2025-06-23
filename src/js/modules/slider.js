import { Carousel } from 'bootstrap';

export function sliderInit() {
    // Инициализация
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new Carousel(carousel, {
            interval: 3000,
            touch: true // включение свайпа на мобильных
        });
    });


}