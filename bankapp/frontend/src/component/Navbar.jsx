import Logo from "@/utilities/Logo";
import Avatar from "./Avatar";
export default function Navbar(){
    return (
        <div className="flex justify-between items-center px-[120px] py-[16px]">
            <div className="flex gap-6 items-center">
                <Logo/>
                <p className=" font-semibold">Dashboard</p>
                <p>Records</p>
            </div>
            <div className="flex">
            <button className="btn btn-primary h-[42px] w-[100px]">Record</button>
            <Avatar/>
            </div>         
        </div>

    );

}