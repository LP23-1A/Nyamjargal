import Navbar from "@/component/Navbar";
import Cashlogo from "@/utilities/Cashlogo.jsx";
import { GreenCircle, BlueCircle } from "@/utilities/SmallCircle";
import GreenArrow from "@/utilities/GreenArrow";
import { House, ForkKnife } from "@/utilities/Categoryicons";
import Button from "@/component/Button";
import Leadingicon from "@/utilities/Leadingicon";
import Categorylist from "@/component/Categorylist";
import Todaydata from "@/component/Todaydata";
import Yesterday from "@/component/Yesterdaydata";
import {
  Chevronleft,
  Chevronright,
  Downarrow,
} from "@/utilities/Smallicons.jsx";

export default function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col">
        <Navbar />
        <div className="flex  gap-6 py-6 px-[120px] w-[1440px] bg-[#F3F4F6]">
          <div className=" inline-flex px-4 py-6 gap-6 flex-col  w-[282px] bg-[#F9FAFB] rounded-xl">
            <div className="flex flex-col gap-6">
              <h1 className=" font-semibold text-2xl">Records</h1>
              <Button title="Add" icon={<Leadingicon />} />
            </div>
            <input
              type="text"
              placeholder="Search"
              name="search"
              className=" h-8 bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
            />
            <div className=" inline-flex flex-col gap-4">
              <p>Types</p>
              <div className=" flex flex-col items-start">
                <div className="inline-flex gap-1 items-center justify-center">
                  <input className=" cursor-pointer" type="radio"></input>
                  <label>All</label>
                </div>
                <div className="inline-flex gap-1 items-center justify-center">
                  <input className=" cursor-pointer" type="radio"></input>
                  <label>Income</label>
                </div>

                <div className="inline-flex gap-1 items-center justify-center">
                  <input className=" cursor-pointer" type="radio"></input>
                  <label>Expense</label>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-4">
              <div className=" flex justify-between ">
                <p className=" font-semibold text-[#1F2937]">Category</p>
                <div className=" px-3 opacity-20 cursor-pointer">Clear</div>
              </div>
              <div>
                <Categorylist />
              </div>
              <div className=" w-full">
                <p className=" font-semibold">Amount Range</p>
                <div className="flex justify-between">
                  <input
                    type="number"
                    className="bg-[##F3F4F6] rounded-lg border border-[#D1D5DB] px-4  h-12 w-[114.5px]"
                    placeholder="0"
                  />
                  <input
                    type="number"
                    className="bg-[##F3F4F6] rounded-lg border border-[#D1D5DB] px-4 h-12 w-[114.5px]"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <input className=" w-full" type="range" min={0} max={1000} />
                  <div className="flex  justify-between font-semibold">
                    <p>0</p>
                    <p>1000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-6 w-[894px]">

            <div className=" flex justify-between">
              <div className="flex gap-3 items-center">
                <Chevronleft />
                <p>Last 30 Days</p>
                <Chevronright />
              </div>
              <div>
                <div className="">
                  <button className="flex items-center">
                    <span className="text-lg">Newest first </span>
                    <Downarrow />
                  </button>
                </div>
              </div>
            </div>

            <div className="border bg-white rounded-xl flex justify-between p-3">
              <div className="flex gap-4">
                <input type="checkbox" />
                <p className="font-bold">Select All</p>
              </div>
              <p>-35,500</p>
            </div>
            <Todaydata/>
            <Yesterday/>
          </div>



        </div>
      </div>
    </div>
  );
}
