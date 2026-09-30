interface Bike {
  id: number;
  name: string;
  price: number;
  stock: number;
}

enum BikeStatus {
  Available,
  Rented,
  Servicing,
}

export const data = [
  { id: 1, name: "City Cruiser", category: "Standard", price: 200, stock: 6 },
  { id: 2, name: "Mountain X", category: "Sports", price: 350, stock: 0 },
  { id: 3, name: "E-Bike", category: "Electric", price: 500, stock: 3 },
  { id: 4, name: "Kids Bike", category: "Standard", price: 120, stock: 5 },
  { id: 5, name: "Road Racer", category: "Sports", price: 400, stock: 2 },
];

function findById<T extends { id: number }>(
  list: T[],
  id: number,
): T | undefined {
  const element = list.find((item) => item.id === id);
  return element;
}

console.log(findById(data, 5));

/* Using a generic function is betten that any as using of any remove type check compelety so any type can be used 
but generic funtions add type safety */
