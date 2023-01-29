import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const Signup = () => {
  const router = useRouter()
  const [input, setInput] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
    
  })

    const handleChange = (e) => { 
    const { name, value } = e.target
    setInput({...input, [name]:value})
    
  }
  const [showPass, setShowPass] = useState(false)

  const [error, setError] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
  });
  
 
  const handleSubmit = (e) => { 
    e.preventDefault()
  let res =  fetch('/api/auth/adminregister', {
      method: 'POST',
    body: JSON.stringify(input),
    headers: {
        'Content-type': 'application/json'
      }

  }).then(res => {
 
    if (res.status === 200) {
      router.push('/admin/')
    }
    return res.json()
  }).then(data => {
    console.log(data)
    const { message, type } = data
    if (type === "empty") {
      setError({
        f_name: message,
        l_name: message,
        email: message,
        phone: message,
        password: message,
      })

    }
      if (type === "email") {
        setError({
          f_name: "",
          l_name: "",
          email: message,
          phone: "",
          password: "",
        });
      }

    if (type === "password") {
      let text
      for (const messages of message) {
        console.log(messages.message);
        text += <li> { messages.message}  </li>;
      }
      console.log(text);
      if (text) {
        
        setError({
          f_name: "",
          l_name: "",
          email: "",
          phone: "",
          password: text,
        });
      }
      }
      if (type === "phone") {
        setError({
          f_name: "",
          l_name: "",
          email: "",
          phone: message,
          password: "",
        });
      }
    
  }).catch(err => {
    console.log(err.type);
    if (err.type === 'empty') {
      setError({
        f_name: message,
        l_name: message,
        email: message,
        phone: message,
        password: message
      })

      
    }
  })
   

  }
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

          <form
            className="bg-white m-auto mt-12 w-[25rem] "
            onSubmit={handleSubmit}
          >
            <header className="border-b-gray-200 border py-3">
              <h2 className="text-center font-sans font-bold text-[1.9rem] ">
                Create Admin Account
              </h2>
            </header>
            <div className="px-7">
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">First Name</p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter First Name"
                  name="f_name"
                  value={input.f_name}
                  onChange={handleChange}
                />
                <p className="text-[#FF73B3]">{error.f_name}</p>
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">Last Name</p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter Last Name"
                  name="l_name"
                  value={input.l_name}
                  onChange={handleChange}
                />
                <p className="text-[#FF73B3]">{error.l_name}</p>
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">
                  Email Address
                </p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter Email Address"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
                <p className="text-[#FF73B3]">{error.email}</p>
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">
                  Phone Number
                </p>
                <input
                  type="text"
                  className="outline-none border w-full block py-2 border-black placeholder:text-sm rounded-sm pl-4"
                  placeholder="Enter  Phone Number"
                  name="phone"
                  value={input.phone}
                  onChange={handleChange}
                />
                <p className="text-[#FF73B3]">{error.phone}</p>
              </div>
              <div className="my-6">
                <p className="text-[0.74rem] font-semibold mb-2">Password</p>
                <div className="flex border  border-black py-2 px-4 ">
                  <input
                    type={showPass?"text": `password`}
                    className="outline-none  w-full block placeholder:text-sm rounded-sm "
                    placeholder="Enter Password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                  />

                  <button className="text-[#47BA88] text-[0.74rem]" onClick={()=> setShowPass(!showPass)} type="button">
                  {showPass? "Hide" :  'Show'}
                  </button>
                </div>
                  <ul className="text-[#FF73B3]">{error.password}</ul>
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
              <Link href="/admin/login">
                <a className="border-[#ED0D7F] border b hover:text-white hover:bg-[#ED0D7F] text-[#ED0D7F] font-bold py-2 block w-full text-center">
                  Login as Admin
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}
 
export default Signup;

Signup.getLayout = function PageLayout(page) {
  return <>{page}</>;
};