import axios from "axios";
import { useEffect, useState } from "react";
import { Eye, Rightarrow, Plusblue } from "@/utilities/Allsmallicons";
const api = "http://localhost:8000/category";

export default function Categorylist() {
  const [categoryName, setCategoryName] = useState();

  const handler = async () => {
    let res = await axios.get(api);
    setCategoryName(res.data);
   //console.log("catdata", res.data);
   localStorage.setItem("category", JSON.stringify(res.data));
  };

  useEffect(() => {
    handler();
  }, []);

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
