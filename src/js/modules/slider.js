import { Carousel } from 'bootstrap';
import Swiper, { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';

export function sliderInit() {
    // Инициализация основных каруселей
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new Carousel(carousel, {
            interval: 3000,
            touch: true
        });
    });





    // Инициализация вертикального слайдера
    const thumbsProd = new Swiper('.left-product__slider-min', {
        // direction: 'vertical',
        modules: [Navigation, Pagination, Thumbs],
        slidesPerView: 5,
        spaceBetween: 6,
        watchSlidesProgress: true,
        breakpoints: {
            768: {
                direction: 'vertical',
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
    });

    // Инициализация главного слайдера
    const prodSlider = new Swiper('.left-product__slider-big', {
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        modules: [Navigation, Pagination, Thumbs],
        thumbs: {
            swiper: thumbsProd
        },
        navigation: {
            nextEl: '.left-product__slider-next',
            prevEl: '.left-product__slider-prev'
        },
    });


    const prodRevSlider = new Swiper('.prod-rev__slider', {
        speed: 800,
        spaceBetween: 7.8,
        slidesPerView: 'auto',
        modules: [Navigation, Pagination],
        initialSlide: 0,
        breakpoints: {
            1400: {
                slidesPerView: 'auto',
                spaceBetween: 12.5,
            },
            1650: {
                slidesPerView: 'auto',
                spaceBetween: 12.5,
            }
        },
    });


    // const swiper = new Swiper('.swiper', {
    //   speed: 800,
    //   spaceBetween: 16,
    //   slidesPerView: 1.4,
    //   modules: [Autoplay, Navigation, Pagination],
    //   loop: true,
    //   initialSlide: 1,
    //   autoplay: {
    //     delay: 2500,
    //     stopOnLastSlide: false,
    //     disableOnIteration: false,
    //   },
    //   navigation: {
    //     prevEl: ".reviews__button-slider-prev",
    //     nextEl: ".reviews__button-slider-next"
    //   },
    //   pagination: {
    //     el: ".card-slider__pagination",
    //     dynamicBullets: true,
    //     clickable: true,
    //   },
    //   breakpoints: {
    //     1400: {
    //       slidesPerView: 4,
    //       spaceBetween: 24,
    //   	},
    //     1650: {
    //         slidesPerView: 4,
    //         spaceBetween: 48,
    //     }
    //   },
    // });
}
