export function searchOpenClose() {
        const searchOpenBtn = document.querySelector('.header__search-open');
        const searchBlock = document.querySelector('.header__search');
        const body = document.body;

        // Открытие/закрытие по кнопке
        searchOpenBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Чтобы клик не срабатывал на document
            searchBlock.classList.toggle('_open');
            searchOpenBtn.classList.toggle('_open');
        });
        
        // Закрытие при клике вне области поиска
        document.addEventListener('click', function(e) {
            if (!searchBlock.contains(e.target) && e.target !== searchOpenBtn) {
                searchBlock.classList.remove('_open');
                searchOpenBtn.classList.remove('_open');
            }
        });
}