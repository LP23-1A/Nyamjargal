import fiskil from "@/Utilities/images/fiskill.png"
import SectionTitle from "./SectionTitle";
import icon from "@/Utilities/images/Icon.png"

export default function (){
    return (
        <>
            <div className="flex rounded-tl-xl rounded-bl-xl">
                <div className=" bg-[#F9FAFB] rounded-tl-xl rounded-bl-xl p-12 w-[480px] dark:bg-[#374151]"> <img src = {fiskil.src}/> </div>
                <div className="flex flex-col p-12 gap-6 w-[480px] dark:text-white dark:bg-slate-600">
                    <h2>Fiskil</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="flex gap-2 flex-wrap">
                                <SectionTitle title="React"/>
                                <SectionTitle title="Next.js"/>
                                <SectionTitle title="Typescript"/>
                                <SectionTitle title="Nest.js"/>
                                <SectionTitle title="PostgreSQL"/>
                                <SectionTitle title="TailwindCSS"/>
                                <SectionTitle title="Figma"/>
                                <SectionTitle title="Cypress"/>
                                <SectionTitle title="Storybook"/>
                                <SectionTitle title="Git"/>
                    </div>
                    <div>
                        <img src={icon.src}/>
                    </div>
                </div>
            </div>


            <div className="flex rounded-tl-xl rounded-bl-xl">       
                <div className="flex flex-col p-12 gap-6 w-[480px] dark:text-white dark:bg-slate-600">
                    <h2>Fiskil</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="flex gap-2 flex-wrap">
                                <SectionTitle title="React"/>
                                <SectionTitle title="Next.js"/>
                                <SectionTitle title="Typescript"/>
                                <SectionTitle title="Nest.js"/>
                                <SectionTitle title="PostgreSQL"/>
                                <SectionTitle title="TailwindCSS"/>
                                <SectionTitle title="Figma"/>
                                <SectionTitle title="Cypress"/>
                                <SectionTitle title="Storybook"/>
                                <SectionTitle title="Git"/>
                    </div>
                    <div>
                        <img src={icon.src}/>
                    </div>
                </div>
                <div className="bg-[#F9FAFB] rounded-tr-xl rounded-br-xl p-12  w-[480px] dark:bg-[#374151]"> <img src = {fiskil.src}/> </div>
            </div>


            <div className="flex rounded-tl-xl rounded-bl-xl">
                <div className="bg-[#F9FAFB] rounded-tl-xl rounded-bl-xl p-12  w-[480px] dark:bg-[#374151]"> <img src = {fiskil.src}/> </div>
                <div className="flex flex-col p-12 gap-6 w-[480px] dark:text-white dark:bg-slate-600">
                    <h2>Fiskil</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="flex gap-2 flex-wrap">
                                <SectionTitle title="React"/>
                                <SectionTitle title="Next.js"/>
                                <SectionTitle title="Typescript"/>
                                <SectionTitle title="Nest.js"/>
                                <SectionTitle title="PostgreSQL"/>
                                <SectionTitle title="TailwindCSS"/>
                                <SectionTitle title="Figma"/>
                                <SectionTitle title="Cypress"/>
                                <SectionTitle title="Storybook"/>
                                <SectionTitle title="Git"/>
                    </div>
                    <div>
                        <img src={icon.src}/>
                    </div>
                </div>
            </div>
            
        </>
    );
}