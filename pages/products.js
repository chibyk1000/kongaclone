
import { dividerClasses, Skeleton } from "@mui/material";
import { useGetProductsQuery } from "../store/api";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCartAfterRefresh } from "../store/cartSlice";
import { useEffect, useState } from "react";
const Products = () => {
   const dispatch = useDispatch();

  


    const { data, isLoading, error } = useGetProductsQuery()

    if (isLoading) {
        return (
            <div className="grid grid-cols-3 h-[100vh] items-center">
                <section>


            <Skeleton
              height={20}
              variant="rectangle"
              width={400}
              animation="wave"
            />
            <Skeleton
              height={300}
              variant="rectangle"
              width={400}
              animation="pulse"
              className="mt-4"
            />
                </section>
          </div>
        );
  }

    return ( 

        <div className="bg-slate-300 py-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 w-[80%] mx-auto gap-6">

            {
                data?.map((product) => {
                    
                    return (
                        <div key={product._id} className="bg-white p-2 h-[25rem] ">
                            <Link href={`/product/${product.title}`} >
                                <a >
                                    

                        <div className="bg-white grid grid-rows-product  h-[90%]">
                          <section className="h-full mb-3 grid">
                                <Image
                                  
                              src={product.image[0]}
                                  alt=""
                                  width="100"
                                  height="100"
                                  
                                  className="mx-auto block"
                                
                            />
                          </section>
                          <section className="pt-2">
                            <div className="leading-10">
                              <p className=" font-bold">
                                {product.title.substring(0, 27)} ...
                              </p>
                              <p className="border-y">
                                ₦{" "}
                                {new Intl.NumberFormat().format(product.price)}
                              </p>
                            </div>
                          </section>
                        </div>
                            </a>
                            </Link>
                        <button className=" text-[#ed017f] border-[#ed017f] border-solid border p-1 w-full hover:bg-[#ed017f] hover:text-white " onClick={()=> dispatch(addToCart(product))}>
                          Add to Cart{" "}
                        </button>
                      </div>
                    );
                })
}

        </div>
        </div>

     );
}
 
export default Products;