import Metalogo from "@/components/Metalogo.jsx"
import Searchbutton from "@/components/Searchbutton.jsx";
export default function () {
  return (
    <div className="flex justify-between pt-8 pb-8 pr-[350px] pl-[350px]">
        <Metalogo/>
      <div className="flex gap-[40px] ">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex bg-[#F4F4F5] items-center px-[16px] py-[8px]">
        <input
          className=" bg-[#f4f4f5] w-[142px] h-[20px]"
          type="text"
          placeholder="Search"
        />
        <Searchbutton/>
      </div>
    </div>
  );
}
