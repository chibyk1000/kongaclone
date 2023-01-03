import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const router = useRouter();
  const [input, setInput] = useState({
    email: "",

    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/adminlogin", {
        body: input,
      });
      // await res.json()
      if (res.status === 200) {
        console.log(res);
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div>
      <Head>
        <title>Admin Login|Konga</title>
        <meta name="description" content="this is a  konga clone by codebyte" />
      </Head>

      <div className="bg-[#F2F2F2]  py-5 h-[100vh]">
        <Link href="">
          <a>
            <img src="/konga.webp" alt="" className="w-36 block m-auto" />
          </a>
        </Link>

        <section className="bg-white m-auto mt-12 w-[25rem] ">
          <header className="border-b-gray-200 border py-3 mb-5">
            <h2 className="text-center font-sans font-bold text-[1.9rem]  ">
             Admin Login
            </h2>
          </header>
          <form onSubmit={handleSubmit} className="px-7">
           

            <div className="my-6">
              <p className="text-[0.74rem] font-semibold mb-2">
                Email Address
              </p>
              <input
                type="text"
                className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
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
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <button
                  className="text-[#47BA88] text-[0.74rem]"
                  onClick={() => setShowPass(!showPass)}
                  type="button"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button className="bg-[#33B27B] text-white font-bold py-3 block w-full">
              Login
            </button>
          </form>
          <div className="  bg-[#F8F8F8]  mt-5   justify-center  py-5 px-7">
            <p className="text-[.8em] text-[#a2a7a6] font-semibold text-center mb-3">
              Don't have an Admin Account?
            </p>

            <button className="border-[#ED0D7F] border hover:text-white hover:bg-[#ED0D7F] text-[#ED0D7F] font-bold py-2 block w-full" onClick={()=> router.push('/admin/register')}>
              Create an Admin Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
