"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import Input from "@/component/Input";
import { Geld, Logo } from "@/utilities/Allsmallicons";

const api = "http://localhost:8000/login";

export default function Login() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handler = async () => {
    let res = await axios.post(api, { email, password });
    let loggedUserID = res.data[0].id;
    console.log("logged user id", loggedUserID);
    if (res.statusText === "OK") {
      router.push("/dashboard");
    }
  };

  return (
    <div className=" flex w-screen h-screen">
      <div className=" flex justify-center w-1/2 items-center font-roboto">
        <div className=" flex w-[384px] flex-col gap-[40px] justify-center items-center">
          <div className="flex p-[5.4px] gap-[9.5px] items-center">
            <Logo /> <Geld />
          </div>
          <div className=" flex flex-col gap-2 items-center">
            <h2 className=" font-semibold leading-8">Welcome Back</h2>
            <p>Welcome back, Please enter your details</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {/*  <Input type="text" placeholder = "emailll" getdata = {(event) => (setemail(event.target.value))} />*/}
            <Input type="text" getdata={(e) => console.log(e)} />
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setemail(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setpassword(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <button className="btn btn-primary" onClick={handler}>
              Log in
            </button>
          </div>
          <div className="flex">
            <h1>Don’t have account?</h1>
            <button
              className=" text-[#0166FF] px-3 rounded-3xl"
              onClick={() => router.push("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className=" w-1/2 bg-[#0166FF] h-screen"></div>
    </div>
  );
}
