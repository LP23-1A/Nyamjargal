import upwork from "@/Utilities/images/logo-upwork.png"
export default function (){
    return (
        <>
        <div className="exp flex gap48">
             <img className="upwork" src = {upwork.src} />
            <div className="exp-skills flex flex-column gap16">
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

        <div className="exp-skills exp flex gap48">
             <img className="upwork" src = {upwork.src} />
            <div className="flex flex-column gap16">
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

        <div className="exp flex gap48">
             <img className="upwork" src = {upwork.src} />
            <div className="exp-skills flex flex-column gap16">
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