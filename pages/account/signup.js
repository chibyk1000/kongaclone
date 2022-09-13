import Head from "next/head";
import Link from "next/link";

const Signup = () => {
    return (
      <div>
        <Head>
          <title>Signup|Konga</title>
          <meta
            name="description"
            content="this is a  konga clone by codebyte"
          />
        </Head>

        <div className="bg-[#F2F2F2]  py-5">
          <Link href="">
            <a>
              <img src="/konga.webp" alt="" className="w-36  block m-auto" />
            </a>
          </Link>

          <section className="bg-white m-auto mt-12 w-[25rem] ">
            <header className="border-b-gray-200 border py-3">
              <h2 className="text-center font-sans font-bold text-[1.9rem] ">
                Create An Account
              </h2>
            </header>
            <div className="px-7">
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">First Name</p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">Last Name</p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">
                  Email Address
                </p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">
                  Phone Number
                </p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter  Phone Number"
                />
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">Password</p>
                <div className="flex border  border-black py-2 px-4 ">
                  <input
                    type="password"
                    className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    placeholder="Enter Password"
                  />
                  <button className="text-[#47BA88] text-[0.74rem]">
                    Show
                  </button>
                </div>
              </div>

              <button className="bg-[#33B27B] text-white font-bold py-2 block w-full">
                Create an Account
              </button>
              <p className="text-[#CFDBED] text-center text-[.85rem] mt-5 font-sans">
                By signing up you accept our{" "}
                <Link href="">
                  <a className="underline">
                    terms and cond itions & privacy policy
                  </a>
                </Link>
              </p>
            </div>
            <div className="  bg-[#F8F8F8]  mt-5   justify-center  py-5 px-7">
              <p className="text-[.8em] text-[#a2a7a6] font-semibold text-center mb-3">
                Already have an Account?
              </p>
                        <Link href="/account/login">
                        
              <a className="border-[#ED0D7F] border b hover:text-white hover:bg-[#ED0D7F] text-[#ED0D7F] font-bold py-2 block w-full text-center">
               Login     
              </a>
                        </Link>
            </div>
          </section>
        </div>
      </div>
    );
}
 
export default Signup;

Signup.getLayout = function PageLayout(page) {
  return <>{page}</>;
};