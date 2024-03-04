const tooltips = (selector) => {
    const tooltip = document.querySelectorAll(selector);
    if (!tooltip) return;

    /** @param {HTMLElement} item */
    const tooltipHandler = (item) => {
        const tooltipItem = document.createElement("div");
        tooltipItem.classList.add("tooltip__item");
        const title = {
            text: "",
        };

        const addTooltip = (e) => {
            /**@type {HTMLElement} */
            let target = e.target;
            if (!target.classList.contains("tooltip")) {
                target = target.closest(".tooltip");
            }

            title.text = target.title;
            target.title = "";

            tooltipItem.innerText = title.text;

            target.append(tooltipItem);
        };

        const removeTooltip = (e) => {
            /**@type {HTMLElement} */
            let target = e.target;
            if (!target.classList.contains("tooltip")) {
                target = target.closest(".tooltip");
            }

            target.title = title.text;
            title.text = "";
            tooltip.innerText = '';
            tooltipItem.remove();
        };

        item.addEventListener("mouseenter", addTooltip);
        item.addEventListener("mouseleave", removeTooltip);
    };

    tooltip.forEach((item) => tooltipHandler(item));
};

tooltips(".tooltip");
