export default function RecordCatList() {
  // console.log(JSON.parse(localStorage.getItem("category")));
  const catdata = JSON.parse(localStorage.getItem("category"));
  //console.log(catdata[0].name);
  return (
    <div>
        <select defaultValue={"DEFAULT"}>
          {catdata && catdata.map((el, idi) => {
              return (
                  <option key={idi}>{el.name}</option>
              );
            })}
        </select>


      
    </div>
  );
}
