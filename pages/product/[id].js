import Link from "next/link";
import { FaAngleRight, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import Counter from "../../components/counter";
import ProductSlider from "../../components/ProductSlider";
import { useRouter } from "next/router";
import { useGetProductQuery } from "../../store/api";
import { Skeleton } from "@mui/material";
import {useSelector, useDispatch} from 'react-redux'
const Product = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartSlice)
  // console.log(cart)
  const { data, isLoading, error } = useGetProductQuery(id)
  

  const itemExists = cart.find((item) => item?.title === id);
  
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

      <section className="grid grid-cols-2 w-[90%] gap-3 p-10 m-auto bg-white items-center">
        <section className="h-[60%]">
          <ProductSlider img={data.image} />
        </section>
        <section>
          <div className="border-b p-2">
            <h2 className="font-semibold text-3xl ">{data.title}</h2>
            <p className="text-[#B5B5A8] text-[.8rem] my-3">
              Product Code:{" "}
              <span className="font-bold text-black">{data.product_code}</span>{" "}
            </p>
            <p className="text-[#B5B5A8] text-[.8rem] ">
              Brand:{" "}
              <Link href="">
                <a className="text-blue-900 font-bold"> {data.brand}</a>
              </Link>{" "}
            </p>
          </div>
          <div className="p-3 py-5 border-b">
            <span className="font-bold text-[1.4rem] mr-5">
              ₦
              {data.discount_price || data.discount_price != 0
                ? new Intl.NumberFormat().format(data.discount_price)
                : new Intl.NumberFormat().format(data.price)}
            </span>
            <span className="line-through text-gray-400 text-[1rem]">
              
              {data.discount_price >0
                ? '₦' + new Intl.NumberFormat().format(data.price)
                : ""}
            </span>

            {data.discount_price ? (
              <span className="text-[#33B27B] ml-5 font-bold text-[.8rem]">
                You save ₦{data.price - data.discount_price}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="p-3 border-b py-5">
            <Counter item={itemExists} data={data} />
            <p className="text-[#B5B5A8] text-[.8rem]">
              Call us for bulk purchases:
            </p>
            <p className="font-bold text-[.8rem]">
              Click here to show phone number
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 items-center border-b py-5 p-3 ">
            <button className="bg-[#33B27B] text-white font-bold py-2 block w-full">
              Buy Now
            </button>
            <div className="flex items-center">
              <button className="bg-[#9B9B9B] rounded-full p-2 mr-4">
                <AiFillHeart size={20} fill="white" />
              </button>
              <span className="text-[.7rem] text-[#9b9b9b]">
                Save For Later
              </span>
            </div>
          </div>
          <div className="bg-[#f8f8f8] flex items-center p-2">
            <img src="/rectangle_81.webp" alt="" />
            <Link href="">
              <a className="text-[.9rem] pl-4 text-[#EA2395] underline hover:text-stone-800">
                Get free delivery on items above N4,599 in LAGOS, ABUJA &
                PORTHARCOURT
              </a>
            </Link>
          </div>

          <section className="grid grid-cols-2 gap-4 border-b py-5">
            <div className="flex text-[.8rem] font-semibold items-center gap-3">
              <svg
                height="30"
                viewBox="0 0 29 30"
                width="29"
                aria-label="pickup-label"
                className=""
                name="pickup-label"
              >
                <path
                  d="M28.92 23.38l-2.4-3.29a.96.96 0 0 0-.73-.38h-2.12V6.9h.5c.23 0 .42-.14.47-.37.04-.24-.05-.43-.23-.52L12.5.04a.63.63 0 0 0-.42 0L.24 6a.47.47 0 0 0-.23.52c.05.23.23.37.46.37h.51v16.77c0 .28.18.47.46.47h4.47v3.71c0 .28.19.47.46.47h1.06A2.14 2.14 0 0 0 9.52 30c1.02 0 1.9-.75 2.08-1.69h11.3A2.13 2.13 0 0 0 24.95 30c1.01 0 1.89-.75 2.07-1.69h1.06a.88.88 0 0 0 .88-.9v-3.8c.05 0 .05-.14-.05-.23zm-1.29-.24h-5.58v-2.49h3.78l1.8 2.5zM12.28.98l9.91 4.97H2.41L12.28.97zM1.86 23.19V6.89h20.89v12.82H22a.88.88 0 0 0-.88.9v6.8h-.87V18.5a.88.88 0 0 0-.88-.89H6.74a.88.88 0 0 0-.87.9v4.74H1.86v-.05zm4.93-4.7h12.5v8.93h-7.7a2.13 2.13 0 0 0-2.08-1.7c-1.01 0-1.89.76-2.07 1.7h-.6v-8.93h-.05zm2.72 10.62c-.7 0-1.2-.57-1.2-1.22 0-.66.55-1.22 1.2-1.22.7 0 1.2.56 1.2 1.22 0 .65-.55 1.22-1.2 1.22zm15.5 0c-.7 0-1.2-.57-1.2-1.22a1.2 1.2 0 0 1 2.4 0c0 .65-.56 1.22-1.2 1.22zm2.07-1.7A2.13 2.13 0 0 0 25 25.74c-1.01 0-1.89.75-2.07 1.69h-.88v-3.29h6.04v3.29h-1.01zm-10.6-.89c-.28 0-.47-.18-.47-.47v-6.24c0-.28.19-.47.46-.47.28 0 .46.19.46.47v6.25c0 .28-.18.47-.46.47zm-3.42 0c-.28 0-.46-.18-.46-.47v-6.24c0-.28.18-.47.46-.47s.46.19.46.47v6.25c0 .28-.18.47-.46.47zM9.65 24.7a.47.47 0 0 1-.46-.47v-4.41c0-.28.18-.47.46-.47s.46.19.46.47v4.41c0 .29-.18.47-.46.47zm3.87-8.12a.47.47 0 0 1-.46-.47V8.72c0-.28.19-.47.46-.47h7.7c.28 0 .47.2.47.47v7.38c0 .28-.19.47-.47.47h-7.7zm3.1-.94h1.56V14.5h-1.57v1.13zm-2.64-6.44v6.44h1.71v-1.6c0-.28.18-.47.46-.47h2.5c.27 0 .45.19.45.47v1.6h1.66V9.19h-6.78zm-2.9 7.38H3.33c-.28 0-.46-.19-.46-.47V8.72c0-.28.18-.47.46-.47h7.75c.27 0 .46.2.46.47v7.38c0 .28-.18.47-.46.47zm-4.66-.94H8V14.5H6.42v1.13zM3.8 9.19v6.44h1.66v-1.6c0-.28.19-.47.46-.47h2.5c.27 0 .45.19.45.47v1.6h1.71V9.19H3.8zm2.17 2.3a.47.47 0 0 1-.46-.46c0-.29.18-.47.46-.47h2.49c.28 0 .46.18.46.46 0 .29-.18.48-.46.48H5.96zm10.19 0a.47.47 0 0 1-.46-.46c0-.29.18-.47.46-.47h2.49c.28 0 .46.18.46.46 0 .29-.18.48-.46.48h-2.49z"
                  fill="#ed017f"
                ></path>
              </svg>
              <p>Pickup & Pay on Collection Available</p>
            </div>
            <div className="flex text-[.8rem] font-semibold items-center gap-3">
              <svg
                height="25"
                viewBox="0 0 21 25"
                width="21"
                aria-label="yubreak"
                className=""
                name="yubreak"
              >
                <g fill="none">
                  <path d="M8.89 1.56H12V2.6H8.9z" fill="#ed017f"></path>
                  <path
                    d="M20.34 8.85c-.72 0-1.8.25-2.6 1V1.56c0-.86-.7-1.56-1.56-1.56H4.72c-.86 0-1.56.7-1.56 1.56v6.25H1.59c-.86 0-1.56.7-1.56 1.57v1.04c0 .4.15.76.4 1.04a1.56 1.56 0 0 0-.4 1.04v1.04c0 .4.15.77.4 1.04a1.56 1.56 0 0 0-.4 1.05v1.04c0 .4.15.76.4 1.04a1.56 1.56 0 0 0-.4 1.04v1.04c0 .86.7 1.56 1.57 1.56h1.56v2.09c0 .86.7 1.56 1.56 1.56h11.46c.86 0 1.56-.7 1.56-1.56v-11.3a2.39 2.39 0 0 1 2.08-2.19v14.53h1.05V9.38a.52.52 0 0 0-.52-.53zM4.72 1.05h11.46a.52.52 0 0 1 .52.51v1.56H4.2V1.56a.52.52 0 0 1 .52-.52zM1.07 16.66v-1.05a.52.52 0 0 1 .52-.51h1.57v2.08H1.59a.52.52 0 0 1-.52-.52zm0-3.13V12.5a.52.52 0 0 1 .52-.52h1.57v2.08H1.59a.52.52 0 0 1-.52-.52zm0-4.16a.52.52 0 0 1 .52-.52h1.57v2.08H1.59a.52.52 0 0 1-.52-.52V9.38zM1.6 20.3a.52.52 0 0 1-.52-.52v-1.04a.52.52 0 0 1 .52-.52h1.57v2.08H1.59zm14.59 3.65H4.72a.52.52 0 0 1-.52-.52v-1.56h12.5v1.56a.52.52 0 0 1-.52.52zm.52-3.13H4.2V4.17h12.5v16.66z"
                    fill="#ed017f"
                  ></path>
                  <path
                    d="M3.7 6.97l6.5 2.18L8 15.1l6.9 3.1"
                    stroke="#ed017f"
                    strokeWidth="1.2"
                  ></path>
                </g>
              </svg>
              <p>Yu Break It, We Fix It</p>
            </div>
            <div className="flex text-[.8rem] font-semibold items-center gap-3">
              <svg
                height="26"
                viewBox="0 0 27 26"
                width="27"
                aria-label="warehouse"
                className=""
                name="warehouse"
              >
                <path
                  d="M2.46 25h22.08c.2 0 .35-.15.35-.34V10.19A2.32 2.32 0 0 0 26 8.22V4.85a.34.34 0 0 0-.34-.34h-.77A3.85 3.85 0 0 0 21.02 1H5.98a3.85 3.85 0 0 0-3.87 3.51h-.76a.34.34 0 0 0-.35.34v3.37c0 .8.42 1.54 1.11 1.97v14.47c0 .19.16.34.35.34zm18-.68h-4.7v-6.45a2.34 2.34 0 0 1 2.35-2.23c1.26 0 2.3.99 2.35 2.23v6.45zm3.74 0h-3.05v-6.45a3.02 3.02 0 0 0-3.04-2.9 3.02 3.02 0 0 0-3.05 2.9v6.45H2.8V10.48c.9.22 1.85-.1 2.42-.82a3.03 3.03 0 0 0 2.65 1.99 3.05 3.05 0 0 0 2.91-1.61 3.05 3.05 0 0 0 2.7 1.62 3.05 3.05 0 0 0 2.7-1.62 3.05 3.05 0 0 0 2.93 1.65 3.03 3.03 0 0 0 2.67-2.03 2.37 2.37 0 0 0 2.42.82v13.84zM5.74 5.2h4.71v3.47a2.31 2.31 0 0 1-1.15 2.08 2.39 2.39 0 0 1-2.4 0 2.31 2.31 0 0 1-1.16-2.08V5.2zm5.4 0h4.72v3.47a2.31 2.31 0 0 1-1.15 2.08 2.39 2.39 0 0 1-2.41 0 2.31 2.31 0 0 1-1.15-2.08V5.2zm5.4 0h4.72v3.47a2.31 2.31 0 0 1-1.15 2.08 2.39 2.39 0 0 1-2.41 0 2.31 2.31 0 0 1-1.15-2.08V5.2zm8.77 3.03c0 .91-.76 1.65-1.68 1.65-.93 0-1.68-.74-1.68-1.65V5.19h3.36v3.03zM5.98 1.68h15.04A3.17 3.17 0 0 1 24.2 4.5H2.8a3.17 3.17 0 0 1 3.18-2.83zM1.69 8.22V5.19h3.36v3.03c0 .91-.75 1.65-1.68 1.65S1.7 9.13 1.7 8.22zm8.6 6.67c1.14 0 2.07.91 2.07 2.04v1.6c0 1.13-.93 2.04-2.07 2.04H7.57a2.05 2.05 0 0 1-2.07-2.04v-1.6c0-1.13.93-2.04 2.07-2.04h2.72zm1.38 3.65v-1.61a1.37 1.37 0 0 0-1.38-1.36H7.57a1.37 1.37 0 0 0-1.38 1.36v1.6c0 .76.62 1.36 1.38 1.36h2.72a1.37 1.37 0 0 0 1.38-1.35z"
                  fill="#ed017f"
                  stroke="#ed017f"
                  strokeWidth=".25"
                ></path>
              </svg>
              <p>Konga Warehouse</p>
            </div>
          </section>
          <div className="flex items-center p-2">
            <p className="text-[.8rem]">Next Day Delivery Available at:</p>
            <div className="bg-[#f8f8f8] w-[75%] p-3">
              <span className="bg-[#FFDB67] rounded-3xl px-3 py-1">Lagos</span>
            </div>
          </div>
          <div>
            <p className="text-[.8rem] my-4">Share with friends</p>

            <div className="flex gap-3">
              <span className="border rounded-full p-2">
                <FaFacebookF fill="#39579A" />
              </span>
              <span className="border rounded-full p-2">
                <FaTwitter fill="#03A9F4" />
              </span>
              <span className="border rounded-full p-2">
                <RiWhatsappFill fill="#3EC850" />
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Product;
