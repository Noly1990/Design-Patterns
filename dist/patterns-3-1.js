"use strict";
/**
 * 3.装饰者模式
 * 采用书中所描述的方式
 */
// 首先，先建立一个Beverage基类，作为所有饮料的基础，不需要实例化的话就做成抽象类
class Beverage {
    constructor() {
        this.description = "base beverage";
        this.components = [];
    }
    showDescription() {
        console.log("--This is a coffee-----");
        console.log(this.description);
        let price = this.cost();
        console.log(`--It cost $${price}--`);
        console.log("-----------------------");
    }
}
// 模拟一个焦炒咖啡
class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }
    cost() {
        return 1;
    }
}
// 模拟一个美式
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso Coffee";
    }
    cost() {
        return 0.75;
    }
}
// 配料的基类
class Component extends Beverage {
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
class Milk extends Component {
    constructor(beverage) {
        super(beverage);
        this.description = this.beverage.description + ', Milk';
    }
    cost() {
        return this.beverage.cost() + 0.25;
    }
}
class Soy extends Component {
    constructor(beverage) {
        super(beverage);
        this.description = this.beverage.description + ', Soy';
    }
    cost() {
        return this.beverage.cost() + 0.15;
    }
}
let espresso1 = new Espresso();
espresso1 = new Milk(espresso1);
espresso1 = new Soy(espresso1);
espresso1.showDescription();
