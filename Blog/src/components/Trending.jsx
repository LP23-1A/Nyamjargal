export default function (props) {
  return (
      <div
        className="flex h-[320px] w-[289px] bg-cover  rounded-[12px] bg-no-repeat justify-center items-end relative"
        style={{ backgroundImage: `url(${props.url})` }}
      >
        <div className="absolute z-30 flex-col w-[230px] pb-7">
          <div className="flex">
            <p className=" px-[10px] py-[4px] text-white rounded-[6px]  bg-[rgb(75,107,251)] text-[14px] ">
              {props.title}
            </p>
          </div>
          <p className="text-white font-bold text-[18px] leading-7 mt-4">
            {props.desc}
          </p>
        </div>
        <div className=" absolute w-[289px] h-[320px] rounded-xl bg-slate-700 opacity-50 z-20"></div>
      </div>
  );
}
