import { Dropdown } from 'bootstrap';

export function dropdownInit() {
    document.addEventListener('DOMContentLoaded', function() {
        // Обрабатываем все dropdown-меню на странице
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const dropdownButton = dropdown.querySelector('.dropdown-toggle');
            const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
            
            if (!dropdownButton) return;
            
            // Инициализация dropdown (добавлено)
            new Dropdown(dropdownButton);
            
            // Устанавливаем дефолтное значение из активного элемента
            const activeItem = dropdown.querySelector('.dropdown-item.active');
            if (activeItem) {
                const displayElement = dropdownButton.querySelector('span') || dropdownButton;
                displayElement.textContent = activeItem.textContent;
                dropdownButton.dataset.selected = activeItem.dataset.value;
            }
            
            // Обработка выбора для каждого элемента
            dropdownItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Удаляем активный класс у всех элементов этого dropdown
                    dropdownItems.forEach(i => i.classList.remove('active'));
                    
                    // Добавляем активный класс к выбранному
                    this.classList.add('active');
                    
                    // Обновляем кнопку
                    const displayElement = dropdownButton.querySelector('span') || dropdownButton;
                    displayElement.textContent = this.textContent;
                    dropdownButton.dataset.selected = this.dataset.value;
                    
                    // Закрываем dropdown через модуль Bootstrap
                    const dropdownInstance = Dropdown.getInstance(dropdownButton);
                    if (dropdownInstance) {
                        dropdownInstance.hide();
                    }
                    
                    // Генерируем событие изменения
                    const changeEvent = new Event('change.dropdown', { bubbles: true });
                    dropdownButton.dispatchEvent(changeEvent);
                });
            });
        });
    });
}