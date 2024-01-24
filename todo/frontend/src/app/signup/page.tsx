"use client";
import Image from "next/image";
import bg from "@/utils/BG.jpg"
import todowhite from "@/utils/TodoWhite.png"
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import axios from "axios";
import * as yup from 'yup';
const api = "http://localhost:8000/auth/signup";

export default function Signup() {



const router = useRouter();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [error, seterror] = useState("");

  const handler = async () => {
   // console.log("data", username,password);
   if (password === confirmpassword){
    let res = await axios.post(api, {username, password});
    router.push("/login");
   } else {
    seterror("Password Mismatch!!!! Please try again")
   }
  
};


  return (
    <div className=" flex flex-col gap-28 w-screen h-screen justify-center items-center" style={{backgroundImage: `url(${bg.src})`, backgroundSize: "cover",}}>
    <Image src={todowhite} alt="Todo App" className=" w-[118px]"  /> 
  <div className=" flex justify-center items-center font-roboto bg-transparent border-[2px] border-[#D1D5DB]/20 backdrop-blur-xl shadow shadow-blue-500/40 text-white rounded-xl py-8 px-10">
    <div className=" flex w-[384px] flex-col gap-[40px] justify-center items-center">
      <div className=" flex flex-col gap-2 items-center">
        <h2 className=" font-semibold leading-8 text-[36px]">Create Todo Account</h2>
        <p>Sign up below to create your account</p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <input type="text" placeholder="Enter your username" onChange={(event) => setusername(event.target.value)} 
        className=" h-12 bg-transparent rounded-[40px] border-[2px] outline-none border-[#D1D5DB]/20 p-4 placeholder:text-white/60" required />
        <input type="password" placeholder="Enter your password" onChange={(event) => setpassword(event.target.value)}
          className=" h-12 bg-transparent rounded-[40px] border-[2px] border-[#D1D5DB]/20 p-4 placeholder:text-white/60" required />
           <input type="password" placeholder="Confirm password" onChange={(event) => setconfirmpassword(event.target.value)}
          className=" h-12 bg-transparent rounded-[40px] border-[2px] border-[#D1D5DB]/20 p-4 placeholder:text-white/60" required />
        <button className="bg-[#fff] text-[#333] rounded-[20px] h-8" onClick={handler}> Sign up </button>
      </div>
      <p className=" text-[#ff6363ed]">{error}</p>
      <div className="flex">
        <h1>Already have account ?</h1>
        <button className=" text-[#FFFF00] px-3 rounded-3xl" onClick={() => router.push("/login")}>  Log in </button>
      </div>
   
    </div>
  </div>
</div>
  );
}
