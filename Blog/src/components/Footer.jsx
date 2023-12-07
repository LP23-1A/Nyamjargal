import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Instagram from "./Instagram";
import Linkedin from "./Linkedin";
import Metasmall from "./Metasmall";
export default function () {
  return (
    <div className="flex flex-col gap-6 bg-[#E8E8EA] pt-16 pl-[352px] pr-[352px]">
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col gap-6 w-[289px]">
          <div className="flex flex-col gap-3">
            <h4 className=" text-[18px]">About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              expedita repudiandae aspernatur veritatis dolores iste, unde
              assumenda hic porro ab.
            </p>
          </div>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Homee</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-5">
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
      </div>

      <div className="flex justify-between border-t pt-8 pb-8 items-center">
        <div className="flex gap-[10px]">
          <Metasmall />
          <div className="flex flex-col gap-[2px]">
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex">
          <p>Terms of Use</p>
          <span className=" text-[#E8E8EA] ml-4 mr-4"> | </span>
          <p>Privacy Policy</p>
          <span className=" text-[#E8E8EA] ml-4 mr-4"> | </span>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
