"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import {Logo, Geld, Check} from "@/utilities/Allsmallicons"


const api = "http://localhost:8000/user";

export default function Signupcurrency() {
  const router = useRouter();
  let data = JSON.parse(localStorage.getItem("data"));
  const handler = async () => {
       let res = await axios.post(api, {name: data.name,email: data.email, password: data.password, currency_type: data.currency});
      router.push("/login");
  };
  return (
    <div className=" flex w-screen h-screen items-center gap-[141px] flex-col">
      <div className=" flex gap-12 flex-col pt-10">
        <div className=" flex gap-[11px] p-[6px] items-center justify-center">
          <Logo /> <Geld />
        </div>
        <div className=" flex ">
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex w-[384px] flex-col gap-8">
        <div className=" flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4 items-center">
            <div className=" flex w-12 h-12  bg-[#0166FF] rounded-full items-center justify-center" > <Check/></div>          
            <h2 className=" text-2xl font-bold">Good Job!</h2>
          </div>
          <div className=" flex flex-col gap-3">
            <p className=" text-xs text-[#475569] text-center">
            Your very first account has been created. Now continue to dashboard and start tracking
            </p>
          </div>
        </div>

        <div>
          <button className="btn btn-primary w-full text-white rounded-3xl" onClick={handler}>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
