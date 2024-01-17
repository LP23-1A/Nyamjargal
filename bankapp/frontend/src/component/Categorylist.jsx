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
    { name: "Food and Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertaiment" },
    { name: "Communication, PC" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Income" },
    { name: "Others" },
  ];
  return (
    <div className=" flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {categoryName &&
          categoryName.map((el, idw) => {
            return (
              <div    key={idw + el.name} className="flex justify-between items-center">
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
