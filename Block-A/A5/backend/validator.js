import { z } from "zod";

export const bikeSchema = z.object({
  name: z.string().min(2),
  category: z.string().min(1),
  price: z.number().positive("Price must be a positive number").max(2000),
  stock: z.number().int().min(0, "Stock must be >= 0"),
});
