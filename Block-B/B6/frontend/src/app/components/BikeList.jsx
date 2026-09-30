"use client";
import Link from "next/link";
import { useState } from "react";

export default function BikeList({ bike = [] }) {
  const [search, setSearch] = useState("");

  const filteredBikes = bike.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bike-list-container">
      <input
        className="bike-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search by name..."
      />

      <ul className="bike-list">
        {filteredBikes.map((item) => (
          <li key={item.id} className="bike-card">
            <Link href={`/bike/${item.id}`}>
              <p className="bike-name">{item.name}</p>
              <p className="bike-category">{item.category}</p>
              <p className="bike-price">Rs {item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
