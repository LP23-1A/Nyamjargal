export default function (props) {
  return (
    <div
      className="flex w-[1216px] h-[600px] rounded-xl bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div>
        <div className="flex">
          <p className=" px-[10px] py-[4px] text-white rounded-[6px]  bg-[rgb(75,107,251)] text-[14px] ">
            {props.title}
          </p>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
