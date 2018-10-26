"use strict";
/**
 * 1.欢迎来到设计模式（策略模式）
 * 莫名其妙的鸭子们
 */
class CanFly {
    fly() {
        console.log('this duck can fly');
    }
}
class CannotFly {
    fly() {
        console.log('this duck can not fly');
    }
}
class NormalQuack {
    quack() {
        console.log('Gua Gua Gua');
    }
}
class ZhiZhiQuack {
    quack() {
        console.log('Zhi Zhi Zhi');
    }
}
class MuteQuack {
    quack() {
        console.log('...........');
    }
}
// 有一个父类 Duck
class Duck {
    constructor(name) {
        this.name = name;
        // 默认普通鸭子会飞
        this.flyBehavior = new CanFly();
        // 默认普通鸭子会GuaGua叫
        this.quackBehavior = new NormalQuack();
    }
    quack() {
        this.quackBehavior.quack();
    }
    swim() {
        console.log('I can swim');
    }
    fly() {
        this.flyBehavior.fly();
    }
    display() {
        console.log(`It is a duck called ${this.name}`);
    }
}
// 如果父类Duck不需要实例化，则可以使用抽象类实现
class Duck1 {
    constructor(name) {
        this.name = name;
    }
    fly() {
        this.flyBehavior.fly();
    }
    quack() {
        this.quackBehavior.quack();
    }
    display() {
        console.log(`------This is a duck called ${this.name}.--------`);
        this.quack();
        this.fly();
        console.log(`-------------------------------------------------`);
    }
}
// 橡胶鸭子   不会飞    会zhizhi叫
class RubberDuck extends Duck {
    constructor(name) {
        super(name);
        this.flyBehavior = new CannotFly();
        this.quackBehavior = new ZhiZhiQuack();
    }
}
// 通过抽象类实现的rubber duck
class RubberDuck1 extends Duck1 {
    constructor(name) {
        super(name);
        this.flyBehavior = new CannotFly();
        this.quackBehavior = new ZhiZhiQuack();
    }
}
class RedheadDuck extends Duck1 {
    constructor(name) {
        super(name);
        this.flyBehavior = new CanFly();
        this.quackBehavior = new NormalQuack();
    }
}
let duck = new Duck('Donkey');
duck.display();
duck.fly();
duck.quack();
let rubberDuck = new RubberDuck('Rubber-Duck');
rubberDuck.display();
rubberDuck.fly();
rubberDuck.quack();
let rubberDuckA = new RubberDuck1('Rubber-Duck-from-ab');
rubberDuckA.display();
let redheadDuck = new RedheadDuck('Red-head-duck');
redheadDuck.display();
