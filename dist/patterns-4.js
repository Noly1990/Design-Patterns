"use strict";
/**
 * 4.工厂模式
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//
const readline_1 = __importDefault(require("readline"));
class PizzaStore {
    constructor(name) {
        this.name = name;
    }
    orderPizza() {
        let i = 1;
        let pizzaL = pizzaList.getList();
        console.log(`----Welcome to ${this.name}-----`);
        console.log(`----select pizza type-----`);
        for (let index in pizzaL) {
            console.log(`${parseInt(index) + 1}. ${pizzaL[index]}`);
            i++;
        }
        console.log(`----  please type into the number   ----`);
        const rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.write('which pizza do you want to choose?\n');
        rl.on('line', (input) => {
            rl.pause();
            let inputNum = parseInt(input);
            if (isNaN(inputNum)) {
                console.log('请输入数字');
                rl.resume();
            }
            else if (inputNum < 1 || inputNum >= i) {
                console.log('输入的数字范围不对');
                rl.resume();
            }
            else {
                console.log(`You choose :${inputNum}-${pizzaL[inputNum - 1]}`);
                let thePizza = this.createPizza(pizzaL[inputNum - 1]);
                this.cookPizza(thePizza);
            }
        });
    }
    cookPizza(pizza) {
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
    sendPizza() {
    }
}
// Pizza 基类
class Pizza {
    constructor() {
        this.name = 'pizza';
        this.cutType = 'normal';
    }
    getName() {
        console.log(`--this pizza's name is ${this.name}--`);
        return this.name;
    }
    prepare() {
        console.log(`----begin to prepare ${this.name}----`);
    }
    bake() {
        console.log('----bake it for 20 minutes------');
    }
    cut() {
        console.log(`----cut it into several ${this.cutType} pieces----`);
    }
    box() {
        console.log('----place pizza into offical box----');
    }
}
class LobsterPizza extends Pizza {
    constructor() {
        super();
        this.name = 'Lobster Pizza';
    }
}
class ExtremePizza extends Pizza {
    constructor() {
        super();
        this.name = 'Extreme Pizza';
    }
}
class FruitPizza extends Pizza {
    constructor() {
        super();
        this.name = 'Fruit Pizza';
        this.cutType = 'square';
    }
}
// 制作一个pizza清单用来管理Pizza的种类
class PizzaList {
    constructor() {
        this.pizzaMap = Object.create(null);
        this.pizzaArr = [];
    }
    addPizza(PizzaClass) {
        this.pizzaMap[PizzaClass.name] = PizzaClass;
        this.pizzaArr.push(PizzaClass);
    }
    removePizza(PizzaClass) {
        this.pizzaMap[PizzaClass.name] = null;
        let index = this.pizzaArr.indexOf(PizzaClass);
        if (index > -1)
            this.pizzaArr.splice(index, 1);
    }
    getPizza(name) {
        return this.pizzaMap[name];
    }
    getList() {
        let temp = [];
        this.pizzaArr.forEach((value, index) => {
            temp.push(value.name);
        });
        return temp;
    }
}
let pizzaList = new PizzaList();
pizzaList.addPizza(LobsterPizza);
pizzaList.addPizza(ExtremePizza);
pizzaList.addPizza(FruitPizza);
class NYPizzaStore extends PizzaStore {
    constructor(name) {
        super(name);
    }
    createPizza(type) {
        let pizzaType = pizzaList.getPizza(type);
        let pizza = new pizzaType();
        return pizza;
    }
}
class ChicagoPizzaStore extends PizzaStore {
    constructor(name) {
        super(name);
    }
    createPizza(type) {
        let pizzaType = pizzaList.getPizza(type);
        let pizza = new pizzaType();
        return pizza;
    }
}
let chicagoPizzaStore1 = new ChicagoPizzaStore('Chicago Pizza Store No.1');
chicagoPizzaStore1.orderPizza();
