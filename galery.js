const galery = (selector) => {
    const galerys = document.querySelectorAll(selector);
    if (!galerys) return;

    const galeryHandler = (container) => {
        const mins = container.querySelector('.mins');
        const view = container.querySelector('.view-contaner');
        if (!mins || !view) return;
        const close = view.querySelector('.close');
        const img = view.querySelector('.img').children[0];


        const viewController = (href) => {
            view.classList.add('active');
            img.src = href;
        }

        close.addEventListener('click', () => {
            view.classList.remove('active');
            img.src = '';
        });

        const minHandler = (event) => {
            /**@type {HTMLElement} */
            let target = event.target;
            event.preventDefault();
            if (target.parentElement.tagName === 'A'){
                target = target.parentElement;
            }
            const href = target.href;
            viewController(href);
        }

        mins.addEventListener('click', minHandler);
    };

    galerys.forEach(item => galeryHandler(item));
};

galery(".galery");
