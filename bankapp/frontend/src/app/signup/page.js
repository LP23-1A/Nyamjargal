"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Geld, Logo } from "@/utilities/Allsmallicons";



export default function Signup() {
  //const data = useRef()

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const currency = "MNT";
  //const [data, setData ] = useState([]);
 // console.log(data)
  const handler = async () => {
    const input = {
      name,
      email,
      password,
      currency: 'MNT',
    };

   localStorage.setItem("data", JSON.stringify(input));
      router.push("/signupcurrency");
     // let res = await axios.post(defaultUrl, {name: name,email: email, password: password,});
     // console.log(res, "res");
  };

  const router = useRouter();
  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center w-1/2 items-center font-roboto">
        <div className=" flex w-[384px] flex-col gap-[40px] justify-center items-center">
          <div className="flex p-[5.4px] gap-[9.5px] items-center">
            <Logo /> <Geld />
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h2 className=" font-semibold leading-8">Create Geld account</h2>
            <p>Sign up below to create your Wallet account</p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(event) => setname(event.target.value)}
            //  onChange={(event) => data.current = {...data.current, name: event.target.value}}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <input
              type="text"
              placeholder="Email"
              name = "email"
            //  onChange={(event) => data.current = {...data.current, email: event.target.value}}
               onChange={(event) => setemail(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <input
              type="password"
              placeholder="Password"
              name = "password"
             // onChange={(event) => data.current = {...data.current, password: event.target.value}}
             onChange={(event) => setpassword(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <input type="password" placeholder="Re-password" name="confirmpassword"  className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"/>
            <button className="btn btn-primary" onClick={handler}> Sign up </button>
          </div>
          <div className="flex">
            <h1>Already have account?</h1>
            <button
              className=" text-[#0166FF] px-3 rounded-3xl"
              onClick={() => router.push("/login")}
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      <div className=" w-1/2 bg-[#0166FF] h-screen"></div>
    </div>
  );
}
