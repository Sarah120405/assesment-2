import { Router } from "express";
import { bikeSchema } from "./validator.js";
import { Logging } from "./logging.middleware.js";

const router = Router();

const bikes = [
  { id: 1, name: "City Cruiser", category: "Standard", price: 200, stock: 6 },
  { id: 2, name: "Mountain X", category: "Sports", price: 350, stock: 0 },
  { id: 3, name: "E-Bike", category: "Electric", price: 500, stock: 3 },
  { id: 4, name: "Kids Bike", category: "Standard", price: 120, stock: 5 },
  { id: 5, name: "Road Racer", category: "Sports", price: 400, stock: 2 },
];

let nextId = bikes.length + 1;

router.get("/bikes", Logging, (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.json(bikes);
  }

  const filteredBikes = bikes.filter(
    (bike) => bike.category.toLowerCase() === String(category).toLowerCase(),
  );

  return res.json(filteredBikes);
});

router.get("/bikes/:id", (req, res) => {
  const bikeId = Number(req.params.id);
  const bike = bikes.find((item) => item.id === bikeId);

  if (!bike) {
    return res.status(404).json({ error: "Bike not found" });
  }

  return res.json(bike);
});

router.post("/bikes", (req, res) => {
  const validationResult = bikeSchema.safeParse(req.body);

  if (!validationResult.success) {
    return res.status(400).json({
      error: validationResult.error.issues.map((issue) => issue.message),
    });
  }

  const newBike = {
    id: nextId++,
    ...validationResult.data,
  };

  bikes.push(newBike);

  return res.status(201).json(newBike);
});

export default router;
