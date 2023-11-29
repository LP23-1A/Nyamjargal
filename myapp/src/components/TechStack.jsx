export default function (props) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
        <img className=" w-16 h-16" src = {props.data.url}></img>
        <p> {props.data.content}</p>
    </div>
  );
}



/*
<div className="alltechStack flex">
{props.data.map((e) => {
return (
<div className="techstack">
   <img src={e.url} />
   <p>{e.content}</p>
</div>       
);
})}
</div>
*/