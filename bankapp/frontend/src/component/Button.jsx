export default function Button (props){
    return (
        <div className=" cursor-pointer flex items-center justify-center text-white h-8 bg-[#0166FF] gap-1 px-3 rounded-[20px]">
            {props.icon}
            <span> {props.title}</span>
        </div>

    );
}