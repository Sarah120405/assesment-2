import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    category: {
      type: String,
      enum: ["Standard", "Sports", "Electric"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true },
);

bikeSchema.index({ category: 1, price: -1 });

const Bike = mongoose.model("Bike", bikeSchema);

const totalStockValueByCategory = await Bike.aggregate([
  {
    $group: {
      _id: "$category",
      totalStockValue: {
        $sum: { $multiply: ["$price", "$stock"] },
      },
    },
  },
  { $sort: { totalStockValue: -1 } },
  { $limit: 2 },
]);

const inStockPremiumBikes = await Bike.find({
  stock: { $gt: 0 },
  price: { $gte: 300 },
})
  .sort({ price: -1 })
  .limit(3);

module.exports = Bike;
