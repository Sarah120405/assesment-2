import { EventEmitter } from "events";

const bikeEmitter = new EventEmitter();

bikeEmitter.on("bikeAdded", (bike) => {
  console.log("New bike added:", bike);
});

bikeEmitter.emit("bikeAdded", { id: 6, name: "Speedster", category: "Sports" });
