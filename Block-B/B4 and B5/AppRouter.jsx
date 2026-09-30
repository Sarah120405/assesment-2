import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Navigate to <NavLink to="/bikes">Bikes</NavLink>
      </p>
    </div>
  );
}

function Bikes() {
  const bikes = [
    { id: 1, name: "Roadster" },
    { id: 2, name: "Mountain" },
  ];

  return (
    <div>
      <h1>Bikes</h1>
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/bikes">All Bikes</NavLink>
      </nav>
      <ul>
        {bikes.map((b) => (
          <li key={b.id}>
            <NavLink to={`/bikes/${b.id}`}>{b.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BikeDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Bike Detail</h1>
      <p>Selected bike id: {id}</p>
      <p>
        <NavLink to="/bikes">Back to Bikes</NavLink>
      </p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>
        <NavLink to="/">Go Home</NavLink>
      </p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/bikes/:id" element={<BikeDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
