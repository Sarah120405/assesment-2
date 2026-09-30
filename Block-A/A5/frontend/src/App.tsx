import { useEffect, useState } from "react";
import "./App.css";
import BikeList from "./components/BikeList";
function App() {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle("Bike Rental");
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <BikeList />
    </>
  );
}

export default App;
