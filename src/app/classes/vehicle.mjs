class Vehicle {
    #type;
    // slotsNeeded
    #registrationNumber;
    #color;
    constructor(type, registrationNumber, color){
        this.#type = type;        
        this.#registrationNumber = registrationNumber;
        this.#color = color
    }

    get type(){
        return this.#type
    }

    get registrationNumber(){
        return this.#registrationNumber
    }

    get color(){
        return this.#color
    }
}

export class Car extends Vehicle {
    constructor(registrationNumber, color){
        super('Car', registrationNumber, color);        
    }
}

export class Bike extends Vehicle {
    constructor(registrationNumber, color){
        super('Bike', registrationNumber, color);        
    }
}

export class Bus extends Vehicle {
    constructor(registrationNumber, color){
        super('Bus', registrationNumber, color);        
    }
}


