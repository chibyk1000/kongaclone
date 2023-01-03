import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserDataQuery } from '../../store/userApiSlice'
import { IoLocationOutline } from "react-icons/io5";
import { useState } from 'react'
import CartTable from '../../components/CartTable'
import { useSelector, useDispatch } from 'react-redux'
import { updateCartAfterRefresh } from '../../store/cartSlice'
import { Accordion, AccordionDetails, AccordionSummary,  Checkbox, Divider } from '@mui/material'
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'
const Complete = () => {
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch()
useEffect(() => {
  const cartData = JSON.parse(localStorage.getItem("cart"));

  if (cartData && cart.length === 0) {
    dispatch(updateCartAfterRefresh(cartData));
  }
}, []);


    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    };
useEffect(() => {
  if (cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}, [cart]);
    const { data, isLoading, error, isError } = useGetUserDataQuery()
    const [checked,  setChecked] = useState(false)
    const router = useRouter()
    useEffect(() => {   
        if (isError) {
            
                router.push("/account/login?return_url=/checkout/complete-order");
                return
            
            }
            
        },[data])
        

    return (
      <div className="bg-gray-200 min-h-screen px-[5rem] pt-6">
        <nav className="flex items-center justify-between w-[54%]">
          <Link href="/">
            <a>
              <Image src="/konga.webp" alt="" width="100%" height="40rem" />
            </a>
          </Link>
          <p className="text-center font-sans font-bold text-[1.4rem]">
            Checkout
          </p>
        </nav>

        <div className="grid grid-cols-cart justify-between ">
          <div className=" ">
            <section className="bg-white p-4">
              <div className="border-b pb-2">
                <p className="flex text-[.8rem] font-sans font-semibold gap-2">
                  {" "}
                  <img src="/delivery.svg" alt="" />
                  Delivery / Pickup Options
                </p>
              </div>
              <div className="grid grid-cols-2 text-[.8rem] gap-3 p-2 ">
                <section className=" border text-gray-600  ">
                  <header className="flex justify-between p-2 border-b">
                    <p className="font-sans font-bold text-gray-400">
                      Deliver to me
                    </p>
                    <button className="text-[#ed017f] border border-[#ed017f] font-sans  px-2 py-1 font-semibold">
                      Select Pickup Address
                    </button>
                  </header>

                  <div className="p-2">
                    <div className="flex font-sans gap-2 ">
                      <IoLocationOutline className="text-[#f0c580] text-[1.1rem] " />
                      <p className="font-sans">
                        Hi chibuike, Click on Add Address to specify a delivery
                        address.
                      </p>
                    </div>

                    <div className="bg-gray-200  text-[.72rem] p-2 mt-10">
                      <p className="font-sans">
                        Your item should be delivered to you in about 5 working
                        days within Lagos &amp; Abuja, and 7 to 14 days outside
                        Lagos &amp; Abuja.
                      </p>
                    </div>
                  </div>
                </section>
                <section className=" border text-gray-600 ">
                  <header className="flex justify-between p-2 border-b">
                    <p className="font-sans font-bold text-gray-400">
                      Pickup from a Store
                    </p>
                    <button className="text-[#ed017f] border border-[#ed017f] font-sans  px-2 py-1 font-semibold">
                      Select Pickup Address
                    </button>
                  </header>

                  <div className="p-2">
                    <div className="flex font-sans gap-2 ">
                      <IoLocationOutline className="text-[#f0c580] text-[1.1rem] " />
                      <p className="font-sans">
                        Select a pickup location in your area from our 33
                        locations nationwide.
                      </p>
                    </div>

                    <div className="bg-gray-200  text-[.72rem] p-2 mt-10">
                      <p className="font-sans">
                        Pickup items from a Konga Store that is convenient for
                        you. Save some amount on delivery charges.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <div>
                <button onClick={() => setChecked(!checked)}>
                  <input
                    type="checkbox"
                    className="accent-[#ED017F]"
                    defaultChecked={checked}
                    onChange={(event) => (event.target.checked = checked)}
                  />
                  Check this box if you have any instruction regarding this
                  order
                </button>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  className={`w-full caret-[#ED017F] focus:outline-[#ED017F] focus:border-[.7px] resize-none placeholder:text-[.8rem] font-sans p-1 
                ${!checked && "hidden"}`}
                  placeholder="(If you want to add comment e.g delivery instruction)"
                ></textarea>
              </div>
            </section>

            <div className="bg-white  my-3">
              <div className="border-b p-2  ">
                <p className="flex text-[.8rem] font-sans font-semibold gap-2">
                  {" "}
                  <img src="/review.svg" alt="" />
                  Review Order
                </p>
              </div>

              <table className="w-full max-h-0">
                <thead className="bg-slate-300 text-gray-800 ">
                  <tr>
                    <th className="text-left">Item Details </th>
                    <th className="text-left">Quantity</th>
                    <th className="text-left">Item Price</th>
                    <th className="text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-left ">
                  {cart.map((item) => {
                    return <CartTable item={item} key={item._id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white">
            <div className="border-b p-2">
              <p className="flex text-[.8rem] font-sans font-semibold gap-2">
                {" "}
                <img src="/review.svg" alt="" />
                Review Order
              </p>
            </div>

            <div>
              <Accordion style={{ boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className="font-bold text-[.8rem] font-sans text-gray-700">
                    Add a Voucher / Gift Card
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <form action="" className="flex gap-2">
                    <input
                      type="text"
                      className="w-10/12 outline-none border pl-2 py-1"
                    />
                    <button className="border-[#ED017F] text-[#ED017F] px-2 font-semibold border  text-[.8rem]">
                      Apply
                    </button>
                  </form>
                </AccordionDetails>
              </Accordion>
            </div>
            <Divider />

            <div className=" flex items-center justify-between px-2">
              <p className="font-bold text-1 2rem">Pay Now</p>

              <Checkbox
                color="success"
                checkedIcon={<CheckCircle />}
                icon={
                  <RadioButtonUnchecked
                    color="success"
                    style={{ color: "green" }}
                  />
                }
              />
            </div>
            <div className=" flex items-center justify-between px-2">
              <p className="font-bold text-1 2rem">Buy Now Pay Later</p>

              <Checkbox
                color="success"
                checkedIcon={<CheckCircle />}
                icon={
                  <RadioButtonUnchecked
                    color="success"
                    style={{ color: "green" }}
                  />
                }
              />
            </div>
            <Divider />
            <div className="flex justify-between font-bold p-2">
              <p>Total: </p>
              <p>{getTotalPrice()}</p>
            </div>
            <Divider />
            <Link href="/checkout/payment">
              <a className="bg-[#33B27B] w-full  block text-center  py-1 text-[.9rem] text-white ">
               Pay Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Complete

Complete.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
