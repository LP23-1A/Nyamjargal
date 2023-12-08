import { useState , useRef} from "react";
import axios from "axios";
import { headers } from "../../next.config";
export default function (){

    const [post, setPost] = useState({ published: true });
    const dataRef = useRef();

    const clickHandler = (event, key) => {
        let mock = {};
        mock[key] = event.target.value;
        console.log(event.target.value)
        setPost({...post, ...mock});
    };
    console.log(post)
    const sendRequest = async () => {
        // let response = await axios.post('https://dev.to/api/articles',post, headers {
        //     api_key: "WRp43SYfj3cpCU6o9iabiZ4H",
        //     Content_type: "application/json"
        // });
    }
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <input
            className=" bg-[#f4f4f5] w-[242px] h-[20px]"
            type="text"
            placeholder="title"
            //onChange={clickHandler}
            onChange={(event)=> clickHandler(event, 'title')}
          />
            <input
            className=" bg-[#f4f4f5] w-[242px] h-[20px]"
            type="text"
            placeholder="description"
            onChange={(event)=> clickHandler(event, "description")}
          />
            <input
            className=" bg-[#f4f4f5] w-[242px] h-[20px]"
            type="text"
            placeholder="tags"
            onChange={(event)=> clickHandler(event, "tag")}
          />
            <input
            className=" bg-[#f4f4f5] w-[242px] h-[20px]"
            type="text"
            placeholder="series"  
            onChange={(event)=> clickHandler(event, "series")}
          />
          <button onClick={sendRequest}>Create Post</button>
        </div>

    );
}