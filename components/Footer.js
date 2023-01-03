import { FaAndroid, FaApple, FaAppStore, FaFacebook, FaFacebookF, FaGooglePlay, FaInstagram, FaPhone, FaPlay, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GrAndroid, GrGooglePlay, GrMail } from "react-icons/gr";
import List from "./List";
const Footer = () => {

  const footerList1 = ["Contact Us", "About Us", "Careers", "Our Blog", "Forum", "Terms & Conditions"]
  const footerList2 = ["KongaPay", "Wallet", "Verve", "Mastercard", "Visa"]
  const footerList3 = ["Buyer Safety Centre",
"FAQs",
"Delivery",
"Konga Return Policy",
"Digital Services",
    "Bulk Purchase"]
  
  const footerList4  = ["Site Map",
"Track My Order",
"Privacy Policy",
"Authentic Items Policy"]

  return (
    <>
      <section className="bg-[#2E2E2E] hidden md:grid md:grid-cols-footer1 md:px-[4rem] justify- py-4">
        <section className="flex  mr-3">
          <div className="bg-white  rounded-[50%] md:w-8 h-8 flex justify-center items-center">
            <GrMail color="" fill="" />
          </div>
          <div className="text-[#B5B5A8] hover:text-white ml-3">
            <h3 className=" font-bold uppercase text-[.9rem] ">
              Email Support
            </h3>
            <a href="" className="md:text-[.9rem]">
              help@konga.com
            </a>
          </div>
        </section>
        <section className="flex items-center">
          <div className="bg-white rounded-[50%] md:w-8 h-8 flex justify-center items-center">
            <FaPhone color="" fill="" />
          </div>
          <div className="text-[#B5B5A8] hover:text-white ml-3">
            <h3 className=" font-bold uppercase md:text-[.9rem]">PHONE SUPPORT</h3>
            <a href="" className="text-sm">
              0708 063 5700, 0809 460 5555, 01 888 3435
            </a>
          </div>
        </section>
        <section className="flex items-center">
          <div className="bg-white rounded-[50%] md:w-8 h-8 flex justify-center items-center">
            <FaWhatsapp color="" fill="" />
          </div>
          <div className="text-[#B5B5A8] hover:text-white ml-3">
            <h3 className=" font-bold uppercase text-[.9rem]">WHATSAPP</h3>
            <a href="" className="text-sm">
              0907 0038 400, 0809 460 5555
            </a>
          </div>
        </section>
        <section className="flex items-center">
          <div className="text-[#B5B5A8] hover:text-white md:ml-3">
            <h3 className=" font-bold uppercase text-[.9rem]">
              GET LATEST DEALS
            </h3>
            <a href="" className="text-sm">
              Our best promotions sent to your inbox.
            </a>
          </div>
        </section>
        <section className="">
          <form action="" className="flex w-full">
            <input
              type="text"  
              placeholder="Email Address"
              className="py-2 lg:w-10/12 pl-2 sm:w-full sm:rounded-md md:rounded-tr-none md:rounded-br-none rounded-bl-md text-sm rounded-tl-md  outline-none"
            />
            <button className="bg-[#ED017F] hidden lg:block w-4/12 text-white  rounded-br-md rounded-tr-md text-sm">
              Subscribe
            </button>
          </form>
        </section>
      </section>
      <section className="bg-[#0C0C0C] p-10 hidden md:block">
        <div className="flex justify-between ">
          <List list={footerList1} headings="ABOUT KONGA" />
          <List list={footerList2} headings="PAYMENT" />
          <List list={footerList3} headings="BUYING ON KONGA" />
          <List list={footerList4} headings="MORE INFO" />
          <List
            list={["Become a Konga Affiliate"]}
            headings="MAKE MONEY ON KONGA"
          />

          <section>
            <div>
              <h3 className="text-[#B5B5A8] font-bold mb-4">
                DOWNLOAD & CONNECT WITH US
              </h3>
              <div className="grid grid-cols-2  gap-2">
                <button className="text-[#B5B5A8] bg-black flex items-center text-left px-5 rounded py-1">
                  <FaApple color="white" fontSize="2.5rem" />
                  <section>
                    <p className="text-[.7rem]">Download on</p>
                    <p className="font-bold">App Store</p>
                  </section>
                </button>
                <button className="text-[#B5B5A8] bg-black flex items-center text-left px-5 rounded py-1">
                  <GrAndroid color="white" fontSize="2.5rem" />
                  <section>
                    <p className="text-[.7rem]">Download on</p>
                    <p className="font-bold">App Store</p>
                  </section>
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[#B5B5A8] font-bold mb-4">CONNECT WITH US</h3>
              <div className="grid grid-cols-4 w-[80%]">
                <section className=" bg-[#333] w-fit p-4 rounded-full hover:bg-white hover-it ">
                  <FaFacebookF className="iconfa fill-white" />
                </section>
                <section className=" bg-[#333] w-fit p-4 rounded-full hover:bg-white hover-it ">
                  <FaTwitter className="icontw fill-white" />
                </section>
                <section className=" bg-[#333] w-fit p-4 rounded-full hover:bg-white hover-it ">
                  <FaInstagram className="iconin  text-white" />
                </section>
                <section className=" bg-[#333] w-fit p-4 rounded-full hover:bg-white hover-it ">
                  <FaYoutube className="iconyt fill-white" />
                </section>
              </div>
            </div>
          </section>
        </div>
        <h3 className="text-[#B5B5A8] text-[.7rem] mt-10 mb-5 decorated">
          <span>Copyright © 2022 Konga.com. All rights reserved</span>
        </h3>
      </section>
    </>
  );
};

export default Footer;
