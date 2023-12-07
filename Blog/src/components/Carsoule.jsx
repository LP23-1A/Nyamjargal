import Back from "./Back";
import Forward from "./Forward";

export default function (props) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="flex h-[600px] rounded-xl bg-cover bg-no-repeat items-end pb-[13px] pl-[11px]"
        style={{ backgroundImage: `url(${props.img})` }}
      >
        <div className=" max-w-[598px] p-[40px] flex flex-col bg-white items-start rounded-xl gap-4">
          <div className="flex">
            <p className=" px-[10px] py-[4px] text-white rounded-[6px]  bg-[rgb(75,107,251)] text-[14px] ">
              {props.title}
            </p>
          </div>
          <p className=" text-3xl leading-10">{props.desc}</p>
          <p className=" text-[#97989F]">August 20, 2022</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-md border-2 border-solid-[#696A75]">
          <Back/>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] rounded-md border-2 border-solid-[#696A75]">
          <Forward/>
        </div>
      </div>
    </div>
  );
}
