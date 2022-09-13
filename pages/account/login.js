import Head from "next/head";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Signup|Konga</title>
        <meta name="description" content="this is a  konga clone by codebyte" />
      </Head>

      <div className="bg-[#F2F2F2]  py-5">
        <Link href="">
          <a>
            <img src="/konga.webp" alt="" className="w-36  block m-auto" />
          </a>
        </Link>

        <section className="bg-white m-auto mt-12 w-[25rem] ">
          <header className="border-b-gray-200 border py-3 mb-5">
            <h2 className="text-center font-sans font-bold text-[1.9rem]  ">
              Login
            </h2>
          </header>
          <div className="px-7">
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
            <h3 className="text-[#B5B5A8] text-[.7rem] mt-10 mb-5 decorated">
              <span className="rounded-full border">OR</span>
            </h3>

            <div className="my-6">
              <p className="text-[0.74rem] font-semibold mb-2">
                Email Address or Phone Number
              </p>
              <input
                type="text"
                className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                placeholder="Email Address OR Phone Number"
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
                  type="password"
                  className="outline-none  w-full block placeholder:text-sm rounded-sm "
                  placeholder="Email Address OR Phone Number"
                />
                <button className="text-[#47BA88] text-[0.74rem]">Show</button>
              </div>
            </div>
            <button className="bg-[#33B27B] text-white font-bold py-3 block w-full">
              Login
            </button>
          </div>
          <div className="  bg-[#F8F8F8]  mt-5   justify-center  py-5 px-7">
            <p className="text-[.8em] text-[#a2a7a6] font-semibold text-center mb-3">
              Don't have an Account?
            </p>

            <button className="border-[#ED0D7F] border hover:text-white hover:bg-[#ED0D7F] text-[#ED0D7F] font-bold py-2 block w-full">
              Create an Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>
  {page}
  </>
}

