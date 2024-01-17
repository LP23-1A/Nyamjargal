"use client";
import { useState } from "react";
import axios from "axios";
import { Close } from "@/utilities/Allsmallicons";
import Button from "./Button";

const api = "http://localhost:8000/category";

export default function AddRecordModal({ open, onClose }) {
  if (!open) return null;
  const [categoryName, setCategoryName] = useState("");
  const [ isExpense, setExpense ] = useState(true)
  const expense = (changer) => {
    setExpense(changer);
}
  // const handler = async () => {
  // let res = await axios.post(api, { categoryName });

  // };

  return (
    <div className="bg-black/[0.7] w-screen h-screen flex justify-center items-center" onClick={onClose}>
      <div className=" w-[494px] flex flex-col bg-[#fff] rounded-2xl" onClick={(e) => {e.stopPropagation();}}>

        <div className=" flex justify-between py-5 px-6 items-center border-b">
          <h1 className=" text-[20px] font-semibold leading-7">Add Record</h1>
          <div className=" cursor-pointer" onClick={onClose}>
            <Close />
          </div>
        </div>
        <input type="text" placeholder="Name" name="name" className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4" onChange={(event) => setCategoryName(event.target.value)} />
      
        
        <div className="flex">
          <div className=" flex flex-col gap-5 pt-5 px-6 pb-6">
              <div>
                <button className={`rounded-3xl px-3 ${isExpense?"  bg-[#0166FF] text-white":"bg-transparent text-black"} ` } onClick={()=>expense(true)}> Expense</button>
                <button className={`rounded-3xl px-3 ${isExpense?" bg-transparent text-black":" bg-[#16A34A] text-white"} ` } onClick={()=>expense(false)}> Income</button>
              </div>
              <div className=" relative ">
              <input type="text" placeholder="₮ 000.00 " className="h-[48px]  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB]  py-3 px-4"
                   />
            <h1 className=" absolute top-3 right-8">Amount</h1>
              </div>
              <button className={`rounded-3xl px-3 ${isExpense?" bg-[#0166FF] text-white":" bg-[#16A34A] text-white"} `}> Add Record</button>
           
         
          </div>
          <div> 
     
          </div>
        </div>

      </div>
    </div>
  );
}
