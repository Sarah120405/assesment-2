type Bike = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

type UpdateBikeDto = Partial<Pick<Bike, "price" | "stock">>;

type BikePreview = Omit<Bike, "stock">;

type BikeCardProps = {
  item: Bike;
  onSelect: (id: number) => void;
};
