function addSchool(schoolName:string) {
    return function(traget:any){
        traget.prototype.school = schoolName
    }
}

@addSchool('old school')
class Person {
    public name:string;
    public sex:number;
    public age:number;
    public school?:string;
    constructor(name:string,sex:number,age:number){
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
    say(){
        console.log(`I am ${this.school}, ${this.name},${this.sex},${this.age} years old.`)
    }
}

let Jack = new Person('Jack',1,12);
Jack.say()