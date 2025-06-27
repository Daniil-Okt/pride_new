export function catalogGridSwitch() {
    const catalogBtnsGrid = document.querySelectorAll('.catalog__btn-grid');
    if (catalogBtnsGrid.length > 0) {
        catalogBtnsGrid.forEach(btn => {

            btn.addEventListener('click', () => {
                catalogBtnsGrid.forEach(btnTwo => {
                    btnTwo.classList.remove('_active');
                });
                document.documentElement.classList.toggle('catalog-row-rect');
                btn.classList.add('_active');
            })
        });
    }
}