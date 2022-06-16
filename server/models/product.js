import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: String,
  category: {
    type: String,
    enum: ["watches", "home and furniture", "electronic"],
  },
  sousCategory: String,
  price: Number,
  imageUrl: String,
<<<<<<< HEAD
  stock: { type: Number, default: 1 },
=======
  stock: Number,
>>>>>>> 0583909ce76ea79e3940218c05e3db04cea54090
  description: String,
  date_added: { type: Date, default: Date.now },
});
const Product = mongoose.model("Product", productSchema);
export default Product;
