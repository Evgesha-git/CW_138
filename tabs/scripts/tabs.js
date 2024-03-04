/**
 *
 * @param {string} selector
 */
const tabs = (selector) => {
    const wrappers = document.querySelectorAll(selector);
    if (!wrappers) return;

    /**
     *
     * @param {HTMLElement} container
     */
    const tabHandler = (container) => {
        const buttons = container.querySelector(".tabs__buttons");
        const content = container.querySelector(".tabs__contents");

        const addButtonHandler = (button) => {
            const contentItem = document.createElement('div');
            contentItem.classList.add('tabs__content');
            const newButton = document.createElement('div');
            newButton.classList.add('tabs__button');
            newButton.innerHTML = `Tab ${buttons.children.length}`;
            contentItem.innerHTML = prompt('Введите содержимое вкладки');
            buttons.insertBefore(newButton, button);
            content.append(contentItem);
        }

        const switchContent = (index) => {
            content.style.transform = `translateX(-${index * 100}%)`;
            [...content.children].forEach((item, i) => {
                if (i === index) item.classList.add('active');
                else item.classList.remove('active');
            })
        };

        const buttonsHandler = (e) => {
            /**@type {HTMLElement} */
            const target = e.target;

            if (!target.classList.contains("add")) {
                [...buttons.children].forEach((item, i) => {
                    if (item === target) {
                        switchContent(i);
                        item.classList.add("active");
                    } else {
                        item.classList.remove('active');
                    }
                });
            } else {
                addButtonHandler(target);
            }
        };

        buttons.addEventListener('click', buttonsHandler);
    };

    wrappers.forEach((item) => tabHandler(item));
};

tabs(".tabs__wrapper");
