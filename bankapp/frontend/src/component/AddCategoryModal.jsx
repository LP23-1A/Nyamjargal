"use client";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { Close } from "@/utilities/Allsmallicons";
import Button from "./Button";

const api = "http://localhost:8000/category";

export default function AddCategoryModal({ open, onClose }) {
  //if (!open) return null;
  const [categoryName, setCategoryName] = useState("");
  const [desc, setDesc] = useState("");
  const handler = async () => {
    let res = await axios.post(api, { categoryName, desc });
  };

  return (
    <div
      className="bg-black/[0.7] w-screen h-screen flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className=" w-[494px] flex flex-col bg-[#fff] rounded-2xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className=" flex justify-between py-5 px-6 items-center border-b">
          <h1 className=" text-[20px] font-semibold leading-7">Add Category</h1>
          <div className=" cursor-pointer" onClick={onClose}>
            <Close />
          </div>
        </div>
        <div className=" flex flex-col gap-8 p-6">
          <div className=" flex gap-3 items-center justify-between">
            <div>Category Name:</div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
              onChange={(event) => setCategoryName(event.target.value)}
            />
          </div>
          <div className=" flex gap-3 items-center justify-between">
            <div>Category Description:</div>
            <input
              type="text"
              placeholder="Description"
              name="name"
              className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"
              onChange={(event) => setDesc(event.target.value)}
            />
          </div>
          <Button
            title="Add"
            bg="#16A34A"
            onClick={handler}
            added={onClose}
          ></Button>
        </div>
      </div>
    </div>
  );
}
