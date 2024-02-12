const formateDate = (date) => {
    const dateExp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g;
    return date.replace(dateExp, "$3/$2/$1");
};

const parceUrl = (url) => {
    const regExp = /(https?:\/\/[0-9]?[a-z][a-z0-9]+(?:\.[a-z0-9]+)\.[a-z]{2,11})(\/.+\/(?:[^\?\s])+)?(\?[^#]+)?(#\w+)?/gi;
    let group = regExp.exec(url);
    return [...group].filter((item, index) => (index !== 0 ? item : null));
};

let arr = [1, 2, 3];

const lamp = {
    status: false,
    // power: 60,
    voltage: 220,
    toggle: function () {
        this.status = !this.status;
        console.log(this);
        return this.status ? "Лампа включена" : "Лампа выключена";
    },
};

Object.defineProperty(lamp, "power", {
    // value: 60,
    // writable: false,
    enumerable: false,
    configurable: true,
    get: function () {
        return power;
    },
    set: (val) => {
        if (val > 0) {
            power = val;
        }
    },
});

function Lamp(power, voltage, cost) {
    this.status = false;
    this.cost = cost; //цена за время работ в часах
    this.time = 0;
    this.timerId = null;
    // this._power = power;
    // this._voltage = voltage;
    // let self = this;

    this.toogle = function () {
        this.status = !this.status;
        if (!this.status){
            clearInterval(this.timerId);
        } else {
            this.timer();
        }
        return this.status ? "Лампа включена" : "Лампа выключена";
    };

    this.timer = () => {
        this.timerId = setInterval(() => {
            this.time += 1;
        }, 1000);
    }

    this.getCost = () => {
        return this.cost * (parseFloat(this.power) * (this.time / 3600));
    }

    this.info = function () {
        return `Статус: ${this.status}, мощьность: ${this.power}, напряжение: ${this.voltage}, порачено денег на работу лампы: ${this.getCost()}`;
    };

    // this.getPower = function () {
    //     return power;
    // };

    // this.setPower = function (val) {
    //     if (val > 0) {
    //         power = val;
    //     }
    //     return this;
    // };

    // this.getVoltage = function () {
    //     return voltage;
    // };

    // this.setVoltage = function (val) {
    //     if (val > 0) {
    //         voltage = val;
    //     }
    //     return this;
    // };

    // this.test = function () {
    //     console.log(this);
    //     setTimeout(privateMethod, 3000);
    // };
    
    Object.defineProperties(this, {
        power:{
            enumerable: false,
            configurable: false,
            set: (val) => {
                if (val > 0){
                    power = val;
                }
            },
            get: () => `${power}W`
        },
        voltage: {
            enumerable: false,
            configurable: false,
            set: (val) => {
                if (val > 0) {
                    voltage = val
                }
            },
            get: () => `${voltage}V`
        }
    });

    // function privateMethod() {
    //     console.log(self.getPower());
    // }

    // const privateMethod = () => {
    //     console.log(this.getPower());
    // };

    Lamp.counter++;
}

// class Lamp2 {
//     constructor(power, voltage){
//         this.status = false;
//         this._power = power;
//         this._voltage = voltage;
//     }

//     set power (val){
//         this._power = val;
//     }

//     get power() {
//         return this._power;
//     }
// }

Lamp.counter = 0;
Lamp.getCounter = function () {
    return Lamp.counter;
};

const lamp40 = new Lamp(40, 220, 1);
const lamp10 = new Lamp(10, 220, 1);
const lamp100 = new Lamp(100, 220, 1);
const lamp4000 = new Lamp(4000, 220, 1);
const lamp80 = new Lamp(80, 220, 1);

// ('string').split('').reverse().join(' ').toUpperCase();


/**
 * status: boolean
 * evalCode: string
 * result: number
 * setEvalCode: (str: string) => void
 * getResult: () => void
 * show: () => number
 */

/**
 * status: boolean
 * a: number
 * b: number
 * op: string
 * result: number
 * setEvalCode: (a, b, op) => void
 * getResult: () => void
 * show: () => number 
 */