import Navbar from "@/component/Navbar";
import Cashlogo from "@/utilities/Cashlogo.jsx";
import {GreenCircle, BlueCircle} from "@/utilities/SmallCircle";
import GreenArrow from "@/utilities/GreenArrow";
import { House, ForkKnife } from "@/utilities/Categoryicons";
import Button from "@/component/Button";
import Leadingicon from "@/utilities/Leadingicon";


export default function Dashboard() {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="flex  gap-6 px-[120px] py-8 bg-[#F3F4F6]">
        <div className=" inline-flex gap-6 flex-col">
            <div className="flex flex-col gap-6">
                <h1>Records</h1>
                <Button  title = "Add" icon={<Leadingicon/>}/>
            </div>
            <input type="text" placeholder="Search" name="search" className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4" />
            <div className=" inline-flex flex-col gap-4">
                <p>Types</p>   
                <div className=" flex flex-col items-start">
                    <div className="inline-flex gap-2 items-center justify-center">  
                        <input className=" cursor-pointer" type="radio"></input>    
                        <label>All</label>
                    </div>
                    <div className="inline-flex gap-2 items-center justify-center">  
                        <input className=" cursor-pointer" type="radio"></input>    
                        <label>Income</label>
                    </div>
              
                    <div className="inline-flex gap-2 items-center justify-center">  
                        <input className=" cursor-pointer" type="radio"></input>    
                        <label>Expense</label>
                    </div>
                </div>
            </div>
        </div>
        <div ></div>
    </div>
    </div>
  );
}
