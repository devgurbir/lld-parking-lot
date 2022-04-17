// parking lot
    // floors
        // max limit
        // parking spots
            // different types of vehicles
    // tickets

// vehicles
    // type
    // slotsNeeded
    // registrationNumber
    // color


// create a parking lot
// addFloors()
// doesFloorExist()
// addParkingSlot() -> to a floor

// for a vehicle, find the first available slot, book it, creates a ticket, parks the vehicle,
// and finally returns the ticket.

// parkVehicle(vehicle)
    // findSlot()
    // bookSlot()
    // createTicket() 

// unParkVehicle(ticket_id)

// freeSlotsForType(type, floor)
// numberOfFreeSlotsForType(type, floor)
// occupiedSlotsForType(type, floor)

// Slots
    // Type


// details
    // Each type of slot can park a specific type of vehicle.
    // No other vehicle should be allowed by the system.
    // Finding the first available slot should be based on:
    // Slot should be of a particular type
    // The slot should be on the lowest possible floor in the parking lot.
    // The slot should have the lowest possible slot number on the floor.
    // We will assume that the first slot on each floor will be for a truck, 
    // the next 2 for bikes, and all the other slots for cars.

    // Details about the Tickets:
        // <parking_lot_id>_<floor_no>_<slot_no>
        // Example: PR1234_2_5 (denotes 5th slot of 2nd floor of parking lot PR1234)
        // 








