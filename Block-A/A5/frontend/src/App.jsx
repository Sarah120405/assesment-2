import { useEffect, useState } from "react";
import "./App.css";
import BikeList from "./components/BikeList";

export const data = [
  { id: 1, name: "City Cruiser", category: "Standard", price: 200, stock: 6 },
  { id: 2, name: "Mountain X", category: "Sports", price: 350, stock: 0 },
  { id: 3, name: "E-Bike", category: "Electric", price: 500, stock: 3 },
  { id: 4, name: "Kids Bike", category: "Standard", price: 120, stock: 5 },
  { id: 5, name: "Road Racer", category: "Sports", price: 400, stock: 2 },
];

function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle("Bike Rental");
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <BikeList bike={data} />
    </>
  );
}

export default App;
