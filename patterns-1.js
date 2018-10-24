"use strict";
/**
 * 1.欢迎来到设计模式
 * 莫名其妙的鸭子们
 */
// 有一个父类 Duck
class Duck {
    constructor(name) {
        this.name = name;
    }
    quack() {
        console.log('Gua Gua Gua');
    }
    swim() { }
    display() {
        console.log(`It is a duck called ${this.name}`);
    }
}
let duck = new Duck('Donkey');
duck.quack();
duck.display();
