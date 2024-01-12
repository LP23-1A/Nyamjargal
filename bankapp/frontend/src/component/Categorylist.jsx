import { Eye, Arrow, Plus } from "@/utilities/Smallicons.jsx";

export default function Categorylist() {
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
        {categoryData.map((el) => {
          return (
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Eye />
                <p>{el.title}</p>
              </div>
              <Arrow />
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 cursor-pointer">
        <Plus />
        <span> Add Category</span>
      </div>
    </div>
  );
}
