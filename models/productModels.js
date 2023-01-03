import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product_code: {
      type: Number,
      required: true,
      unique: true,
    },

    discount_price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
    },
    image: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

let ProductModel =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default ProductModel;
