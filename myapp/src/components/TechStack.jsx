export default function (props) {
  return (
    <div className="techstack flex">
        <img className="techPhoto" src = {props.data.url}></img>
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