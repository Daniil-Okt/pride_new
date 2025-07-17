export function fileInput() {
    const fileContainers = document.querySelectorAll('.form-file');
    
    fileContainers.forEach(container => {
        const fileInput = container.querySelector('input[type="file"]');
        const textSpan = container.querySelector('span');
        const svgIcon = container.querySelector('svg');
        
        const originalText = textSpan.textContent;
        
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                textSpan.textContent = `Выбрано файлов: ${this.files.length}`;
            } else {
                textSpan.textContent = originalText;
            }
        });
        
        svgIcon.addEventListener('click', function(e) {
            e.preventDefault();
            fileInput.value = '';
            textSpan.textContent = originalText;
        });
    });
}