import Figma from "@/Utilities/images/Figma";
import SectionTitle from "./SectionTitle";
import Email  from "@/Utilities/images/Email.jsx";
import Github from "@/Utilities/images/Github";
import iconcontact from "@/Utilities/images/Iconcontact.png"
import Phone from "@/Utilities/images/Phone.jsx"
import Twitter from "@/Utilities/images/Twitter";
export default function (){
    return (
        <>
            <div className="contact-title flex flex-column row-center column-center gap16"> <SectionTitle  title= "Get in touch" /> 
            <p className="contact-title-desc">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p></div>

            <div className="contact-phone-email flex flex-column gap16 row-center column-center">
                    <div className="email contact-text flex gap20">
                        <Email/>
                        <p>reachsagarshah@gmail.com</p>
                        <img src = {iconcontact.src} />
                    </div>
                    <div className="phone contact-text flex gap20">
                        <Phone/>
                        <p>+91 8980500565</p>
                        <img src = {iconcontact.src} />
                    </div>
            </div>
            <div className="contact-platforms flex flex-column gap8">
                <p>
                You may also find me on these platforms!
                </p>
                <div className="flex row-center gap16">   <Github/>   <Twitter/> <Figma/>
                </div>
             

            </div>
        </>
    );
}