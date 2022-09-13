import Head from "next/head";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"
import { BsBag, BsWallet2 } from "react-icons/bs";
import {TbTruckDelivery} from 'react-icons/tb'
const Profile = () => {
    return (
      <>
        <Head>
          <title>profile</title>
        </Head>
        <main className="bg-[#F2F2F2] pb-7">
          <div className="bg-white pl-20 leading-6 py-6 mb-7">
            <ul className="flex  items-center ">
              <li>
                <Link href="">
                  <a className="text-[.7rem] flex items-center">
                    Home <FaAngleRight color="#c5c5c5" />
                  </a>
                </Link>
              </li>

              <li>
                <Link href="">
                  <a className="text-[.7rem] flex items-center">
                    My Account <FaAngleRight color="#c5c5c5" />
                  </a>
                </Link>
              </li>

              <li>
                <Link href="">
                  <a className="text-[.7rem] flex items-center">My Profile</a>
                </Link>
              </li>
            </ul>
            <h1 className="font-bold text-4xl">Account Information</h1>
          </div>
          <section className="grid grid-cols-profile gap-4 justify-center ">
            <aside className="px-3 bg-white h-fit pb-20 ">
              <div className="flex border-b mb-5 pt-5">
                <CgProfile size="2rem" className="mr-4 " />
                <div className="leading-8">
                  <h1 className="font-bold">My Profile</h1>
                  <Link href="">
                    <a className="text-[#BC3478] font-bold text-[.8rem] ">
                      Account Information
                    </a>
                  </Link>
                  <p className="text-[.75rem]">Delivery Address</p>
                </div>
              </div>
              <div className="flex border-b">
                <BsBag size="2rem" className="mr-4 " />
                <div className="leading-8">
                  <h1 className="font-bold">My Orders</h1>
                  <Link href="">
                    <a className="text-[.8rem] block ">Order History</a>
                  </Link>
                  <a className="text-[.75rem]    items-center">
                    Pending Ratings
                  </a>{" "}
                  <span className="text-white bg-black inline rounded-full w-[14px] h-[10px] text-sm  p-1 text-center">
                    0
                  </span>
                </div>
              </div>
              <div className="flex border-b pt-5">
                <BsWallet2 size="2rem" className="mr-4 " />
                <div className="leading-8">
                  <h1 className="font-bold">My Wallet</h1>
                  <Link href="">
                    <a className=" text-[.8rem] ">Wallet</a>
                  </Link>
                  {/* <p className="text-[.75rem]">Delivery Address</p> */}
                </div>
              </div>
              <div className="flex pt-5">
                <TbTruckDelivery size="2rem" className="mr-4 " />
                <div className="leading-8">
                  <h1 className="font-bold">Konga Prime</h1>
                  <Link href="">
                    <a className="  text-[.8rem] ">All Plans</a>
                  </Link>
                  <p className="text-[.75rem]">Active Prime Plans</p>
                </div>
              </div>
            </aside>
            <section className="bg-white pb-5">
              <header className="border-b pt-5 pl-5 pb-3 ">
                <h2 className="text-[#555] font-sans font-bold ">
                  Account Information
                </h2>
              </header>

              <div className="px-7">
                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">
                    First Name
                  </p>
                  <input
                    type="text"
                    className="outline-none border w-full block py-2 border-[#ccc] placeholder:text-sm rounded-sm pl-4"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">Last Name</p>
                  <input
                    type="text"
                    className="outline-none border w-full block py-2 border-[#ccc] placeholder:text-sm rounded-sm pl-4"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">
                    Email Address
                  </p>
                  <input
                    type="text"
                    className="outline-none border w-full block py-2 border-[#ccc] placeholder:text-sm rounded-sm pl-4"
                    placeholder="Enter Email Address"
                  />
                </div>

                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">
                    Current Password
                  </p>
                  <div className="flex border  border-[#ccc] py-2 px-4 ">
                    <input
                      type="password"
                      className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    />
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">
                    New Password
                  </p>
                  <div className="flex border  border-[#ccc] py-2 px-4 ">
                    <input
                      type="password"
                      className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    />
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-[0.74rem] font-semibold mb-2">
                    Confirm Password
                  </p>
                  <div className="flex border  border-[#ccc] py-2 px-4 ">
                    <input
                      type="password"
                      className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    />
                  </div>
                </div>

                <button className="bg-[#33B27B] text-white font-bold py-2 block w-full">
                  Save Changes
                </button>
              </div>
            </section>
          </section>
        </main>
      </>
    );
}
 
export default Profile;