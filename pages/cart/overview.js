import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import CartTable from "../../components/CartTable";
import EmptyCart from "../../components/EmptyCart";
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from "next/router";
import { useGetUserDataQuery } from "../../store/userApiSlice";
import Link from "next/link";
const Overview = () => {
  const cart = useSelector((state) => state.cartSlice);

  const {data, isLoading, error} = useGetUserDataQuery()
  const router = useRouter()
  const getTotalPrice = () => {
    
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="bg-gray-100 md:min-h-[60vh] py-10 overflow-y-auto">
      <button
        className="text-[#ed017f] border border-[#ed017f] md:flex hidden items-center px-3 py-2 gap-3 mb-14  ml-14 "
        onClick={() => router.back()}
      >
        <BsArrowLeftShort /> Continue Shopping
      </button>

      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <div className="grid md:grid-cols-cart  gap-10 w-11/12 mx-auto overflow-auto">
          <table className="w-full max-h-0 table-auto  md:table overflow-auto">
            <thead className="bg-slate-300 text-gray-800 ">
              <tr>
                <th className="text-left">Item Details </th>
                <th className="text-left">Quantity</th>
                <th className="text-left hidden md:block">Item Price</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-left ">
              {cart.map((item) => {
                return <CartTable item={item} key={item._id} />;
              })}
            </tbody>
          </table>

          <section className="w-full bg-white">
            <div className="flex justify-between border-b px-2 py-3 font-bold items-center">
              <p className="text-left  ">Order summary</p>
              <p className="text-right text-[.9rem]">2 items</p>
            </div>

            <div className="flex justify-between border-b px-2 py-3">
              <p className="text-left w-1/2 text-[.7rem] ">Delivery Charges:</p>
              <p className="text-[.5rem] text-right  w-2/6 ">
                Add your Delivery address at checkout to see delivery charges
              </p>
            </div>
            <div className="flex justify-between border-b px-2 py-3">
              <p className="text-left text-[.7rem]">Sub total:</p>
              <p className="text-[.7rem] text-right  pl-[10rem] font-bold">
                ₦{new Intl.NumberFormat().format(getTotalPrice())}
              </p>
            </div>
            <div className="flex justify-between border-b px-2 py-3">
              <p className="text-left text-[1rem] font-bold">Total:</p>
              <p className="text-[1rem] text-right  pl-[10rem] font-bold">
                ₦{new Intl.NumberFormat().format(getTotalPrice())}
              </p>
            </div>
            <div className=" justify-between border-b px-2 py-3">
              <p className="text-end text-[.65rem] my-1 text-[#ed017f] font-sans ">
                Excluding delivery charges
              </p>
              <Link href="/checkout/complete-order">
                <a className="bg-[#33B27B] w-full block text-center  py-1 text-[.9rem] text-white ">
                  Continue to Checkout
                </a>
              </Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Overview;
