
/**
 * 
 * @param {string} selector 
 */
const filter = (selector) => {
    const filters = document.querySelectorAll(selector);
    if (!filters) return;

    /**
     * 
     * @param {HTMLElement} container 
     */
    const filterHandler = (container) => {
        const buttons = container.querySelector('.filter__buttons');
        const cards = container.querySelector('.filter__cards');

        const cardsHandler = (type) => {
            [...cards.children].forEach(card => {
                if (type === 'all') card.classList.remove('hide');
                else if(card.dataset.name !== type) card.classList.add('hide');
                else card.classList.remove('hide');
            });
        }

        const buttonHandler = (e) => {
            /**@type {HTMLElement} */
            const target = e.target;
            if (!target.classList.contains('filter__button')) return;
            const type = target.dataset.type;
            target.classList.add('active');
            [...buttons.children].forEach(button => {
                if (button !== target) button.classList.remove('active');
            });
            cardsHandler(type);
        }

        buttons.addEventListener('click', buttonHandler);
    }

    filters.forEach(item => filterHandler(item));
}

filter('.filter__wrapper')