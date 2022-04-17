import { Car, Bus, Bike } from "./vehicle.mjs";

class Slot {
    #isBooked;
    
    constructor(type, number){
        this.number = number
        this.type = type;
        this.#isBooked = false;
    }

    get isBooked(){
        return this.#isBooked
    }

    set book(bool){
        this.#isBooked = bool;
    }
}

class ParkingFloor {
    #floorNumber;
    #maxLimit;
    #parkingSpots;

    constructor(floorNumber, maxLimit){
        this.#floorNumber = floorNumber;
        this.#maxLimit = maxLimit
        this.#parkingSpots = [];

        for(let i = 1; i<=maxLimit; i++){
            if( i == 1){
                this.#parkingSpots.push(new Slot('Truck', i))
            }
            else if(i == 2 || i == 3) {
                this.#parkingSpots.push(new Slot('Bike', i))
            }
            else {
                this.#parkingSpots.push(new Slot('Car', i))
            }
        }
    }

    get floorNumber(){
        return this.#floorNumber
    }

    get maxLimit(){
        return this.#maxLimit
    }

    get displayAllSlots(){
        return this.#parkingSpots
    }

    allBooked(type){
        if(type == 'Truck'){
            return this.#parkingSpots[0]?.isBooked
        }

        if(type == 'Bike'){
            return this.#parkingSpots[1]?.isBooked && this.#parkingSpots[2]?.isBooked
        }

        if(type == 'Car'){
            for(let i = 3; i<this.#parkingSpots.length; i++){
                if(!this.#parkingSpots[i].isBooked) return false

                return true;
            }
        }
    }
}

class Ticket {
    #parkingLotID;
    #floorNumber;
    #slotNumber;

    constructor(parkingLotID, floorNumber, slotNumber){
        this.#parkingLotID = parkingLotID
        this.#floorNumber = floorNumber
        this.#slotNumber = slotNumber
        this.issuedAt = new Date();
        // this.#vehicleType = vehicleType
        // this.perHourRate = {'Bike': 10, 'Car': 20, 'Bus': 50}
    }

    get id(){
        return `${this.#parkingLotID}_${this.#floorNumber}_${this.#slotNumber}`
    }

    pay(){
        let currentTime = new Date();
        let totalTime = currentTime - this.issuedAt;
        console.log('Parking ticket cost: Rs ', (totalTime/1000) * 1)
        return (totalTime/1000) * 1
    }

}

class ParkingLot {
    #id;
    #floors;
    #numberOfFloors

    constructor(id, floors, floorLimit){
        this.#id = id;
        this.#floors = {};
        this.#numberOfFloors = floors;

        for(let i = 1; i<=floors; i++){
            this.#floors[i] = new ParkingFloor(i, floorLimit[i-1])
        }
    }

    get numberOfFloors(){
        return this.#numberOfFloors
    }

    get id(){
        return this.#id;
    }

    get floors(){
        return this.#floors
    }

    findSlot(type){
        for(let i = 1; i<=this.#numberOfFloors; i++){
            if(this.#floors[i].allBooked(type)){
                console.log(`Floor ${i} is all booked`)
                continue;
            }

            console.log(`Checking floor ${i}`)

            for(let slot of this.#floors[i].displayAllSlots){
                if(slot.type == type && !slot.isBooked){
                    return {floorNumber: i, slot: slot}
                }
            }
        }

        return false
    }

    bookSlot(slot){
        slot.slot.book = true
        console.log('Booked slot: ' ,slot)
        return true;
    }

    issueTicket(floorNumber, slotNumber){
        let parkingLotID = this.#id;
        let ticket = new Ticket(parkingLotID, floorNumber, slotNumber);
        console.log("Issued", ticket.id, " at ", ticket.issuedAt);
        return ticket
    }

    parkVehicle(vehicle){
        let slot = this.findSlot(vehicle.type);
        if(!slot){
            console.log("All slots full")
            return false;
        }

        this.bookSlot(slot);
        // console.log("Slot booked", slot)
    
        let ticket = this.issueTicket(slot.floorNumber, slot.slot.number)
        // console.log("Here is your ticket:");
        // console.log(ticket); 

        return ticket

    }

    pay(ticket){
        ticket.pay();
    }

}

let p1 = new ParkingLot('PR123', 3, [1, 3, 5]);

let car1 = new Car("CAR-1", 'red')
let bike1 = new Bike("BIKE-1", 'black')
let bus1 = new Bus("Bus-1", 'multi')

let ticket1 = p1.parkVehicle(bike1);

setTimeout( () => p1.pay(ticket1), 5000 )

