"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import axios from "axios";
const api = "http://localhost:8000/auth/signup";

export default function Signup() {

const router = useRouter();
  const [username, setname] = useState("");
  const [password, setpassword] = useState("");

  const handler = async () => {
   // console.log("data", username,password);
    let res = await axios.post(api, {username, password});
    router.push("/login");
};


  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center w-1/2 items-center font-roboto">
        <div className=" flex w-[384px] flex-col gap-[40px] justify-center items-center">
          <div className=" flex flex-col gap-2 items-center">
            <h2 className=" font-semibold leading-8">Create Todo Account</h2>
            <p>Sign up </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="username"
              name="name"
              onChange={(event) => setname(event.target.value)}
            //  onChange={(event) => data.current = {...data.current, name: event.target.value}}
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
            <button className="bg-[#0166FF] text-white rounded-[20px] h-8" onClick={handler}> Sign up </button>
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
