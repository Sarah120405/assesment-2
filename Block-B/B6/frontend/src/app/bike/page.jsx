import BikeList from "../components/BikeList";
/*ISR This is in ISR mode so it will automatically re fetch the data at every 60secs
  SSR to convert into ssr use:
  cache: "no-store" in place of next: { revalidate: 60 },
*/

export default async function BikesPage() {
  const res = await fetch("http://localhost:5000/bikes", {
    next: { revalidate: 60 },
  });
  const bikes = await res.json();

  return <BikeList bike={bikes} />;
}
