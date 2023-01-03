import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch, connect } from "react-redux";


import axios from "axios";

const Login = ({ collapse, setCollapse }) => {
 
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch()
  
  const router = useRouter();

  // console.log(loggedin, isloading);
  const [input, setInput] = useState({
    emailorphone: "",

    password: "",
  });
     const handleChange = (e) => {
       const { name, value } = e.target;
       setInput({ ...input, [name]: value });
     };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        body: input,
      });
      // await res.json()
      if (res.status === 200) {
        console.log(res);
      
        setCollapse(true)
        router.reload()
    
      }
    } catch (error) {
      // console.log(error)
    }
  };
    return (
      <>
        <section
          className={`fixed z-[99]  left-0 top-0 bg-[#111111e2] w-full h-full ${
            collapse ? "hidden" : "block "
          }`}
        >
          <div
            className={`w-[30%] h-full z-20 right-0 fixed top-0 bg-white ${
              collapse ? "" : "move"
            }`}
          >
            <header className="shadow-md flex justify-between h-16 items-center px-2">
              <h3 className="font-bold text-[1.5rem]">Login</h3>
              <button
                className="border text-[.75rem] p-2 text-gray-500"
                onClick={() => setCollapse(true)}
              >
                x Close
              </button>
            </header>
            <form className="px-3" onSubmit={handleSubmit}>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">
                  Email Address or Phone Number
                </p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Email Address OR Phone Number"
                  onChange={handleChange}
                  name="emailorphone"
                />
              </div>
              <div className="my-6">
                <section className="flex justify-between items-center mb-2">
                  <p className="text-[0.74rem] font-semibold ">Password</p>
                  <Link href="">
                    <a className="text-[0.74rem] underline text-[#C15576] ">
                      Forgot Password
                    </a>
                  </Link>
                </section>
                <div className="flex border  border-black py-2 px-4 ">
                  <input
                    type={showPass ? "text" : `password`}
                    className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                  />
                  <button
                    className="text-[#47BA88] text-[0.74rem]"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <button className="bg-[#33B27B] text-white font-bold py-3 block w-full">
                Login
              </button>
              <h3 className="text-[#B5B5A8] text-[.7rem] mt-10 mb-5 decorated">
                <span className="rounded-full border">OR</span>
              </h3>
              <section className="grid grid-cols-2 gap-4 grid-rows-1  items-center">
                <Link href="">
                  <a className="flex items-center border justify-center py-2 border-black ">
                    login with
                    <img
                      src="/social/facebook.png"
                      alt=""
                      className=" w-16 h-full ml-2"
                    />
                  </a>
                </Link>
                <a
                  href=""
                  className="flex items-center justify-center border py-2 border-[#4285FA] "
                >
                  Login with{" "}
                  <img
                    src="/social/google.png
                "
                    alt=""
                    className="w-14 h-full ml-2"
                  />
                </a>
              </section>
            </form>

            <div className="fixed w-[30%] bottom-0 bg-[#F2F2F2]  flex justify-center  py-5 shadow-lg shadow-slate-500">
              <Link href="/account/signup">
                <a className="text-[.8em] text-[#BC3478] font-bold">
                  Don’t have an account? Sign Up
                </a>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}
 
export default Login;


