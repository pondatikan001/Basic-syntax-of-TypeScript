class Car{
    model : String;
    doors: Number;
    isAWD: Boolean;

    constructor(model: String, doors: Number, isAWD: Boolean){
        this.model = model;
        this.doors = doors;
        this.isAWD = isAWD
    }

    displayDetail(): void{
        console.log(`This car is ${this.model} with ${this.doors} and AWD function is ${this.isAWD}`)
        
    }
}

const car1 = new Car ("Accourd",4, true);
car1.displayDetail();
