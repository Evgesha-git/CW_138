const tabs = (selector) => {
    const tabsContainer = document.querySelectorAll(selector);
    if (!tabsContainer) return;

    const tabsHandler = (container) => {
        const tabButtons = container.querySelector(".tabs");
        const contents = container.querySelector(".contents");
        if (!tabButtons || !contents) return;

        const contentHandler = (index) => {
            [...contents.children].forEach(content => {
                const contentId = content.dataset.content;
                if (contentId === index) content.classList.add('active');
                else content.classList.remove('active');
            });
        }

        const buttonHandler = (event) => {
            const target = event.target;
            if (!target.classList.contains("tab")) return;
            if (target.classList.contains("active")) return;
            const index = target.dataset.tab
            target.classList.add('active');
            [...tabButtons.children].forEach(button => {
                if (button !== target) button.classList.remove('active');
            });
            contentHandler(index);
        };

        tabButtons.addEventListener("click", buttonHandler);
    };

    tabsContainer.forEach((item) => tabsHandler(item));
};

tabs(".tabs-container");
