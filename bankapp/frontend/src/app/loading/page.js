import {Geld, Mediumlogo} from "@/utilities/Allsmallicons"

export default function Loading() {
  return (
    <div className=" flex w-screen h-screen items-center justify-center">
      <div className=" flex flex-col justify-center items-center gap-12">
        <div className=" flex gap-[17.64px] p-[10px] items-center justify-center">     <Mediumlogo /> <Geld /></div> 
        <div className=" flex flex-col gap-4 justify-center items-center">
            <span className="loading loading-spinner bg-[#0166FF]"></span>
             <p>Түр хүлээнэ үү...</p>
        </div>
   
      </div>
    </div>
  );
}
