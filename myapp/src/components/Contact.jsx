import Figma from "@/Utilities/images/Figma";
import SectionTitle from "./SectionTitle";
import Email  from "@/Utilities/images/Email.jsx";
import Github from "@/Utilities/images/Github";
import iconcontact from "@/Utilities/images/Iconcontact.png"
import Phone from "@/Utilities/images/Phone.jsx"
import Twitter from "@/Utilities/images/Twitter";
export default function (){
    return (
       <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap16"> <SectionTitle  title= "Get in touch" /> 
            <p className=" w-[576px] text-center">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p></div>

            <div className="flex flex-col gap-4 items-center">
                    <div className="flex gap-5">
                        <Email/>
                        <p className="text-3xl font-semibold">reachsagarshah@gmail.com</p>
                        <img src = {iconcontact.src} />
                    </div>
                    <div className="flex gap-5">
                        <Phone/>
                        <p className=" text-3xl font-semibold">+91 8980500565</p>
                        <img src = {iconcontact.src} />
                    </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>
                You may also find me on these platforms!
                </p>
                <div className="flex justify-center gap-2">   <Github/>   <Twitter/> <Figma/>
                </div>
             

            </div>
        </div>
    );
}