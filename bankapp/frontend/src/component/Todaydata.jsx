import {ForkKnife} from "@/utilities/Categoryicons";
export default function Todaydata() {
  const todayData = [
    {
      title: "Lending & Resting",
      time: "14:00",
      amount: "-1000",
    },
    {
      title: "Lending & Resting",
      time: "14:00",
      amount: "-1000",
    },
    {
      title: "Lending & Resting",
      time: "14:00",
      amount: "-1000",
    },
    {
      title: "Lending & Resting",
      time: "14:00",
      amount: "-1000",
    },
    {
      title: "Lending & Resting",
      time: "14:00",
      amount: "-1000",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className=" font-semibold">Today</p>
      {todayData.map((el) => {
        return (
          <div className="flex justify-between border bg-white rounded-xl items-center px-6 py-3">
            <div className="flex gap-4 items-center">
                <input type="checkbox" className=" flex w-6 h-6 justify-center items-center rounded border border-[#1F2937] opacity-20 "/>
                <div className=" w-10 h-10 bg-[#0166FF] rounded-full items-center flex justify-center"> <ForkKnife/></div>       
              <div>
                <p className="font-bold">{el.title}</p>
                <p className=" text-[#6B7280]">{el.time}</p>
              </div>
            </div>
            <p className="text-red-600">{el.amount}</p>
          </div>
        );
      })}
    </div>
  );
}
