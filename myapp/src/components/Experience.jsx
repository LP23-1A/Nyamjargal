import upwork from "@/Utilities/images/logo-upwork.png"
export default function (){
    return (
        <>
        <div className="flex p-8 rounded-xl exp gap-12">
             <img className=" w-[102px] h-[28px]" src = {upwork.src} />
            <div className="flex flex-col gap-4">
                <h1>Sr. Frontend Developer</h1>
                <div>
                    <ul>
                        <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
          
            </div>    
              <p>Nov 2021 - Present</p>
        </div>

        <div className="flex p-8 rounded-xl exp gap-12">
             <img className="w-[102px] h-[28px]" src = {upwork.src} />
            <div className="flex flex-col gap-4">
                <h1>Team Lead</h1>
                <div>
                    <ul>
                        <li>
                        Sed quis justo ac magna.
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
          
            </div>    
              <p>Nov 2021 - Present</p>
        </div>

        <div className="flex p-8 rounded-xl exp gap-12">
             <img className="w-[102px] h-[28px]" src = {upwork.src} />
            <div className="flex flex-col gap-4">
                <h1>Team Lead</h1>
                <div>
                    <ul>
                        <li>
                        Sed quis justo ac magna.
                        </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed quis justo ac magna.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>
          
            </div>    
              <p>Nov 2021 - Present</p>
        </div>
    </>
    );
}