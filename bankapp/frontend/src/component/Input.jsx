export default function Input (props){
    return (
        <>
                <input type= {props.type} placeholder={props.placeholder} onChange={props.getdata} className=" h-12  bg-[#F3F4F6] rounded-lg border-[1px] border-[#D1D5DB] p-4"/>
        </>
     

    );
}