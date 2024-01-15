"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {Geld, Logo, Money, Currency} from "@/utilities/Allsmallicons"

export default function Signupcurrency() {
  const router = useRouter();
  let data = JSON.parse(localStorage.getItem("data"));

  const [currency, setcurrency] = useState("MNT");
  const handler = async () => {
    data.currency = currency; 
    localStorage.setItem("data", JSON.stringify(data));
   // localStorage.setItem("input", JSON.stringify(input));
     // console.log(JSON.parse(localStorage.getItem("input")));
     // console.log("currency value",currency);
      router.push("/signupLastStep");
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
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex w-[384px] flex-col gap-8">
        <div className=" flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4 items-center">
            <div className=" flex w-12 h-12  bg-[#0166FF] rounded-full items-center justify-center" > <Currency></Currency></div>          
            <h2 className=" text-2xl font-bold">Select base currency</h2>
          </div>
          <div className=" flex flex-col gap-3">
            <select value={currency} className="select select-bordered w-full bg-[#F3F4F6]"   onChange={(event) => setcurrency(event.target.value)}>
              <option value="MNT">MNT - Mongolian Tugrik</option>
              <option value = "USD">USD - United States Dollar</option>
            </select>
            <p className=" text-xs text-[#475569]">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one{" "}
            </p>
          </div>
        </div>

        <div>
          <button className="btn btn-primary w-full text-white rounded-3xl" onClick={handler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
