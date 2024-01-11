"use client";
import Logo from "@/utilities/Logo";
import Avatar from "./Avatar";
import Button from "./Button";
import Leadingicon from "@/utilities/Leadingicon";
import { useRouter } from "next/navigation";
export default function Navbar(){
    const router = useRouter();

    return (
        <div className="flex  justify-between px-[120px] py-[16px]">
            <div className="flex gap-6 items-center">
                <Logo/>
                <p className=" cursor-pointer font-semibold" onClick={()=>router.push('/dashboard')}>Dashboard </p>
                <p className=" cursor-pointer" onClick={()=>router.push('/records')}>Records</p>
            </div>
            <div className="flex gap-6 items-center ">
                <Button  title = "Record" icon={<Leadingicon/>}/>
                 <Avatar/>
            </div>         
        </div>

    );

}