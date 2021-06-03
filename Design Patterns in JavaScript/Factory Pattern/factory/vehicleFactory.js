let commuterCar = require('../model/commuterCar')
let racingCar = require('../model/racingCar')
let heavyTruck = require('../model/heavyTruck')


module.exports = class VehicleFactory{
    createVehicle(type){
        switch (type.toString().toLowerCase()){
            case "racing car":
                return new racingCar("Lamborghini", "Sián FKP 37", "770HP", "$3,700,000",
                    "V12, 60°, MPI (Multi Point Injection)")
            case "commuter Car":
                return new commuterCar("Toyota", "Prius", "XLE", "5", "Automatic",
                    "Hybrid")
            case "truck":
                return new heavyTruck("Volvo", "VNL-860", "13,000-18,000 lbs", "7 by 7 inch Sleeper, and " +
                    "Separate Space",)
        }
    }
}
