// 2.观察者模式
/**
 * 鉴于观察者模式有“推”和“拉”2种模式，这里实现推模式，也就是，直接将数据推给观察者，更加实时
 */
// 定义一个气象中心
class WeatherCenter {
    public temperature:number;
    public humidity:number;
    public pressure:number;
    public observers:ObservsersContainer;
    constructor(){
        this.temperature = -1000;
        this.humidity = -1000;
        this.pressure = -1000;
        this.observers=new ObservsersContainer()
    }
    registerOb(ob:ObBoard){
        this.observers.add(ob)
    }
    removeOb(ob:ObBoard){
        this.observers.remove(ob)
    }
    notifyOb(){
        this.observers.notify(this.temperature,this.humidity,this.pressure);
    }
    setDatas(temperature:number,humidity:number,pressure:number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyOb()
    }
}

class ObservsersContainer {
    public servers:Array<ObBoard>;
    constructor(){
        this.servers =[]
    }
    add(ob:ObBoard){
        // 不允许重复订阅
        let index = this.servers.indexOf(ob);
        if (index===-1) {
            this.servers.push(ob)
        }
    }
    remove(ob:ObBoard) {
        let index = this.servers.indexOf(ob);
        if (index>-1) {
            this.servers.splice(index,1);
        }
    }
    notify(temperature:number,humidity:number,pressure:number){
        this.servers.forEach(item=>{
            item.update(temperature,humidity,pressure)
        })
    }
}

interface DisplayBoard {
    display():void;
}

interface ObBoard {
    update(temperature:number,humidity:number,pressure:number):void; 
    register():void;
    quit():void;
}
// 实现布告板类，这里将数据中心直接从构造函数中
class Billboard implements ObBoard,DisplayBoard {
    public temperature:number;
    public humidity:number;
    public pressure:number;
    public name:string;
    public weatherCenter:WeatherCenter
    constructor(name:string,weatherCenter:WeatherCenter){
        this.name = name;
        this.temperature = -1000;
        this.humidity = -1000;
        this.pressure = -1000;
        this.weatherCenter = weatherCenter;
        this.register()
    }
    register(){
        this.weatherCenter.registerOb(this)
    }
    quit(){
        this.weatherCenter.removeOb(this)
    }
    display(){
        if (this.temperature>-1000) {
            console.log(`-----This is a ${this.name} board-----`)
            console.log(`The temperature is ${this.temperature}.`)
            console.log(`The humidity is ${this.humidity}.`)
            console.log(`The pressure is ${this.pressure}.`)
            console.log('----------------------------------------')
        } else {
            console.log(`-----This is a ${this.name} board-----`)
            console.log(`no data`)
            console.log('----------------------------------------')
        }
        
    }
    update(temperature:number,humidity:number,pressure:number){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display()
    }
}

// 我们来实现一些细节

let weatherCenter = new WeatherCenter();

// 当前
let currentBoard = new Billboard('Current',weatherCenter);
let statisticsBoard = new Billboard('Statistics',weatherCenter);
let forecastBoard = new Billboard('Forecast',weatherCenter);

console.log('-1-')
weatherCenter.setDatas(24,12,80);
console.log('-2-')
weatherCenter.setDatas(25,13,70);
console.log('-3-')
weatherCenter.setDatas(21,18,90);