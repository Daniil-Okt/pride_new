export function menuClose() {
    const iconMenu = document.querySelector('.icon-menu');
    const mobMenu = document.querySelector('.mob-menu');
    const mobMenuBody = document.querySelector('.mob-menu__body');
    
    // Проверяем существование необходимых элементов
    if (!iconMenu || !mobMenu || !mobMenuBody) {
        console.warn('Не найдены элементы меню:', { iconMenu, mobMenu, mobMenuBody });
        return;
    }

    // Функция для закрытия меню
    const closeMenu = () => {
        iconMenu.click();
    };

    // Обработчик клика по документу
    const handleDocumentClick = (event) => {
        // Проверяем, был ли клик по mob-menu, но не по mob-menu__body внутри него
        const isClickOnMenu = mobMenu === event.target || mobMenu.contains(event.target);
        const isClickOnBody = mobMenuBody === event.target || mobMenuBody.contains(event.target);
        
        if (isClickOnMenu && !isClickOnBody) {
            closeMenu();
        }
    };

    // Добавляем обработчик
    document.addEventListener('click', handleDocumentClick, true);

    // Возвращаем функцию для удаления обработчика (опционально)
    return () => {
        document.removeEventListener('click', handleDocumentClick, true);
    };
}