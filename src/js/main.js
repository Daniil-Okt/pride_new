/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'


import BaseHelpers from './helpers/base-helpers';
// import PopupManager from './modules/popup-manager';
import BurgerMenu from './modules/burger-menu';
import { sliderRange } from './libs/slider-range';
import { filterInit } from './modules/filterInit';

import { initProductSliders, sliderInit } from './modules/slider';
import { dropdownInit } from './modules/dropdown';
import { searchOpenClose } from './modules/searchOpenClose';
import { catalogGridSwitch } from './modules/catalogGridSwitch';
import { menuClose } from './modules/menu-close';


import { Tooltip, Modal } from 'bootstrap';




// import Tabs from './modules/tabs';
// import Accordion from './modules/accordion';

// BaseHelpers.checkWebpSupport();
/* Добавление класса touch для HTML если браузер мобильный */
// BaseHelpers.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
BaseHelpers.addLoadedClass();
/* Фиксированный header */
BaseHelpers.headerFixed(80);


/** ===================================================================================
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/** ===================================================================================
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/** ===================================================================================
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/** ===================================================================================
 * Параллакс мышей
 * */
// new MousePRLX();


/* ТАБЫ ================================================================================================
 	* На wrapper блока табов добавить атрибут data-tabs="название"
	* Для обертки title табов добавить класс "tabs__nav"
	* Для title таба добавить класс "tabs__trigger"
	* Для обертки body табов добавить класс "tabs__content"
	* Для body таба добавить класс "tabs__panel"
*/
// new Tabs('название', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });
/* АККАРДЕОН ===========================================================================================
 	* Класс wrapper блока аккардеона добавить в инициализацию аккардиона
	* Каждый элемент аккардеона обернуть в блок с классом "accordion__item"
	* Для title аккардеона добавить класс "accordion__header"
	* Для content аккардеона добавить класс "accordion__content"
*/
// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });

/* Динамический адаптив =================================================================================
* Что бы перебросить блок в другой блок, повешай на него атрибут:
* data-da="class блока куда нужно перебросить, брекпоинт(ширина экрана), позиция в блоке(цифра либо first,last)"
*/
/*Расскоментировать для использования*/
// import { useDynamicAdapt } from './modules/dynamicAdapt.js'
// useDynamicAdapt()

/* Маска для инпута tel =================================================================================
	* Добавить класс tel к нужному инпуту 
*/
// import { maskTel } from './modules/index.js'
// maskTel()

/* Cкрыть меню при клике на его ссылки ==================================================================
*/
import { toggleLinkMenuNoOpen } from './modules/index.js'
toggleLinkMenuNoOpen()

/* Cкрыть меню при клике вне его ========================================================================
	* Добавить к меню класс 'your-menu'
*/
// import { toggleOutClickMenuRemoveOpen } from './modules/index.js'
// toggleOutClickMenuRemoveOpen()

/* Удалить класс _active при клике вне элемента =========================================================
	* Передать в функцию нужный элемент и класс который нужно удалить
*/
// import { removeClassOutClickElement } from './modules/index.js'
// const elements = document.querySelectorAll('.class'); 
// removeClassOutClickElement(elements, '.removeClass')

/* Инициализация  swiper =================================================================================
*/
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


/* Валидация формы ======================================================================================
* В константу записывает нужную форму
* В переменную formNAME передаем форму
* В переменную popupTranks передаем окно благодарности
* Добавить класс _email на input type='mail'
* Добавить класс tel на input type='tel'
* Добавить каласс _req на input которые нужно проверить
* Добавить класс .popup-thanks для модального окна спасибо
  Раскоментировать для использования
*/ 
// import { validForm } from './modules/validFrom.js'
// const popupTranks = document.querySelector('.popup-thanks')
// const formNAME = document.getElementById('form-NAME')

//==== валидация ====
// validForm(fromName, popupTranks)
//==== отправка ====

//==== валидация ====

//==== валидация ====

//==== валидация ====

//==== валидация ====
// =======================================================================================================

/* Добавление класса _active родителю при клике ==========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
import { toggleActiveClassParent } from './modules/index.js'
import { inputPassword } from './modules/inputPassword.js';
import { fileInput } from './modules/fileInput.js';
const linkDropHead = document.querySelectorAll('.link-drop__head');
toggleActiveClassParent(linkDropHead)

/* Динамический класса _active элементу при клике ========================================================
	* Вызвать функцию и передать в нее массив нужных элементов
	* При клике на элемент, у всех элементов класс удаляется
*/
// import { toggleActiveClass } from './modules/index.js'
// const elementAll = document.querySelectorAll('.class');
// toggleActiveClass(elementAll)


document.querySelectorAll('.prod-card__h-i-like').forEach(like => {
	like.addEventListener('click', () => {
		like.classList.toggle('_active')
	})
})
document.querySelectorAll('.prod-info__stat').forEach(like => {
	like.addEventListener('click', () => {
		like.classList.toggle('_active')
	})
})




sliderInit()


dropdownInit()

sliderRange()

filterInit()

searchOpenClose()

catalogGridSwitch()

menuClose()

inputPassword()

fileInput()

// Инициализация tooltips 
document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
	    new Tooltip(el);
	});
  });



// Инициализация модальных окон
document.querySelectorAll('.modal').forEach(modalEl => {
	new Modal(modalEl, {
	  backdrop: true,
	  focus: true,
	  keyboard: true
	});
});




document.querySelectorAll('.icon-menu-basic').forEach(btn => {
	btn.addEventListener('click', () => {
		document.documentElement.classList.toggle('menu-basic-open')
	})
});
document.querySelectorAll('.icon-menu-catalog').forEach(btn => {
	btn.addEventListener('click', () => {
		document.documentElement.classList.toggle('menu-catalog-open')
	})
});



document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.icon-ch');
    
    containers.forEach(container => {
        const input = container.querySelector('input');
        
        function handleInput() {
            if (input.value.trim() !== '') {
                container.classList.add('icon-active');
            } else {
                container.classList.remove('icon-active');
            }
        }
        
        handleInput();
        
        input.addEventListener('input', handleInput);
    });
});



// document.addEventListener('DOMContentLoaded', function() {
// 	const stars = document.querySelectorAll('.rev-page__str .star');
	
// 	stars.forEach(star => {
// 		star.addEventListener('click', function() {
// 			const rating = parseInt(this.parentElement.getAttribute('data-rating'));
			
// 			// Удаляем класс active у всех звезд
// 			stars.forEach(s => s.classList.remove('active'));
			
// 			// Добавляем класс active всем звездам до текущей (включительно)
// 			stars.forEach(s => {
// 			if(parseInt(s.parentElement.getAttribute('data-rating')) <= rating) {
// 				s.classList.add('active');
// 			}
// 			});
			
// 			// Можно добавить здесь сохранение выбранной оценки
// 			console.log('Выбрана оценка:', rating);
// 		})
// 	});
//   });


// Функция для обновления ширины
function updateTitleDescMinWidth() {
	const descriptItemTitle = document.querySelector('.compar__item-row.title-row');
	if (descriptItemTitle) {
		const decriptItemLast = descriptItemTitle.nextElementSibling;
		const itemsDesc = decriptItemLast.querySelectorAll('.compar__item')
		const descItemWidth = itemsDesc[0].offsetWidth;
		const minWidth = descItemWidth * itemsDesc.length
		if (decriptItemLast) {
			
			document.documentElement.style.setProperty(
				'--descript-width', 
				`${minWidth}px`
			);
		}
	}
  }
  window.addEventListener('load', updateTitleDescMinWidth);
  window.addEventListener('resize', updateTitleDescMinWidth);