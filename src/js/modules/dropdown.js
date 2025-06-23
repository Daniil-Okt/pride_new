import { Dropdown } from 'bootstrap';

export function dropdownInit() {
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownButton = document.getElementById('dropdownMenuButton');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        
        // Устанавливаем дефолтное значение из активного элемента
        const activeItem = document.querySelector('.dropdown-item.active');
        if(activeItem && dropdownButton) {
            dropdownButton.querySelector('span').innerHTML = activeItem.textContent;
            dropdownButton.setAttribute('data-selected', activeItem.getAttribute('data-value'));
        }
        
        // Обработка выбора
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Удаляем активный класс у всех элементов
                dropdownItems.forEach(i => i.classList.remove('active'));
                
                // Добавляем активный класс к выбранному
                this.classList.add('active');
                
                // Обновляем кнопку
                if(dropdownButton) {
                    dropdownButton.querySelector('span').innerHTML = this.textContent;
                    dropdownButton.setAttribute('data-selected', this.getAttribute('data-value'));
                    
                    // Закрываем dropdown через модуль Bootstrap
                    const dropdownInstance = Dropdown.getInstance(dropdownButton);
                    if(dropdownInstance) {
                        dropdownInstance.hide();
                    }
                }
            });
        });
    });
}