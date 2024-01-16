import axios from "axios";
import { useEffect, useState } from "react";
import { Eye, Rightarrow, Plusblue } from "@/utilities/Allsmallicons";
const api = "http://localhost:8000/category";

export default function Categorylist() {
  const [categoryName, setCategoryName] = useState();

  const handler = async () => {
    let res = await axios.get(api);
    setCategoryName(res.data);
    console.log("catdata", res.data);
  };

  useEffect(() => {
    handler();
  }, []);

  const categoryData = [
    { title: "Food and Drinks" },
    { title: "Shopping" },
    { title: "Housing" },
    { title: "Transportation" },
    { title: "Vehicle" },
    { title: "Life & Entertaiment" },
    { title: "Communication, PC" },
    { title: "Financial expenses" },
    { title: "Investments" },
    { title: "Income" },
    { title: "Others" },
  ];
  return (
    <div className=" flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {categoryName &&
          categoryName.map((el) => {
            return (
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <Eye />
                  <p>{el.name}</p>
                </div>
                <Rightarrow />
              </div>
            );
          })}
      </div>
    </div>
  );
}
