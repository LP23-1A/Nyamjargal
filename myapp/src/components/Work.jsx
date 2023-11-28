import fiskil from "@/Utilities/images/fiskill.png"
import SectionTitle from "./SectionTitle";
import icon from "@/Utilities/images/Icon.png"

export default function (){
    return (
        <>
            <div className="work-content flex">
                <div className="work-photo padding48"> <img src = {fiskil.src}/> </div>
                <div className="work-tech padding48 flex flex-column">
                    <h2>Fiskil</h2>
                    <p className="work-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="technologies flex">
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


            <div className="work-content flex">
              
                <div className="work-tech padding48 flex flex-column">
                    <h2>Fiskil</h2>
                    <p className="work-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="technologies flex">
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
                <div className="left-border padding48"> <img src = {fiskil.src}/> </div>
            </div>


            <div className="work-content flex">
                <div className="work-photo padding48"> <img src = {fiskil.src}/> </div>
                <div className="work-tech padding48 flex flex-column">
                    <h2>Fiskil</h2>
                    <p className="work-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                    <div className="technologies flex">
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