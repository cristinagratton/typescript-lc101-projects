import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronuats: Astronaut[] = [];

    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    } 

    sumMass ( items: Payload[] ): number {
        let cargoMass: number = 0;
        for (let i = 0; i < this.cargoItems.length; i++) {
            cargoMass += this.cargoItems[i].massKg;
        }
        return cargoMass;
    } 

    currentMassKg (): number {
        let totalMass: number;
        totalMass = this.sumMass(this.cargoItems) + this.sumMass(this.astronuats);
        return totalMass;
    }

    canAdd(item: Payload): boolean {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronuats.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}