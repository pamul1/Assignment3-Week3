export class Vehicle {
    constructor(make , model, year){
        this.make = make
        this.model = model
        this.year = year
    }    
}
export class Car extends Vehicle {

    constructor(make , model, year, doors){
        super(make, model, year)
        this.doors = doors
    }    

}

export class Motorcycle extends Vehicle {

    constructor(make, model, year, type){

        super(make, model, year)
        this.type = type

    }

}