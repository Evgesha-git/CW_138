const accordeon = (selector) => {
    const containers = document.querySelectorAll(selector);
    if (!containers) return;

    const accordeonHendler = (container) => {
        const clickHendler = (event) => {
            /**@type {HTMLElement} */
            let target = event.target;
            if (!target.classList.contains("accordeon__title")) {
                target = target.closest(".accordeon__title");
            }

            if (!target) return;

            [...container.children].forEach((item) => {
                const title = item.querySelector(".accordeon__title");
                const nextElement = title.nextElementSibling;
                const h = nextElement.scrollHeight;
                if (title === target) {
                    title.classList.toggle("active");
                    nextElement.classList.toggle("active");
                    // if (nextElement.style.height === '')
                    // nextElement.style.height = `${h + 41}px`;
                    if (nextElement.classList.contains("active")) {
                        nextElement.style.height = `${h + 40}px`;
                    } else {
                        nextElement.style.height = ``;
                    }
                } else {
                    title.classList.remove("active");
                    nextElement.classList.remove("active");
                    nextElement.style.height = ``;
                }
            });

            // target.classList.toggle("active");
            // const nextElement = target.nextElementSibling;
            // const h = nextElement.scrollHeight;
            // nextElement.classList.toggle("active");
            // if (nextElement.classList.contains("active")) {
            //     nextElement.style.height = `${h + 40}px`;
            // } else {
            //     nextElement.style.height = ``;
            // }
        };

        container.addEventListener("click", clickHendler);
    };

    containers.forEach((item) => accordeonHendler(item));
};

accordeon(".accordeon__container");
