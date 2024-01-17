"use client";
import { useState } from "react";
import axios from "axios";
import { Close } from "@/utilities/Allsmallicons";
import Button from "./Button";
import { string } from "yup";

const api = "http://localhost:8000/transaction";

export default function AddRecordModal({ open, onClose }) {
  if (!open) return null;
  const [amount, setAmount] = useState("");
  const [payeeUser, setPayeeuser] = useState("");
  const [desc, setDesc] = useState("");
  const [isExpense, setExpense ] = useState(true)
  const expense = (changer) => {
    setExpense(changer);
}

const handler = async () => {
  let res = await axios.post(api, { amount, payeeUser,desc });
//  console.log(amount, payeeUser, desc);
};

  return (
    <div className="bg-black/[0.7] w-screen h-screen flex justify-center items-center" onClick={onClose}>
      <div className=" w-[760px] flex flex-col bg-[#fff] rounded-2xl" onClick={(e) => {e.stopPropagation();}}>

        <div className=" flex justify-between py-5 px-6 items-center border-b">
          <h1 className=" text-[20px] font-semibold leading-7">Add Record</h1>
          <div className=" cursor-pointer" onClick={onClose}>
            <Close />
          </div>
        </div>
     
        <div className="flex w-full">
          <div className=" flex flex-col gap-5 pt-5 px-6 pb-6 w-1/2">
              <div className="">
                <button className={`rounded-3xl px-3 ${isExpense?"  bg-[#0166FF] text-white":"bg-transparent text-black"} ` } onClick={()=>expense(true)}> Expense</button>
                <button className={`rounded-3xl px-3 ${isExpense?" bg-transparent text-black":" bg-[#16A34A] text-white"} ` } onClick={()=>expense(false)}> Income</button>
              </div>
              <div className=" relative flex flex-col">
              <input type="text" placeholder="₮ 000.00 " className="h-[78px]  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB]  py-3 px-4"
                    onChange={(event) => setAmount(event.target.value)}
                   />
            <h1 className=" absolute top-1 right-4 cursor-pointer">Amount</h1>
              </div>
             <div>
              <p>Category</p>
              <select defaultValue={'DEFAULT'} >
        <option value="1">Mr</option>
        <option value="2">Mrs</option>
        <option value="3">Ms</option>
        <option value="4">Miss</option>
        <option value="5">Dr</option>
      </select>
             </div>
             <div className="flex justify-between">
                <div className="flex flex-col">
                            <p >Date</p>
                              <input className=" border" type="date" id="start" name="trip-start" value="2024-01-18" min="2024-01-18" max="2028-12-31" />
                </div>
                <div className=" flex flex-col">
                    <p>Time</p>
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" />
                </div>
             </div>     
              <button className={`rounded-3xl px-3 ${isExpense?" bg-[#0166FF] text-white":" bg-[#16A34A] text-white"} `} onClick={handler}> Add Record</button>         
          </div>
          <div className="flex flex-col gap-5 pt-5 px-6 pb-6"> 
                <div className="flex flex-col">
                  <p>Payee</p>
                  <input  type="text" placeholder="Write here " className="h-[48px]  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB]  py-3 px-4"
                      onChange={(event) => setPayeeuser(event.target.value)}
                  />
                </div>
                <div>
                  <p>Note</p>
                  <textarea className="textarea textarea-bordered resize-none textarea-lg w-full h-56 " placeholder="Write here"   onChange={(event) => setDesc(event.target.value)}></textarea>
                </div>
          </div>
        </div>

      </div>
    </div>
  );
}
