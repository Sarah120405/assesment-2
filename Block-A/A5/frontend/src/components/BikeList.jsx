export default function BikeList(bike) {
  return (
    <>
      <ul>
        {bike.map((item) => {
          return (
            <li>
              <p>{item.name}</p>
              <p>{item.cateory}</p>
              <p>Rs {item.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
