"use client";
import { useRouter } from "next/navigation";
import {Logo, Pluswhite} from "@/utilities/Allsmallicons"
import Button from "./Button";


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
                <Button  title = "Record" icon={<Pluswhite/>} bg="#0166FF"/>
                <div className=" w-10 h-10 ">
                         <img className="rounded-full" src="https://s3-alpha-sig.figma.com/img/4b8f/8a06/87e8569e17a69979cf08dac0f798bd37?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evb0T7w-o693L22UWsa64YOcvbvFSsSq9YHh0vf~JMvjnaLMmGyXEoRH7P7Rjb0qizgDTN8GXbZokOkSGEfx09L~q-p3FlFDohbKPL7tpP~qnBUKG683fCiWcKxiN-gn1cqvJVH6Agr2EqfEzdvwMllKyFcWtBuDFxkT29lPqiU8DoM8dXhnbxYCG5RZvvlr5dc46QBhuHF7Cq4r6Els2sEu7NGsMJBNHww2vmFAyIJVJFasJphdkEbkg5ILxfueZFugbhDeTg6hAC1xo7Busy3rRfd9zhUk1rBPPu6p2xBC1vJ6vQG~-ZU1wUHz3xJqFjrF6VXqD484IKmAh7Ql0Q__"></img>
                 </div>
            </div>         
        </div>

    );

}