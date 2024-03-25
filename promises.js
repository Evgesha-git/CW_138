const button = document.querySelector("button");
const elem = document.querySelector(".animate");

const animate = () => {
    elem.classList.toggle("active");
    button.removeEventListener("click", animate);
    new Promise((resolve, reject) => {
        elem.addEventListener("transitionend", () => {
            resolve();
        });
        setTimeout(() => reject("Слинком медленно"), 1000);
    })
        .then(
            () => {
                button.addEventListener("click", animate);
            }
            // (err) => console.log(err)
        )
        .catch((err) => console.log(err));
};

button.addEventListener("click", animate);

const p1 = new Promise((resolve, reject) => {});

p1.then(() => new Promise())
    .catch(() => console.log())
    .then(() => new Promise())
    .catch(() => console.log());

// const f1 = async () => {
//     //...
//     return 10
// }

// f1().then((res) => console.log(res));

setTimeout(() => {
    //1
    new Promise((resolve) => {
        setTimeout(() => resolve(10), 200); //3
    }).then((res) => console.log(res));
    new Promise((resolve) => {
        setTimeout(() => resolve(20), 300); //5
    }).then((res) => console.log(res));
}, 1000);

setTimeout(() => {
    //2
    new Promise((resolve) => resolve(50)).then((res) => console.log(res));
    new Promise((resolve) => {
        setTimeout(() => resolve(30), 200); //4
    }).then((res) => console.log(res));
    new Promise((resolve) => {
        setTimeout(() => resolve(40), 300); //6
    }).then((res) => console.log(res));
}, 1000);

/**
 * setTimeout1 -> Promise1, Promise2
 * setTimeout2 -> Promise3, Promise4
 * setTimeout3
 * setTimeout4
 * setTimeout5
 * setTimeout6
 */

const f2 = async () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    get age() {
        return this._age;
    }

    set age(val) {
        if (val <= 120 && val > 0) {
            this._age = val;
        } else {
            throw new TypeError("Некорректный возраст");
        }
    }
}

const user = new User("Tom", 20);
