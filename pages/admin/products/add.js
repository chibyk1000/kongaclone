import React, { useMemo, useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
  import { ToastContainer, toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import DropFileInput from "../../../components/drop-file-input/DropFileInput";
import { Disclosure } from "@headlessui/react";
import { AiOutlineUpload } from 'react-icons/ai'
import { useRouter } from "next/router";
import axios from "axios";
import AdminLayout from "../../../components/AdminLayout";
const Add = () => {
  const titleRef = useRef()
  const brandRef = useRef()
  const dispriceRef = useRef()
  const priceRef = useRef()
  const quantityRef = useRef(); 
  const [images, setImages] = useState([])
  const [value, setValue] = useState("");
  const router = useRouter()
  const onFileChange = (files) => {
    // console.log(files);
    setImages((prev) => {
      return [...prev, ...files]
    })
  };

  // console.log(images)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const handleSubmit = async (e) => {

    
    
    try {

      e.preventDefault()  
      
      if ((!titleRef.current.value, !brandRef.current.value, !priceRef.current.value, !quantityRef.current.value, !value, !images)) {
   
           toast.error("Empty inputs", {
             position: "top-right",
             autoClose: 3000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: false,
             progress: undefined,
             theme: "colored",
           });
return 
 }

      const formdata = new FormData()
      for (const img of images) {
        // console.log(img)
      formdata.append("file", img)
      }

      formdata.append("upload_preset","konga_clone");
  const image = await axios.post(
    "https://api.cloudinary.com/v1_1/dfes3vq48/image/upload",
    formdata
      );
      console.log(image.data)

      const uploadData = {
        title: titleRef.current.value,
        brand: brandRef.current.value,
        price: priceRef.current.value,
        quantity: quantityRef.current.value,
        description: value,
        image: image.data.secure_url,
        discount_price:dispriceRef.current.value,
      };
      const resp = await axios.post('/api/products/upload', uploadData)
      console.log(resp)
      if(resp.status === 200) {
           toast.success("Success", {
             position: "top-right",
             autoClose: 3000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: false,
             draggable: false,
             progress: undefined,
             theme: "colored",
           });
        
        setTimeout(()=> router.reload(), 3500)
      }
  } catch (error) {
     toast.error("invalid entries", {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: false,
       draggable: false,
       progress: undefined,
       theme: "colored",
     });
  }
  }

  return (

       <AdminLayout>
      

    <div className=" pt-10 ">
      <div className="bg-white w-2/3 mx-auto p-2">
        <p className="text-center text-rose-600 font-bold uppercase mb-10 text-3xl">
          Add product here
        </p>
        <form action="" className="w-full " onSubmit={handleSubmit}>
          <input
            type="text"
            className="block mb-3 w-full h-10 outline-none pl-4 border focus:border-blue-600"
            placeholder="Title"
            ref={titleRef}
          />
          <input
            type="text"
            className="block mb-3 w-full h-10 outline-none pl-4 border focus:border-blue-600"
            placeholder="Brand"
            ref={brandRef}
          />
          <input
            type="text"
            className="block mb-3 w-full h-10 outline-none pl-4 border focus:border-blue-600"
            placeholder="Price"
            ref={priceRef}
          />
          <input
            type="text"
            className="block mb-3 w-full h-10 outline-none pl-4 border focus:border-blue-600"
            placeholder="DisCounted Price"
            ref={dispriceRef}
          />
          <input
            type="number"
            className=" mb-3  h-10 outline-none px-4 border focus:border-blue-600"
            placeholder="quantity"
            pattern="[0-9]"
            min={1}
            onKeyDown={(event) => {
              event.preventDefault();
            }}
            ref={quantityRef}
          />
          <Disclosure>
            <Disclosure.Button className="py-2 bg-blue-600 px-3 text-white flex items-center gap-2">
              <AiOutlineUpload className="inline-block text-xl" />
              Upload images
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 p-3 transition-all ease-out delay-150 duration-200">
              <DropFileInput onFileChange={(files) => onFileChange(files)} />
            </Disclosure.Panel>
          </Disclosure>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            className="border-none outline-none"
            placeholder="Description here"
          />

          <button
            className="mt-5 bg-red-600 text-white  w-20 py-2 px-3 "
            type="submit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
       </AdminLayout>
  );
};

export default Add;

Add.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
