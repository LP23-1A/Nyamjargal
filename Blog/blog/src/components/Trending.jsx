import Image from "next/image";
import mountain from "@/utilities/images/mountain.png"

const styling = {
    backgroundImage: "url('../utilities/images/mountain.png')",
    width:"100%",
    height:"100%",
  }


export default function (){
    return (
        <div>
            <div style={{ backgroundImage: "../utilities/images/mountain.png"}}>

            </div>
            <div className="rounded-xl">
            
                <div>Technology</div>
                <p>The Impact of Technology on the Workplace: How Technology is Changing</p>
            </div>
                   
        </div>

    );
}