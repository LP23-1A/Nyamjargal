export default function Button(props) {
  //  console.log(props);
  return (
    <button
      onClick={props.onClick}
      className="cursor-pointer flex items-center justify-center text-white h-8 gap-1 px-3 rounded-[20px]"
      style={{ background: props.bg }}
    >
      {props.icon}
      <span> {props.title}</span>
    </button>
  );
}
