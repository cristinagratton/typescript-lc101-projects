"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronuats = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var cargoMass = 0;
        for (var i = 0; i < this.cargoItems.length; i++) {
            cargoMass += this.cargoItems[i].massKg;
        }
        return cargoMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var totalMass;
        totalMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronuats);
        return totalMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronuats.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
