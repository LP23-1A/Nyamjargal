"use client";
import Logo from "@/utilities/Logo";
import Geld from "@/utilities/Geld";
import Money from "@/utilities/Money";

import { useRouter } from "next/navigation";

export default function Signupcurrency() {
  const router = useRouter();
  console.log(JSON.parse(localStorage.getItem("input")));
  return (
    <div className=" flex w-screen h-screen items-center gap-[141px] flex-col">
      <div className=" flex gap-12 flex-col pt-10">
        <div className=" flex gap-[11px] p-[6px] items-center">
          <Logo /> <Geld /> <Money />
        </div>
        <div className=" flex ">
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex w-[384px]">
        <div className=" flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            <Money />
            <h2>Select base currency</h2>
          </div>
          <select class="select select-bordered w-full max-w-xs">
            <option selected>MNT - Mongolian Tugrik</option>
            <option>USD - United States Dollar</option>
          </select>
        </div>
      </div>
    </div>
  );
}
