"use client";
import Logo from "@/utilities/Logo";
import Geld from "@/utilities/Geld";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useRef, useState } from "react";

const defaultUrl = "http://localhost:8000/users";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //const [data, setData ] = useState([]);

  const handler = async () => {
    const input = {
      name,
      email,
      password,
    };

    localStorage.setItem("input", JSON.stringify(input));

    // let res = await axios.post(defaultUrl, {
    //   name: name,
    //   email: email,
    //   password: password,
    // });
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
              onChange={(event) => setname(event.target.value)}
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
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
            <input
              type="password"
              placeholder="Re-password"
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <button className="btn btn-primary" onClick={handler}>
              Sign up
            </button>
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
