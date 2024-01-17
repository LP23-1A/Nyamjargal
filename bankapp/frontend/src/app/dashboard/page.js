"use client";
import Navbar from "@/component/Navbar";
import Doughnut from "@/component/DonutChart";
import BarChart from "@/component/BarChart"
import {Balancelogo, Balancecircle, Geldwhite, Logowhite, GreenCircle, BlueCircle, Greenarrow} from "@/utilities/Allsmallicons.jsx"
import { House, ForkKnife } from "@/utilities/Categoryicons";



export default function dashboard() {
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col">
        <Navbar />
        <div className="flex flex-col  gap-6 px-[120px] py-8 bg-[#F3F4F6]  w-[1440px]">
          <div className="flex justify-between">
            <div
              className=" flex flex-col justify-between p-8 w-[384px] h-[219px] rounded-[18px] bg-[#0166FF]"
              style={{
                backgroundImage:'url("https://s3-alpha-sig.figma.com/img/4885/3bc9/b9fecceef3cee30b02fc6d7ea7a6fba7?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bhbOMYlEhQ4nShK1afe~hheQT5dLMkO8CqiNgBlGlsgKzBw22TPuetPQNmqX6jGjCESZiNq4uDXjRmanYRVIP3CQVSPiwt950eR-MW~X3d4Zw4rQC9mvBrSQ4vPQ4kOo1V8J-eQvSpS5d3cJy2Z8L-EXHksHr2lGx19EAhpmVeQhnyAc85hdqjDVJgKMMxk6HYK5PxFsN76orxaZ~-6NFFo1dZQ2R-~VJMfvX1SsKqRulA473umvp8JVA1vlWNFwkmlR-jsb3lK7G6GiAeXfn98KwiSND0LdvGSTNw0p-HmVkrhUUKHmvGMc5e3UQ0yUaPxunAmmGUz3ppC8al7RFQ__")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <div className="items-center gap-2 p-[4.7px] inline-flex">
                <Logowhite />
                <Geldwhite />
              </div>
              <div className=" flex justify-between items-center relative">
                <div className="inline-flex flex-col text-white">
                  <p className=" opacity-50">Cash</p>{" "}
                  <span className=" text-2xl">10,000,000</span>
                </div>
                 <Balancelogo />
                 <div className=" absolute"><Balancecircle/></div>
              </div>
            </div>

            <div className=" flex flex-col w-[384px] h-[219px] rounded-[18px] bg-white">
              <div className=" flex gap-2 px-6 py-4 items-center border-b border-[#E2E8F0] font-semibold">
                <GreenCircle />
                <p>Your Income</p>
              </div>
              <div className=" flex flex-col px-6 pt-5 pb-6 items-start gap-6">
                <div>
                  <div className="flex text-4xl font-semibold gap-1">
                    <h1>1,200,000</h1>
                    <span>₮</span>
                  </div>
                  <p className=" text-[18px] leading-7">Your Income Amount</p>
                </div>
                <div className="flex gap-2">
                  <Greenarrow />
                  <p className=" text-[18px] leading-7">32% from last month</p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-[384px] h-[219px] rounded-[18px] bg-white">
              <div className=" flex gap-2 px-6 py-4 items-center border-b border-[#E2E8F0] font-semibold">
                <BlueCircle />
                <p>Total Expenses</p>
              </div>
              <div className=" flex flex-col px-6 pt-5 pb-6 items-start gap-6">
                <div>
                  <div className="flex text-4xl font-semibold gap-1">
                    <h1>-1,200,000</h1>
                    <span>₮</span>
                  </div>
                  <p className=" text-[18px] leading-7">Your Income Amount</p>
                </div>
                <div className="flex gap-2">
                  <Greenarrow />
                  <p className=" text-[18px] leading-7">32% from last month</p>
                </div>
              </div>
            </div>
          </div>
          {/* CHART JS SECTION TOP */}
          <div className="flex justify-between w-full gap-6">
            <div className=" flex flex-col w-2/4  rounded-[18px] bg-white">
              <div className=" flex gap-2 px-6 py-4 items-center border-b border-[#E2E8F0] font-semibold">
                <p>Income - Expense</p>
              </div>
              <div className=" flex flex-col px-6 py-8">
                  <BarChart/>
              </div>
            </div>
            <div className=" flex flex-col w-2/4  rounded-[18px] bg-white">
              <div className=" flex gap-2 px-6 py-4 items-center border-b border-[#E2E8F0] justify-between font-semibold">
                <p>Income - Expense</p>
                <p>Jun 1 - Nov 30</p>
              </div>
              <div className=" flex flex-col px-6 py-8">
                  <Doughnut/>
              </div>
            </div>
          </div>
          {/* CHART JS SECTION BOTTOM */}
          <div>
            <div className=" flex flex-col w-full h-[226px] rounded-[18px] bg-white">
              <div className=" flex gap-2 px-6 py-4 items-center border-b border-[#E2E8F0] justify-between font-semibold">
                <p>Last Records</p>
              </div>
              <div className=" flex flex-col px-6 py-8">
                <House />
              </div>
            </div>
          </div>
        </div>
     

      </div>
    </div>
  );
}
