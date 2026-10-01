// A3.js
import { fakeApi } from "./data.js";
import { data } from "./data.js";

const items = data.map((item) => ({
  id: item.id,
  name: item.name,
  category: item.category,
  price: item.price,
  stock: item.stock,
}));

const categories = [...new Set(data.map((item) => item.category))];
export async function loadDashboard() {
  try {
    const [bikes, cats] = await Promise.all([
      fakeApi(items, 500),
      fakeApi(categories, 500),
    ]);
    console.log(`${bikes.length} bikes across ${cats.length} categories`);
  } catch (err) {
    console.log(`Failed: ${err.message}`);
  }
}

loadDashboard();

async function testFailure() {
  try {
    await fakeApi(items, 500, true);
  } catch (err) {
    console.log(`Failed: ${err.message}`);
  }
}
testFailure();

async function f() {
  console.log("x");
  await null;
  console.log("y");
}
f();
console.log("z");

/*
Predicted output order for:
async function f() { console.log("x"); await null; console.log("y"); }
f();
console.log("z");

Output: x, z, y
"x" logs synchronously from callstack before the first await.
await null pauses f() and queues the rest ("y") as a microtask.
Control returns to the caller, so "z" (synchronous) logs next.
Then the microtask queue is executed, logging "y" last.
*/
