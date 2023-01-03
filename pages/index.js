import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Deals from '../components/Deals';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from "react-redux";
import Login from '../components/Login';
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
import axios from 'axios';
import { getUser, setLoggedin } from '../store/userSlice';
import { wrapper } from '../store/store';


export default function Home() {


  const [collapse, setCollapse] = useState(true);

  const imagesKonga = [
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1641989954/contentservice/blog.png_SyDHPr23t.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/kongapay2.0.png_H1Nq1pAPO.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131724/contentservice/konga.%20prime%20copy2.0.png_ryVqJTAw_.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131733/contentservice/offline%20stores2.0.png_Hy851T0vu.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1620131725/contentservice/brand%20stores2.0.png_SJH91TCvu.png",
    "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1641989953/contentservice/travel.png_SJDSvShhK.png",
  ];

  const dealsItems = [
    {
      id: 1,
      img: "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/L/118566_1627557429.jpg",
      desc: "Philips Daily Blender Collection...",
      price: "28,870",
      prev_price: "26,743",
      save: "",
    },
    {
      id: 2,
      img: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/K/T/81824_1602447933.jpg",
      desc: "Millennial 6 In 1 Food Bundle",
      price: "11,900",
      prev_price: "10,000",
      save: "",
    },
    {
      id: 3,
      img: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/O/118566_1652796297.jpg",
      desc: `Zinox 21.5" Avid Aio Pro - Intel...`,
      price: "164,300",
      prev_price: "170,760",
      save: "6,460",
    },
    {
      id: 4,
      img: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/Y/_1645452363.png",
      desc: `Samsung Galaxy S22 Ultra - 6.8" ...`,
      price: "869,999",
      prev_price: "957,000",
      save: "87,001",
    },
    {
      id: 5,
      img: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/G/138884_1621159094.jpg",
      desc: `Sanyo  Smart Tv - 43"`,
      price: "120,000",
      prev_price: "130,000",
      save: "10,000",
    },
    {
      id: 6,
      img: "https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/E/Q/118566_1604042882.jpg",
      desc: `iTEC Handle Start, 2.5kva Power ...`,
      price: "133,420",
      prev_price: "117,400",
      save: "3,980",
    },
  ];

  const dealsHead = { h: "Todays Deal", }
  
  const categoryImg= ['/pics/laptop.webp', '/pics/phone.webp', '/pics/Health.webp', '/pics/provisions.jfif', '/pics/games.webp', '/pics/mobaccess.webp']

const recommended = [
  {
    id: 1,
    img: "/pics/recommended/1.webp",
    desc: "Infinix Smart Tv With Netflix - ...",
    price: "94,000",
    prev_price: "110,00",
    save: "16, 000",
  },
  {
    id: 2,
    img: "/pics/recommended/2.webp",
    desc: "Sony Smart Led Tv - 40''",
    price: "128,000",
    prev_price: "144,00",
    save: "16, 000",
  },
  {
    id: 3,
    img: "/pics/recommended/3.webp",
    desc: "Philips Daily Blender Collection...",
    price: "20,558",
    prev_price: "",
    save: "",
  },
  {
    id: 4,
    img: "/pics/recommended/4.webp",
    desc: "Philips Daily Blender Collection...",
    price: "24,923.08",
    prev_price: "",
    save: "",
  },
  {
    id: 5,
    img: "/pics/recommended/5.webp",
    desc: "Infinix 32'' Hd Smart Android Te...",
    price: "81,320",
    prev_price: "89,452",
    save: "8,132",
  },
  {
    id: 6,
    img: "/pics/recommended/6.webp",
    desc: "Sanyo 43 Inches Smart Tv Plus Fr...",
    price: "121,000",
    prev_price: "130,00",
    save: "9, 000",
  },
];
  
  const popular_cat = [
    {
      id: 1,
      main_img: "/popular/comp2.png",
      second_img: "/popular/computers.png",
      category: "Computer and Accessories",
      menus: ["Laptops", "Desktops and Monitors", "Computing and Accessories"],
    },

    {
      id: 2,
      main_img: "/popular/phone2.png",
      second_img: "/popular/phones-and-tablets.png",
      category: "Phones and Tablets",
      menus: ["Mobile Phones", "Mobile Phone Accessories", "Tablets"],
    },
    {
      id: 3,
      main_img: "/popular/electronics2.png",
      second_img: "/popular/electronics.png",
      category: "Electronics",
      menus: ["Televisions", "DVD Players and Recorders", "Cameras"],
    },
    {
      id: 4,
      main_img: "/popular/fashion2.png",
      second_img: "/popular/fashion.png",
      category: "Konga Fashion",
      menus: ["Women's Wear", "Women's Shoes", "Women's Accessories"],
    },
    {
      id: 5,
      main_img: "/popular/home2.png",
      second_img: "/popular/home-kitchen.png",
      category: "Home and Kitchen",
      menus: ["Large Appliances", "Small Appliances", "Home Furnishings"],
    },

    {
      id: 6,
      main_img: "/popular/toy2.png",
      second_img: "/popular/baby-kids-toys.png",
      category: "Home and Kitchen",
      menus: ["Fashion for Girls", "Fashion for Boys", "Baby Essentials"],
    },

    {
      id: 7,
      main_img: "/popular/other2.png",
      second_img: "/popular/other-categories.png",
      category: "Other Categories",
      menus: [
        "Baby, Health & Personal Care",
        "Sports and Fitness",
        "Groceries",
      ],
    },
    {
      id: 8,
      main_img: "/popular/beauty2.png",
      second_img: "/popular/beauty-hc.png",
      category: "Beauty, Health & Personal Care",
      menus: ["Makeup", "Fragrance", "Hair Centre"],
    },
    {
      id: 9,
      main_img: "/popular/sports2.png",
      second_img: "/popular/sports-and-fitness.png",
      category: "Sports and Fitness",
      menus: ["Fitness", "Outdoor & Indoor Games", "Sportswear"],
    },
    {
      id: 10,
      main_img: "/popular/auto2.png",
      second_img: "/popular/power-solutions.png",
      category: "Generator & Power Solution",
      menus: ["Generator & Accessories", "Inverters", "Ups & Surge Protectors"],
    },
  ];
  const bonus = [
    {
      id: 1,
      img: "/bonus/home.png",
      title: "Home furnishings",
      details: "Get Up To 70% Off",
    },
    {
      id: 2,
      img: "/bonus/fitness.png",
      title: "fitness tools & equipment",
      details: "Get Fitness Equipment At Amazing Discount!",
    },
    {
      id: 3,
      img: "/bonus/kids.png",
      title: "Kids wears & accessories",
      details: "Get All Kiddies Products At Huge Discounts!",
    },
    {
      id: 4,
      img: "/bonus/tv.png",
      title: "TOP DEALS ON TELEVISIONS",
      details: "Get the TV You Want With Bargain Deals!",
    },
  ];
  const brands = [
    {
      id: 1,
      img: "/brands/hp.png",
    },
    {
      id: 2,
      img: "/brands/itec.png",
    },

    {
      id: 3,
      img: "/brands/intel.png",
    },
    {
      id: 4,
      img: "/brands/barcardi.png",
    },
    {
      id: 5,
      img: "/brands/tecno.png",
    },
    {
      id: 6,
      img: "/brands/uni.png",
    },
    {
      id: 7,
      img: "/brands/philip.png",
    },
    {
      id: 8,
      img: "/brands/coke.png",
    },
    {
      id: 9,
      img: "/brands/samsung.png",
    },
    {
      id: 10,
      img: "/brands/lenovo.png",
    },
    {
      id: 11,
      img: "/brands/vivo.png",
    },
    {
      id: 12,
      img: "/brands/apc.png",
    },
  ];
  return (
    <div>
      <Head>
        <title>Konga Clone</title>
        <meta name="description" content="this is a  konga clone by codebyte" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-[#ed017f] py-5 md:px-14 px-4">
        {/* banner section starts */}
        <div className="md:grid md:grid-cols-slide md:grid-rows-2 h-10 md:h-[23rem] gap-4">
          <div className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
            <Slider />
          </div>

          <div className="hidden md:col-start-2 col-end-3">
            <img
              src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661761149/contentservice/box%20fcmb.jpg_ry-tLgcks.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1659200173/contentservice/access.gif_HkE3z1Xp5.gif"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1661771902/contentservice/product_of_the_week_360.gif_B1VKem5Jo.gif"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1659973509/contentservice/edo.gif_HypYyh0p9.gif"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        {/* banner section end */}

        {/* konga stores links */}

        <section className="my-3">
          <ul className="md:grid md:grid-cols-6 hidden gap-2 w-[99%]">
            {imagesKonga.map((image, i) => {
              return (
                <li key={i} className="bg-white rounded-[4px] p-2">
                  <Link href="">
                    <a>
                      <img src={image} alt="" className="" />
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        {/* konga stores links end*/}
        {/* Today deals */}
        <Deals
          items={dealsItems}
          header="Today's Deals"
          classProp="bg-bar"
          headerClass={"text-white"}
        />
        {/* Today deals ends */}

        {/* Categories */}
        <section className="bg-white p-2 my-5 hidden md:block">
          <ul className="grid grid-cols-6 gap-5 ">
            {categoryImg.map((img, i) => {
              return (
                <li key={i}>
                  <a href="">
                    <img src={img} alt="" className="w-full rounded-sm" />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        {/* Categories end */}

        {/* recommended */}
        <Deals
          header="Recommended for you"
          items={recommended}
          classProp="bg-white"
          headerClass={"text-black"}
        />
        {/* recommended end*/}
        {/* intel ads */}
        <a href="" className="mt-8 block">
          <img src="/pics/intel.webp" alt="" className="rounded-[5px]" />
        </a>
        {/* intel ads */}

        {/* popular catoegories */}
        <section className=" bg-white mt-4">
          <header className="popular_cat text-white h-12 pl-4 flex items-center">
            Popular Categories
          </header>
          <div className="grid md:grid-cols-5 grid-cols-small overflow-auto grid-rows-2 h-[26.5rem] gap-2 p-3">
            {popular_cat.map((items) => {
              return (
                <div
                  className="bg-white shadow-myshadow relative"
                  key={items.id}
                >
                  <section className="relative popular">
                    <img src={items.main_img} alt="" />

                    <h3 className="text-center text-sm font-bold absolute bottom-0 w-full">
                      {items.category}
                    </h3>

                    <section className=" cat absolute top-0 bg-white h-full w-full">
                      <a
                        href="
                  "
                      >
                        <header className="grid grid-cols-header">
                          <h3 className=" font-bold pl-2">{items.category}</h3>
                          <img src={items.second_img} alt="" />
                        </header>
                      </a>
                      <ul>
                        {items.menus.map((menu, index) => {
                          return (
                            <li className="" key={index}>
                              <a
                                href=""
                                className="text-sm py-3 pl-2 hover:bg-slate-300 block"
                              >
                                {menu}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </section>
                  </section>
                </div>
              );
            })}
          </div>
        </section>
        {/* popular categories */}

        {/* ads */}
        <section className="grid md:grid-cols-2 bg-white p-2 my-4">
          <a href="">
            <img src="/pics/ads2.jpg" alt="" className="rounded-sm" />
          </a>
          <a href="">
            <img src="/pics/ads.jfif" alt="" className="rounded-sm" />
          </a>
        </section>
        {/* ads */}

        {/* Bonus */}
        <section className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {bonus.map((items) => {
            return (
              <div key={items.id} className="bg-white ">
                <div>
                  <section>
                    <img src={items.img} alt="" />
                  </section>

                  <section className="pl-2">
                    <h3 className="my-3 font-bold uppercase">{items.title}</h3>
                    <p className="text-[0.8rem]">{items.details}</p>
                    <a
                      href=""
                      className="flex items-center my-3 text-sm text-[#8c215b]"
                    >
                      Shop now <FaAngleRight />
                    </a>
                  </section>
                </div>
              </div>
            );
          })}
        </section>
        {/* Bonus */}

        {/* brands */}
        <section className="grid md:grid-cols-6 grid-cols-2 md:my-3 my-10 grid-rows-2 ">
          {brands.map((brand) => {
            return (
              <a
                href=""
                key={brand.id}
                className="border hover:scale-105 bg-white grid justify-center items-center"
              >
                <img src={brand.img} alt="" className="" />
              </a>
            );
          })}
        </section>
        {/* brands */}

        {/* About Konga */}

        <section className="bg-white rounded-md p-3 mb">
          <header>
            <h2 className="font-bold tex-sm mb-6">
              Konga Online Shopping in Nigeria - Best Shopping Site
            </h2>
          </header>
          <p className="text-[.84rem]">
            Konga.com is Nigeria’s number one online Shopping destination.We
            pride ourselves in having everything you could possibly need for
            life and living at the best prices than anywhere else. Our access to
            Original Equipment Manufacturers and premium sellers gives us a wide
            range of products at very low prices. Some of our popular categories
            include electronics, mobile phones, computers, fashion, beauty
            products, home and kitchen, Building and construction materials and
            a whole lot more from premium brands. Some of our other categories
            include Food and drinks, automotive and industrial, books, musical
            equipment, babies and kids items, sports and fitness, to mention a
            few. To make your shopping experience swift and memorable, there are
            also added services like gift vouchers, consumer promotion
            activities across different categories and bulk purchases with
            hassle-free delivery. Enjoy free shipping rates for certain products
            and with the bulk purchase option, you can enjoy low shipping rates,
            discounted prices and flexible payment. When you shop on our
            platform, you can pay with your debit card or via KongaPay, which is
            a convenient and secured payment solution. Get the best of lifestyle
            services online. Don't miss out on the biggest sales online which
            takes place on special dates yearly
          </p>
        </section>
        {/* About Konga */}
      </main>
    </div>
  );
}


