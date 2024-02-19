const but1 = document.getElementById("b1");
const but2 = document.getElementById("b2");
const item = document.querySelector(".item");
let timerId = null;

const timer = () => {
    if (item.innerHTML === "") {
        item.innerHTML = 0;
    } else {
        item.innerHTML = +item.innerHTML + 1;
    }
    timerId = setTimeout(() => timer(), 1000);
};

const handler = function () {
    timerId = setTimeout(() => timer(), 1000);
    console.log(timerId);
};

but1.onclick = handler;

but2.addEventListener("click", function () {
    if (timerId) clearTimeout(timerId);
});
// but2.addEventListener("click", () => {
//     console.log(this);
// });
// but2.addEventListener("click", function () {
//     console.log(this);
// });

// window.addEventListener('beforeunload', () => {
//     alert('')
// });

// but2.removeEventListener('click', )

/**
 * Типы событий
 * Мыши - click, dblclick, onwhell, contextmenu, mouseover, mousedown, mouseup, mousemove
 * Клавиатуры - keyup, keydown, keypress
 * DOM - load, DOMContentLoaded, resize, error, beforeunload/unload
 * Форм и элеметов управления - blur, change, focus, invalid, select, submit, input
 * события CSS
 * Drag and drop
 * События буфера обмена
 * медиа события
 */

document.querySelector("input").addEventListener("focus", () => {
    console.log("Элемент в фокусе");
});
document.querySelector("input").addEventListener("blur", () => {
    console.log("Элемент потерял фокус");
});

document.querySelector("input").addEventListener("change", () => {
    console.log(document.querySelector("input").value);
});

const input = document.querySelector("input");

input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
});

input.addEventListener("invalid", () => {
    console.log("Статус инвалид");
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Валидация формы");
});

document.body.addEventListener("click", (event) => {
    console.log(`X: ${event.pageX}, Y: ${event.pageY}`);
    console.log(`X: ${event.clientX}, Y: ${event.clientY}`);
});

const createTooltip = () => {
    const item = document.createElement("div");
    item.style.cssText = `
        width: 400px;
        height: 200px;
        border: 1px solid;
        position: absolute;
        background: #fff;
    `;
    item.innerHTML = `
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, corporis?</p>
        <p>Minima voluptatibus fugit ducimus in magni nam voluptates accusamus minus.</p>
        <p>Repudiandae in hic consequuntur cum quos sequi, earum laborum atque.</p>
    `;
    return item;
};

const testTooltip = () => {
    let item = null;
    const tooltipItem = document.querySelector(".tooltip");
    const height = window.innerHeight;

    tooltipItem.addEventListener("mouseover", (event) => {
        item = createTooltip();
        let pos = event.clientY + 220;
        // console.log(pos, event.clientY, item);
        if (pos < height) {
            item.style.top = `20px`;
            tooltipItem.append(item);
        } else {
            item.style.bottom = `20px`;
            tooltipItem.append(item);
        }
    });

    tooltipItem.addEventListener("mouseleave", () => {
        if (item) {
            item.remove();
        }
    });
};

testTooltip();

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

item1.addEventListener('click', () => {
    alert('Погружение item1');
}, true);
item1.addEventListener('click', () => {
    alert('Всплытие item1');
});
item2.addEventListener('click', (event) => {
    // event.stopPropagation();
    alert('Погружение item2');
}, true);
item2.addEventListener('click', (event) => {
    // event.stopPropagation();
    alert('Всплытие item2');
});
item3.addEventListener('click', () => {
    alert('Погружение item3');
}, true);
item3.addEventListener('click', () => {
    alert('Всплытие item3');
});