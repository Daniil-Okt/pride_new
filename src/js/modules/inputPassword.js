export function inputPassword() {
    const passwordItems = document.querySelectorAll('.input-password-item');

    // Для каждого блока добавляем обработчик
    passwordItems.forEach(item => {
      // Находим кнопку и input внутри текущего блока
      const toggleBtn = item.querySelector('.input-password-show');
      const passwordInput = item.querySelector('input');
  
      // Добавляем обработчик клика на кнопку
      toggleBtn.addEventListener('click', function() {
        // Переключаем класс _show у текущего блока
        item.classList.toggle('_show');
        
        // Меняем тип input (password ↔ text)
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
        } else {
          passwordInput.type = 'password';
        }
      });
    });
}