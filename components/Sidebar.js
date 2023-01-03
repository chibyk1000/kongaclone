import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { FaBars, FaUsers, FaCartPlus } from "react-icons/fa";
import {CgProfile} from 'react-icons/cg'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {setCollapse} from '../store/userSlice'

import Link from "next/link";

const Sidebar = () => {
  
  const dispatch = useDispatch()
const {collapse} = useSelector((state)=> state.appSlice)

  return (
    <Disclosure as="nav" defaultOpen  >
  
      <Disclosure.Button className="absolute  top-4 right-4 inline-flex items-center peer rounded-md p-2 text-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-900 " onClick={()=>dispatch(setCollapse(!collapse))}>
        <FaBars className="block  h-6 w-6" aria-hidden="true" />
      </Disclosure.Button>

      <Disclosure.Panel>
        <div className="p-6 z-20 h-screen md:block  bg-black w-1/2 top-0  lg:w-60 fixed lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-l-zinc-200 pb-4 w-full">
              Admin Dashboard
            </h1>

            <div className="my-4  pb-4">
              <div className="flex mb-5 justify-start bg-gray-900  items-start gap-4 px-5 hover:bg-rose-600 p-2  rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                <MdOutlineSpaceDashboard className="text-rose-600 text-2xl group-hover:text-white" />
                <h3 className="text-base text-rose-600 group-hover:text-white font-semibold">
                  <Link href="/admin/dashboard">
                    <a>
                      

                  Dashboard
                  </a>
                  </Link>
                </h3>
              </div>
              <div className="flex mb-5 justify-start bg-gray-900  items-start gap-4 px-5 hover:bg-rose-600 p-2  rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                <FaUsers className="text-rose-600 text-2xl group-hover:text-white" />
                <h3 className="text-base text-rose-600 group-hover:text-white font-semibold">
                   <Link href="/admin/dashboard">
                    <a>

                  Profile
                    </a>
                    </Link>
                </h3>
              </div>
              <div className="flex mb-5 justify-start bg-gray-900  items-start gap-4 px-5 hover:bg-rose-600 p-2  rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                <FaCartPlus className="text-rose-600 text-2xl group-hover:text-white" />
                <h3 className="text-base text-rose-600 group-hover:text-white font-semibold">
                   <Link href="/admin/products/add">
                    <a>

                  Add Product
                    </a>
                    </Link>
                </h3>
              </div>
              <div className="flex mb-5 justify-start bg-gray-900  items-start gap-4 px-5 hover:bg-rose-600 p-2  rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                <MdOutlineSpaceDashboard className="text-rose-600 text-2xl group-hover:text-white" />
                <h3 className="text-base text-rose-600 group-hover:text-white font-semibold">
                   <Link href="/admin/dashboard">
                    <a>

                  Manage users
                    </a>
                    </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure.Panel>
    
      
    </Disclosure>
  );
};

export default Sidebar;
