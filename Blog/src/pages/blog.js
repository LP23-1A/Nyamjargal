import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function (){
    return (
        <div>
            <div  className="flex flex-col gap-[100px] pr-[350px] pl-[350px]">
                 <Navbar/>
            </div>
      
            <Footer/>
        </div>

    );

}