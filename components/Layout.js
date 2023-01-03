import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from './Login'
import { useGetUserDataQuery } from "../store/userApiSlice";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateCartAfterRefresh } from "../store/cartSlice";
import { useGetProductsQuery } from "../store/api";
import CartSidbar from "./CartSidebar";
const Layout = ({ children }) => {
  const { data,  } = useGetUserDataQuery({
    refetchOnMountOrArgChange: true,
  });
  const { isLoading } = useGetProductsQuery();
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cartSlice);
  const [collapse, setCollapse] = useState(true);
  const [collapseCart, setCollapseCart] = useState(true);
   useEffect(() => {
     const cartData = JSON.parse(localStorage.getItem("cart"));

     if (cartData && cart.length === 0) {
       dispatch(updateCartAfterRefresh(cartData));
     }
   }, []);

   useEffect(() => {
     if (cart) {
       localStorage.setItem("cart", JSON.stringify(cart));
     }
   }, [cart]);

  return (
    <>
      {isLoading? (
        <div className="grid grid-cols-3 min-h-[100vh] items-center">
          <section>
            
          <Skeleton height={20} variant="rounded" width={400} animation="wave"/>
          <Skeleton height={300} variant="rectangle" width={400} animation="pulse" className="mt-4"/>
</section>
          <section>
            
          <Skeleton height={20} variant="rounded" width={400} animation="wave"/>
          <Skeleton height={300} variant="rectangle" width={400} animation="pulse" className="mt-4"/>
</section>
          <section>
            
          <Skeleton height={20} variant="rounded" width={400} animation="wave"/>
          <Skeleton height={300} variant="rectangle" width={400} animation="pulse" className="mt-4"/>
</section>
        </div>
      ) : (
        <div>
          <div className="grid">
            <img src="/ads.webp" alt="" className="hidden md:block w-full" />
          </div>
          <Navbar setCollapse={setCollapse} setCollapseCart={setCollapseCart} />

          {children}

          <Footer />

            <Login collapse={collapse} setCollapse={setCollapse} />
            <CartSidbar collapse={collapseCart} setCollapse={setCollapseCart} data={data}/>
        </div>
      )}
    </>
  );
}

export default Layout