/**
 * 3.装饰者模式
 * 自己想办法描述
 */
// 饮料抽象类
abstract class MyBeverage {
    abstract name:string;
    abstract description:string;
    abstract basePrice:number;
    abstract priceRange:Array<number>;
    public components:Array<MyComponent>;
    public size:number; // 0,1,2 小中大 
    constructor(){
        // 默认中杯
        this.size = 1;
        this.components = []
    }
    addComponent(component:MyComponent){
        this.components.push(component);
    }
    removeComponent(component:MyComponent):Boolean {
        let index = this.components.indexOf(component);
        if (index>-1) {
            this.components.splice(index,1)
            return true
        } else {
            return false
        }
    }
    setSize(size:number){
        this.size = size
    }
    getSize(){
        return this.size
    }
    calculateCost(){
        let beveragePrice = this.priceRange[this.size];
        let componentsPrice = 0;
        this.components.forEach((item:MyComponent)=>{
            componentsPrice+=item.getCost(this.getSize())
        })
        return beveragePrice+componentsPrice
    }
    showALl(){
        console.log('name',this.name)
        console.log('description',this.description)
        console.log('size',this.getSize())
        console.log('price',this.calculateCost())
    }
}

class DarkCoffee extends MyBeverage {
    public name:string;
    public description:string;
    public basePrice:number;
    public priceRange:Array<number>;
    constructor(){
        super()
        this.name = "Dark Coffee"
        this.description = "a coffee what is so black"
        this.basePrice = 4
        this.priceRange = [3,4,6]
    }
}


// 配料抽象类
abstract class MyComponent {
    abstract basePrice:number;
    abstract priceRange:Array<number>;
    constructor(){

    }
    getCost(size:number){
        return this.priceRange[size]
    }
}

class MyMilk extends MyComponent {
    public priceRange:Array<number>;
    public basePrice:number;
    constructor(){
        super()
        this.basePrice = 0.5
        this.priceRange = [0.3,0.5,0.7]
    }
}

class MySoy extends MyComponent {
    public priceRange:Array<number>;
    public basePrice:number;
    constructor(){
        super()
        this.basePrice = 0.2
        this.priceRange = [0.1,0.2,0.3]
    }
}
let milk = new MyMilk()
let soy = new MySoy()
let darkCoffee = new DarkCoffee()
darkCoffee.setSize(2)
darkCoffee.addComponent(milk)
darkCoffee.addComponent(milk)
darkCoffee.addComponent(soy)
darkCoffee.showALl()