import mongoose from "mongoose";

const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
        user_id: {
          type: mongoose.Types.ObjectId,
            ref: "User",
            requred: true
        },
        items: {
          type: Object
        },
        payment_confirmed: {
            type: Boolean,
            default:false
        }
  },
  {
    timestamps: true,
  }
);

let CartModel =
  mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default CartModel;
