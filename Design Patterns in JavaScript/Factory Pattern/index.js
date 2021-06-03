let vehicleFactory = require('./factory/vehicleFactory')

vehicleFactory = new vehicleFactory();

let vehicleOne = vehicleFactory.createVehicle("Racing Car")
console.log(vehicleOne)

let vehicleTwo = vehicleFactory.createVehicle("Truck")
console.log(vehicleTwo)
