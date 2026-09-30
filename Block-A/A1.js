/* 	(a) Return the names of bikes priced above 300 that are still available (stock > 0).
	(b) Compute the total stock value = sum of price × stock across all items.
	(c) Find the bike with id 2 and return a NEW object with stock increased by 1 using spread. Do not mutate the original.
	(d) Destructure { name, price, ...others } from the first item and log others.
 */
import { data } from "./data.js";
console.log(Number("12px"), parseInt("12px"));

const priceFilter = data.filter((bike) => bike.price > 300 && bike.stock > 0);
console.log("Available bikes priced above 300\n", priceFilter);

const stockValue = data.reduce((acc, bike) => acc + bike.price * bike.stock, 0);
console.log("Total stock value: ", stockValue, "Rs");

const bike2 = data.find((bike) => bike.id === 2);
const updatedBike2 = { ...bike2, stock: bike2.stock + 1 };
console.log("\nOriginal stock of id 2:\n", bike2);
console.log(
  "Bike with id 2 updated without mutating original:\n",
  updatedBike2,
);

const { name, price, ...others } = data[0];
console.log("\nObject Destructuring: ", others);
