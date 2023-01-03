import React from "react";
import Counter from "./counter";
import {
    useDispatch
} from "react-redux";

import { removeFromCart } from "../store/cartSlice";
const CartCard = ({ item }) => {

    const dispatch = useDispatch()
  return (
    <div className="border-t">
      <div className="px-3">
        <div className="flex items-center gap-4 py-2 border-b mb-1">
          <section className="w-2/12">
            <img src={item.image} alt="" className="w-full" />
          </section>
          <section className="text-gray-700 font-bold">
            <p className="font-bold ">{item.title}</p>
            <p className="text-[.9rem]">₦ {item.price * item.quantity}</p>
          </section>
        </div>

      </div>
        <div className="flex justify-between  p-3">
          <Counter item={item} />

          <div className="flex gap-3">
            <button className="border text-slate-600 text-[.8rem] px-2 hover:text-[#ed017f] hover:border-[#ed017f] transition-all duration-700 ease-in-out">
              Save for later
            </button>
            <button className="border text-slate-600 text-[.8rem] px-2 hover:text-[#ed017f] hover:border-[#ed017f] transition-all duration-700 ease-in-out" onClick={()=>dispatch(removeFromCart(item))}>
              Remove item
            </button>
          </div>
        </div>
    </div>
  );
};

export default CartCard;
