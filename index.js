window.addEventListener("load", () => {
    // load DOMContentLoaded
    console.log("Документ загружен");
    const root = document.getElementById("root");
    const root2 = document.querySelector("#root");

    // console.log(root);
    // console.log(root2);

    const items = document.getElementsByClassName("item");
    const items2 = document.querySelectorAll(".item");

    // console.log(items);
    // console.log(items2);

    // for(let key in items){
    //     console.log(items[key]);
    // }

    // items2.forEach(item => {
    //     console.log(item);
    // })

    // console.log(window.history);

    /**
     * textNode - не имеют потомком
     * elementNode - может иметь потомков (теги)
     */

    /**
     * Методы для поиска
     * getElementById
     * getElementsByTagName
     * getElementsByClassName
     * getElementsByName
     * querySelector
     * querySelectorAll
     * closest
     */

    const child = document.querySelector(".child2");

    console.log(child.closest(".child3"));

    items2.forEach((item) => {
        // item.style.fontSize = '40px';
        item.style.cssText = `
        font-size: 26px;
        color: blue;
    `;
        item.classList.add("new-class");
    });

    /**
     * Методы classList
     * add - добавление имени класса
     * remove - удаление имени класса
     * toggle - если нет переданного имени класса - то добавляет, иначе - удаляет
     * contain - проверка на наичие класса
     */

    const newItems = [...items].filter((item) => !item.classList.contains("note"));
    console.log(newItems);

    /**
     * get/set
     * innerText - позволяет работать только с текстовым содержимым
     * innerHTML - позволяет работать с любым содержимым (HTML)
     */

    /**
     * Навигация по DOM дереву
     * children - потомки-элементы
     * childNode - все потомки
     * firstChild - первый потомок (в.т.ч. и текстовый узел)
     * firstElementChild - первый потомок элемент
     * lastChild
     * lastElementChild
     * parentNode - родитель
     * parentElement - родитель
     * nextSibling - следуюший соседний узел
     * nextElementSibling - следующий соседний элемент
     * previousSibling
     * previousElementSibling
     */

    const link1 = document.links[0].parentElement;
    const link2 = document.links[1].parentElement;

    console.log(link1.innerText);
    console.log(link2.innerHTML);

    link1.innerText = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cum.</p>`;
    link2.innerHTML += `<a href=""><img src="https://via.placeholder.com/120" alt="" /></a>`;

    // document.body.innerHTML = '';

    const p = document.createElement("p");
    p.classList.add("item");
    p.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eligendi.`;
    p.setAttribute("data-test", "2h342k5");
    p.style.cssText = `
        font-size: 40px;
        text-transform: uppercase;
    `;

    root.insertBefore(p, document.getElementById("item1"));

    const hiden = document.querySelector(".hiden").children[0].cloneNode(true);

    root.insertBefore(hiden, p);

    hiden.remove();

    /**
     * append - добавить несколько дочерних элементов
     * appendChild - добавить один дочерний элемент
     * inserBefore - добавить дочерний жлемент перед другим (item.insertBefore(newElement, refElement))
     * cloneNode - копировать элемент
     * removeChild - удалить потомка
     */

    /**
     * @typedef TProps
     * @type {object}
     * @property {string} tagName
     * @property {string[]} classes
     * @property {(string | HTMLElement)} content
     * @typedef TAtributes
     * @type {object}
     * @property {TAtributes[]} atributes
     * @param { TProps } props
     * @returns {HTMLElement}
     */

    const createElement = (props) => {
        // {tagName, classes, content, atributes: [{attr, text}]}
        
        const elem = document.createElement(props.tagName);
        if (props.classes && props.classes.length) {
            props.classes.forEach((className) => elem.classList.add(className));
        }
        if (props.content) {
            if (typeof props.content === "string") {
                elem.innerHTML = props.content;
            } else {
                elem.append(props.content);
            }
        }
        if (props.atributes) {
            props.atributes.forEach((atribute) => elem.setAttribute(atribute.attr, atribute.text));
        }

        return elem;
    };

    const newElem = createElement({ tagName: "p", classes: ["test1", "test2", "test3"], content: p, atributes: [{ attr: "data-text", text: "24k5h32" }] });
    document.body.append(newElem);
});
