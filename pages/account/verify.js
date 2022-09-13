import Head from "next/head";
import Link from "next/link";

const Verify = () => {
  return (
    <div>
      <Head>
        <title>Verify Pin | Konga Online Shopping</title>
        <meta name="description" content="this is a  konga clone by codebyte" />
      </Head>

      <div className="bg-[#F2F2F2]  py-5">
        <Link href="">
          <a>
            <img src="/konga.webp" alt="" className="w-36  block m-auto" />
          </a>
        </Link>

        <section className="bg-white m-auto mt-12 w-[25rem] shadow-myshadow">
          <header className="border-b-gray-200 border leading-none p-3 mb-5">
            <h2 className="text-center font-sans font-bold text-[2rem]  ">
              Enter the PIN sent to your phone
            </h2>
          </header>
          <div className="px-7">
            <div className="px-7 bg-[#F8F8F8] py-3 ">
              <p className="text-[.78rem] text-[#999]  text-center">
                You will receive a 4-digit code on your phone in the next 2
                minutes. Please enter the code below to complete your account
                registration.
              </p>
            </div>
            <div className="my-6">
              <p className="text-[0.74rem] text-center font-bold mb-2">
                Enter Code
              </p>
              <input
                type="text"
                className="outline-none border w-full block py-5 border-black placeholder:text-sm rounded-sm pl-4"
              />
            </div>

            <button className="bg-[#33B27B] text-white font-bold py-1 block w-full">
              Submit Code
            </button>
          </div>
          <Link href="/account/signup">
            <p className="text-[.8em] text-[#a2a7a6] text-center my-4">
              I didn't receive the code.
              <a className=" text-[#BC3478] font-bold ml-2">Resend</a>
            </p>
          </Link>
          <div className="  bg-[#F8F8F8]  mt-5   justify-center  py-5 px-7">
            <p className="text-[.9em] text-black font-bold text-center mb-3">
              Still did not receive the verification code? <br />
            </p>
            <p className="text-center text-[.75rem]">
              Email customer support at{" "}
              <Link href="">
                <a className=" text-[#BC3478] ">help@konga.com</a>
              </Link>
              <br /> Use our live chat <br /> Call us on:{" "}
              <a className=" text-[#BC3478] ">07080635700</a> or{" "}
              <Link href="">
                <a className=" text-[#BC3478] "> 08094605555</a>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Verify;

Verify.getLayout = function PageLayout(page) {
  return <>{page}</>;
};