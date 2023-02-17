import Image from "next/image";
import React from "react";
import { FiHome, FiShoppingCart } from "react-icons/fi";
import { FaBars, FaSearch } from "react-icons/fa";

import {AiOutlineClose} from 'react-icons/ai'
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {

  const [collapse, setCollapse] = useState(true)

  return (

      <header className="py-2 block md:hidden sticky top-0 bg-white z-30 ">
        <nav className=" flex justify-between h-10 px-2 items-center">
        <div className="flex gap-2">
          {collapse ? 
          
          <button className="outline-none" onClick={() => setCollapse(false)}>
           
              <FaBars />
            </button> :
            
            <button className="outline-none"  onClick={()=>setCollapse(true)}><AiOutlineClose size={24}/></button>

        }
            <Image src="/konga.webp" width={100} height={30} />
          </div>
        <div className="flex gap-2">
          <Link href='/'>

          <FiHome className="text-gray-600" />
          </Link>
          
          <Link href='/cart/overview'>
            <FiShoppingCart className="text-gray-600" />
          </Link>
          </div>
      </nav>
      
      <div className="relative">

        <form className="flex justify-center ">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
            className="bg-gray-300 w-10/12 placeholder:text-[.8rem] pl-2 rounded-l-md"
          />
          <button className="bg-[#FBA100] text-[#ed017f] px-2 rounded-r-md">
            <FaSearch />
          </button>
        </form>
        <nav
          className={`mt-2 bg-white py-2 px-2 absolute -top-2 left-0 w-full ${
            collapse ? "hidden" : "block"
          }`}
        >
          <div className="flex justify-between gap-2 ">
            <button className="text-[#ed017f] border border-[#ed017f] w-1/2 rounded">
              Login
            </button>
            <button className="text-[#ed017f] border-[#ed017f] rounded w-1/2 border">
              Signup
            </button>
          </div>
          <ul>
            <li>
              <Link href="/products">
                <a className="border block py-2 mt-2 text-[#ed017f] pl-2">
                  See all products
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      </header>

  );
};

export default MobileNav;
