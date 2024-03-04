
/**@param {string} selector */
const galery = (selector) => {
    const galeryContainers = document.querySelectorAll(selector);
    if (!galeryContainers) return;

    /**
     * 
     * @param {HTMLElement} contaier 
     */
    const handler = (contaier) => {
        const list = contaier.querySelector('.galery__list');
        const viewer = contaier.querySelector('.galery__view');
        const close = contaier.querySelector('.galery__close');

        const viewerHandler = (href) => {
            viewer.classList.add('active');
            const img = viewer.querySelector('img');
            img.src = href;
            viewer.style.height = img.scrollHeight + 'px'
        }

        const listHandler = (e) => {
            e.preventDefault();
            /**@type {HTMLElement} */
            const target = e.target;
            if (target.closest('.galery__item')){
                const href = target.closest('.galery__item').href;
                viewerHandler(href);
            }
        }

        list.addEventListener('click', listHandler);
        close.addEventListener('click', () => {
            viewer.classList.remove('active');
            viewer.style.height = '';
        })
    }

    galeryContainers.forEach(item => handler(item));
}

galery('.galery__wrapper')