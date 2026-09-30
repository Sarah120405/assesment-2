/* 
  Create class Bike with constructor(id, name, price) and a method discountedPrice(pct).
  Create class ElectricBike extends Bike with an extra field batteryKm. Override discountedPrice so it calls super.discountedPrice(pct) and takes a further 5% off.
  Instantiate one of each from the first item in data.js and log both prices. In one comment: where is discountedPrice stored — on the instance or the prototype? discountedPrice is stored on the prototype, not on each instance.
*/

import { data } from "./data.js";

class Bike {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  discountedPrice(pct) {
    return this.price - (this.price * pct) / 100;
  }
}

class ElectricBike extends Bike {
  constructor(id, name, price, batteryKm) {
    super(id, name, price);
    this.batteryKm = batteryKm;
  }

  discountedPrice(pct) {
    const baseDiscount = super.discountedPrice(pct);
    return baseDiscount - (baseDiscount * 5) / 100;
  }
}

const firstBike = data[0];

const standardBike = new Bike(firstBike.id, firstBike.name, firstBike.price);
const electricBike = new ElectricBike(
  firstBike.id,
  firstBike.name,
  firstBike.price,
  120,
);

console.log("Standard bike:", standardBike.discountedPrice(10), "Rs");
console.log("Electric bike:", electricBike.discountedPrice(10), "Rs");
