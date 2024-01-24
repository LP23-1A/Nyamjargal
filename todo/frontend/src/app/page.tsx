import Image from "next/image";
import Login from "@/app/login/page";
import cors from "cors";
export default function Home() {
  var cors = require('cors')
  
  return (
    <div>
      <Login/>
    </div>
  );
}
