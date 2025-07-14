export function filterInit() {
    const filter = document.querySelector('.filter')
    if (filter) {
        const docElement = document.documentElement;
        const filterClose = document.querySelector('.filter__btn-close')
        const filterOpen = document.querySelector('.catalog__ftr-open')
    
        closeFilter()
        openFilter()
    
        function closeFilter() {
            document.addEventListener('click', function(event) {
                const isClickInsideFilter = filter.contains(event.target);
                const isClickOnOpenBtn = event.target === filterOpen || filterClose || filterClose.contains(event.target);
                
                if (!isClickInsideFilter && !isClickOnOpenBtn && docElement.classList.contains('open-filter')) {
                    docElement.classList.remove('open-filter');
                }
            });
    
            if (filterClose) {
                filterClose.addEventListener('click', function() {
                if (docElement.classList.contains('open-filter')) {
                    docElement.classList.remove('open-filter');
                }
                });
            }
        }
    
    
        function openFilter() {
            if (filterOpen) {
                filterOpen.addEventListener('click', function() {
                // if (!docElement.classList.contains('open-filter')) {
                    docElement.classList.add('open-filter');
                // }
                });
            }
        }
    }

}