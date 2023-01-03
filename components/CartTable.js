import React from "react";
import Counter from "./counter";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
const CartTable = ({ item }) => {

 const dispatch = useDispatch() 

  return (
    <tr className=" border-t h-28 ">
      <td className="flex   py-4 px-5 align-top overflow-auto">
        <img src={item.image} alt="" className="w-20" />
        <p className="text-[.8rem]">{item.title}</p>
      </td>
      <td className="w-[10rem] align-top py-4">
        <Counter item={item} />
      </td>
      <td className="w-[10rem] align-top py-4 md:block hidden">
        <p className="font-bold">₦{new Intl.NumberFormat().format(item.price * item.quantity)}</p>
        <p className="text-sm font-bold text-gray-300">
          {item.price} x {item.quantity} items
        </p>
      </td>
      <td className="mb-4 w-[10rem] align-top py-4">
        <button
          className="text-[.8rem] text-[#94004F] block"
          onClick={() => dispatch(removeFromCart(item._id))}
        >
          Remove item
        </button>
        <button className="text-[.8rem] text-[#94004F]">Save for later</button>
      </td>
    </tr>
  );
};

export default CartTable;
