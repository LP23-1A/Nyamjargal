"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
const api = "http://localhost:8000/auth/login";

export default function Login() {
  const router = useRouter();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const handler = async () => {
    console.log(username,password);
    try {
      let res = await axios.post(api, { username, password });
      const data = res.data;
      if (res.statusText === "OK") {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log("error");
    }

  };
    return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center w-1/2 items-center font-roboto">
        <div className=" flex w-[384px] flex-col gap-[40px] justify-center items-center">
          <div className=" flex flex-col gap-2 items-center">
            <h2 className=" font-semibold leading-8">Welcome Back</h2>
            <p>Welcome back, Please enter your details</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <input type="text" placeholder="dorj" onChange={(event) => setusername(event.target.value)} 
            className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4" />
            <input type="password" placeholder="Must have at least 6 characters" onChange={(event) => setpassword(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4" />
            <button className="bg-[#0166FF] text-white rounded-[20px] h-8" onClick={handler}> Log in </button>
          </div>
          <div className="flex">
            <h1>Don’t have account?</h1>
            <button className=" text-[#0166FF] px-3 rounded-3xl" onClick={() => router.push("/signup")}> Sign up </button>
          </div>
        </div>
      </div>
      <div className=" w-1/2 bg-[#0166FF] h-screen"></div>
    </div>
  );
}
