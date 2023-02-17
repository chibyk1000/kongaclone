import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import EmptyCart from "./EmptyCart";
import CartCard from "./CartCard";

const CartSidbar = ({ collapse, setCollapse, data }) => {
  const cart = useSelector((state) => state.cartSlice);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      router.push("/account/login");
    }

    router.push("/cart/overview");
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * (item.discount_price>0?item.discount_price:item.price),
      0
    );
  };


  return (
    <>
      <section
        className={`fixed z-[99]  left-0 top-0 bg-[#111111e2] w-full h-full ${
          collapse ? "hidden" : "block "
        }`}
      >
        <form
          className={`w-[30%] h-full z-20 right-0 fixed top-0 bg-white ${
            collapse ? "" : "move"
          }`}
          onSubmit={handleSubmit}
        >
          <header className="shadow-md flex justify-between h-16 items-center px-2">
            <h3 className="font-bold text-[1.5rem]">Cart Overview</h3>
            <button
              className="border text-[.75rem] p-2 text-gray-500"
              onClick={() => setCollapse(true)}
            >
              x Close
            </button>
          </header>

          {/* <EmptyCart /> */}
          {cart.length < 1 ? (
            <EmptyCart />
          ) : (
            cart.map((item) => {
              return <CartCard item={item} key={item._id} />;
            })
          )}
          <div className="fixed w-[30%] bottom-0 h-20     shadow-2xl shadow-slate-700 p-4">
            <div className="flex justify-between">
              <p className="font-bold text-xl">Subtotal</p>
              <p className="font-bold text-xl">       ₦{new Intl.NumberFormat().format(getTotalPrice())}</p>
            </div>

            <button
              className={`${
                cart.length < 1 ? "bg-gray-300" : "bg-[#33B27B]"
              }  w-full mx-auto block text-white text-[.9rem]py-2`}
              disabled={cart.length < 1 && true}
              type="submit"
            >
              Checkout
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CartSidbar;
