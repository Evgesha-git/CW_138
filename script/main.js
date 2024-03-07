function Transpoort(wheels, pasanger) {
    this.wheels = wheels;
    this.pasanger = pasanger;
    this.freePlace = 0;
    this.setFreePlace = (val) => {
        if (val <= this.pasanger) {
            this.freePlace = val;
        }
    };
    this.parentMethod = () => this.freePlace + 4;
}

function Bike(wheels, pasanger, mark, maxSpeed) {
    Transpoort.apply(this, arguments); //Transpoort.call(this, wheels, pasanger);
    this.mark = mark;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.setSpeed = (val) => {
        if (val <= this.maxSpeed) {
            this.speed = val;
        }
    };

    this.parentMethod = (val) => {
        return (this.freePlace + 4) * val;
    }
}

const bike = new Bike(2, 0, "Aist", 25);
console.log(bike);

function User(id, name, lastName, email) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    let privateTest = 1000;
    Object.defineProperties(this, {
        test: {
            enumerable: true,
            configurable: false,
            set: (val) => {
                if (val.length <= 3) {
                    test = val;
                } else {
                    throw new Error("Некорректная длинна");
                }
            },
            get: () => test,
        },
    });
    this.getTest = () => privateTest;
}

User.prototype.setName = function (name) {
    this.name = name;
};

User.prototype.setLastName = function (lastName) {
    this.lastName = lastName;
};

User.prototype.setEmail = function (email) {
    this.email = email;
};

User.prototype.testMethod = function() {
    return this.id.toUpperCase();
}

User.prototype.toString = function () {
    return `Nmae: ${this.name}, LastName: ${this.lastName}, Email: ${this.email}, Test: ${this.test}`;
}

function Admin(id, name, lastName, email) {
    //status = 0 - полный доступ, status = 3 - ограниченный доступ
    User.apply(this, arguments);
    // this.status = status;
    Object.defineProperties(this, {
        status: {
            enumerable: false,
            configurable: false,
            set: (val) => (status = val),
            get: () => status,
        },
    });

    this.testMethod = () => {
        return User.prototype.testMethod.call(this) + ' test';
    }
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.testMethod2 = function (num) {
    return User.prototype.testMethod.call(this).repeat(num); 
}

Admin.prototype.toString = function () {
    return `${User.prototype.toString.call(this)}, Status: ${this.status}`;
}

function AutorizateUser(id, name, lastName, email, status) {
    User.apply(this, arguments);
    this.status = status;
}

const user = new User("324g5jk34", "Alex", "Petrov", "apetr@test.com");
try {
    user.test = "qwe";
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Около бесполезный блок");
}
const admin_1 = new Admin("324g5jk34", "Alex", "Petrov", "apetr@test.com");
console.log(admin_1);
admin_1.setEmail("apertov@test2.com");
console.log(admin_1);
admin_1.status = 3;

function add(a, b) {
    if (typeof a === "number" && typeof b === "number") return a + b;
    else if (typeof a === 'number') return b.repeat(a);
    else if (typeof b === 'number') return a.repeat(b);
    else return a + ' ' + b;
}

function Html(){
    /**
     * @param {string} tagName 
     * @returns {HTMLElement}
     */
    this.create = (tagName) => {
        return document.createElement(tagName);
    };
    /**
     * @param {HTMLElement} elem 
     * @param {string} name 
     * @param {string?} value 
     */
    this.attr = (elem, name, value) => {
        elem.setAttribute(name, value ? value : '');
    }
}

const $ = new Html();

const div = $.create('div');
$.attr(div, 'disable');
console.log(div);