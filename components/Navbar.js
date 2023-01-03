import Link from "next/link";
import { FaSearch, FaQuestionCircle, FaBars, FaRegHeart } from "react-icons/fa";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineShoppingCart } from "react-icons/ai";
import {GrLogout} from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { BiUser, BiWallet } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserDataQuery } from "../store/userApiSlice";
import { useState } from "react";
import { useEffect } from "react";
import MobileNav from "./MobileNav";
const Navbar = ({ setCollapse , setCollapseCart}) => {
  const { data, error, isLoading } = useGetUserDataQuery({
    refetchOnMountOrArgChange: true,
  });


 const [total, setTotal] = useState(0)
  const cart = useSelector((state) => state.cartSlice);

  const getTotal = () => {
    return cart.reduce(
      (accumulator, item) => setTotal(accumulator + item.quantity)
      
    );
  };
  useEffect(() => {

   setTotal(cart.reduce((accumulator, item) => accumulator + item.quantity, 0))
  
},[cart])


 
  const navImages1 = [
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_travels2.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/kongafood.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/kongafood.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_drinks.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/konga_health.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/k_express2.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/homepage/new_konga_groceries.png",
  ];
  const navLinks = [
    "Computer  and Accessories",
    "Phones and Tablets",
    "Electronics",
    "Konga Fashion",
    "Home and Kitchen",
    "Baby, Kids and Toys",
    "Other Categories",
  ];

  const dropDown = [
    {
      id: 1,
      icon: <BiUser className="mr-2 text-[.9rem]" />,
      text: "My Profile",
      route: '/account/profile'
    },
    {
      id: 2,
      icon: <AiOutlineCreditCard className="mr-2 text-[.9rem]" />,
      text: "My Orders",
      route: '/account/orders'
    },
    {
      id: 3,
      icon: <FaRegHeart className="mr-2 text-[.9rem]" />,
      text: "My Saved Items",
      route: '/account/saved'
    },
    {
      id: 4,
      icon: <BiWallet className="mr-2 text-[.9rem]" />,
      text: "My Wallet",
      route: '/account/wallet'
    },
    {
      id: 5,
      icon: <IoLocationOutline className="mr-2 text-[.9rem] text-[#fba100]" />,
      text: "Track My Order",
      route: '/account/order'
    },
    {
      id: 6,
      icon: <GrLogout className="mr-2 text-[.9rem]" />,
      text: "Logout",
      route: '/logout'
    },
  ];


  return (

    <>
    <MobileNav/>
    <section className="md:block hidden">
      <nav className="flex justify-center py-4 bg-[#F6F6F6]">
        <ul className="flex justify-evenly w-9/12">
          {navImages1.map((img, index) => {
            return (
              <li key={index}>
                <Link href="/">
                  <a>
                    <img src={img} alt="" className="w-[70%]" />
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="bg-[#ED017F] flex items-center justify-between px-20 h-[3.5rem]">
        <Link href="/">
          <a>
            <img
              src="https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png"
              alt=""
              className="w-[6rem]"
            />
          </a>
        </Link>
        <ul className="flex items-center justify-between w-[90%]">
          <li className="h-full">
            <Link href="/">
              <a className=" text-white hover:text-[#ed017f] hover:bg-white py-2 px-2 h-full transition-all duration-700 text-[.7rem]">
                Store Locator
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className=" text-white hover:text-[#ed017f] hover:bg-white py-2 px-2 transition-all duration-700 text-[.7rem]">
                Sell on Konga
              </a>
            </Link>
          </li>

          <li className="w-[45%]">
            <form action="" className="flex h-[2rem]">
              <input
                type="text"
                className="w-[90%] outline-none  placeholder:text-[.8rem] pl-4 rounded-tl-sm rounded-bl-sm"
                placeholder="Search for products, brands and categories..."
              />
              <button className="bg-[#FBA100] text-white px-2 rounded-tr-sm rounded-br-sm">
                <FaSearch className="text-sm" />
              </button>
            </form>
          </li>

          <li>
            <Link href="/">
              <a className="flex items-center text-white hover:text-[#ed017f] hover:bg-white py-4 px-2 text-[.7rem]">
                <FaQuestionCircle className="mr-2 text-lg " />
                Help
                <MdOutlineKeyboardArrowDown />
              </a>
            </Link>
          </li>
          {data ? (
            <li className="relative account">
             
                <p className="text-white py-4 hover:bg-white hover:text-[#ed017f] px-2 transition-all duration-500 text-[.7rem]">
                  My Account
                </p>
             

              <ul className="absolute bg-white drop-menu w-48">
                <li className="p-2 font-[600] hover:bg-[#f8f8f8] hover:text-[#ed017f]">
                  Hi Chibuike
                </li>
                {dropDown.map((link, index) => {
                  return (
                    <li
                      className={link.id === 6 ? "bg-[#fff5e3]" : ""}
                      key={index}
                    >
                      <Link href={link.route} key={link.id}>
                        <a className="text-[.78rem] hover:bg-[#f8f8f8]  hover:text-[#ed017f] flex items-center py-3 p-2">
                          {" "}
                          {link.icon}
                          {link.text}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
              <li className="text-white py-4 hover:bg-white hover:text-[#ed017f] px-2 transition-all duration-500 text-[.7rem]">
                <button onClick={() => setCollapse(false)}>
                  
              Login/Signup
                 </button>
            </li>
          )}
          <li>
            <button className="bg-[#31AC77] flex items-center py-2 w-[9rem] justify-evenly  rounded-sm text-white text-[1rem] hover:bg-[#248259] transition-all " onClick={()=>setCollapseCart(false)}>
              <AiOutlineShoppingCart />
              My Cart
              <span className="text-black bg-white px-2 rounded-[4px]">{total}</span>
            </button>
          </li>
        </ul>
      </nav>

      <nav className="bg-[#94004F] h-[2rem] flex items-center px-20">
        <ul className="flex justify-between items-center w-full m-auto">
          <li className="flex  items-center text-white hover:text-[#111] hover:bg-white transition-all duration-700 py-1 text-[0.9rem] px-2">
            All Categories <FaBars className="ml-2" />
          </li>
          {navLinks.map((items, index) => {
            return (
              <li
                key={index}
                className={`text-white text-[.7rem] hover:text-[#111] hover:bg-white py-2 px-2 transition-all duration-700 `}
              >
                <Link href="/products">
                  <a>{items}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
    </>
  );
};

export default Navbar;
