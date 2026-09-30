import Link from "next/link";

export default async function BikeDetail({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/bikes/${id}`, {
    next: { revalidate: 60 },
  });
  const bike = await res.json();
  if (!bike) {
    return (
      <div style={{ padding: "24px" }}>
        <h2>Bike not found</h2>
        <Link href="/bike">Back to bikes</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px", maxWidth: "700px", margin: "0 auto" }}>
      <Link href="/bike">← Back to bikes</Link>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          background: "#f9fafb",
        }}
      >
        <h1>{bike.name}</h1>
        <p>
          <strong>Category:</strong> {bike.category}
        </p>
        <p>
          <strong>Price:</strong> Rs {bike.price}
        </p>
        <p>
          <strong>Stock:</strong> {bike.stock}
        </p>
      </div>
    </div>
  );
}
