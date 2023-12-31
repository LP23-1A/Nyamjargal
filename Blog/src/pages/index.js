import { Inter } from "next/font/google";
import Trending from "@/components/Trending";
import Navbar from "@/components/Navbar";
import Carsoule from "@/components/Carsoule";
import Allblog from "@/components/Allblog";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

let api = "https://dev.to/api/articles?username=gereltuyamz";

const trendData = [
  {
    url: "https://s3-alpha-sig.figma.com/img/e8eb/3bce/c766a697a30822ccba768b03c5125ead?Expires=1702857600&Signature=mS1K5kWMKdlerCnD04RJL-32u2QR~P-BrzhJjc60wD~2aECa~ybTYlb3shy-lxMN5NrwHvXXBV5G5d9aoWO1RLwzHwAtF0728X2AY0vR0eOwB5zNxaMBkSM565DVEfM7aE0JTI3wA-wOYHs2JrtG5vy1d4qxM-adv6sPFGBeQVH7FTrfU-wOaagqWmRzlotOv1cxHZET7oPgA80Qf-g5BaxlL9l4Z74welNJLRWmUTygXksPWe7bdolzVHy5EBdWJ6r3hfazxLpk-mtePX1ea2lBTLfw1o~vw~3SZmhoJzDxCSz5OJdJkb8H1y3AMv9Q1N6QBuWNe2rCVdR6QeHDmQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Technology",
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    url: "https://s3-alpha-sig.figma.com/img/8d5b/3c3e/9c1f18bc8db1dc4de14eac308e1e1594?Expires=1702857600&Signature=iMU-7Qz1Mbpq1V~SJFTCy0eim3ir1jjcZ9WuY1jMQ~e8xG~GtQ1YvS5uHIMGX7iI~x8gCuA8cgO~AEQSN~CjEmoAPydwvYxU68OWHT~OP91wrXr1Il88mI2m77BDnkWPBwkPiqyMAdZRpL1uUdVcYc7H-y4KhRgdZZOles31oS6WlBR~dL3j-SJMwurF8WR2485RHIxd0vNh-SUd0d5lTjghTtOxgiJ0UGriEWNBMbt3qED6uA8dBEfLoq~pgD3pCYRftJvZ6go1UFd76ENIdWFQ4r3hVC8JiV8HbR57XX5ykU8F5wGnXVtoGYVLXIJSGgiuKBe8bxRuh~qak8iAqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Technology",
    desc: "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

const carsouleData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Technology",
    desc: "Grid system for better Design User Interface",
  },
];

export default function Home() {
  const [data, setData] = useState([]);
  const valueRef = useRef("");
  const initData = useRef([]);
  const router = useRouter();
  const getData = async (api) => {
    let res = await axios.get(api);
    initData.current = res.data;
    setData(res.data);
  };

  const reset = () => setData(initData.current);
  const filter = (name) =>
    setData(() => initData.current.filter((el) => el.tags === name));
  const handler = () => getData("https://dev.to/api/articles");

  const handlerInputValue = (value) => {
    valueRef.current = value;
  };

  const handlerRouter = (id) => router.push(`id=${id}`);
  useEffect(() => {
    getData(api);
  }, []);

  useEffect(() => {
    getData(api);
  }, []);

  return (
    <main className="flex flex-col gap-[100px]">
      <div className="flex flex-col gap-[100px] pr-[350px] pl-[350px]">
        <Navbar />
        <div>
          {carsouleData.map((element) => {
            return (
              <Carsoule
                img={element.img}
                title={element.title}
                desc={element.desc}
              />
            );
          })}
        </div>

        <div className="flex justify-center flex-col gap-[30px]">
          <h2 className=" font-bold">Trending</h2>
          <div className="flex gap-5">
            {trendData.map((element) => {
              return (
                <div>
                  <Trending
                    url={element.url}
                    desc={element.desc}
                    title={element.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="font-bold">All Blog Post</h2>
          <div className="flex text-[12px] justify-between">
            <div className=" flex gap-5">
              <p className=" cursor-pointer" onClick={reset}>All</p>
              <p className=" cursor-pointer" onClick={ ()=> filter('webdev')}>Webdev</p>
              <p className=" cursor-pointer" onClick={ ()=> filter('programing')}>Programing</p>
              <p className=" cursor-pointer" onClick={ ()=> filter('nextjs')}>nextJs</p>
              <p className=" cursor-pointer" onClick={ ()=> filter('technology')}>Technology</p>
              <p className=" cursor-pointer" onClick={ ()=> filter('branding')}>Branding</p>
            </div>
            <p className=" cursor-pointer" onClick={reset}>View All</p>
          </div>
          <div className="flex gap-5">
            {/* <Allblog /> */}

            {data.map((el, index) => {
              return (
                <div
                  key={index}
                  style={{
                   backgroundImage: `url(${el.social_image})`,
                    height: "500px",
                    width: "500px",
                  }}
                  onClick={() => handlerRouter(el.id)}
                >
               
                  {el.title} <h3>{el.tags}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center ">
          <p className="flex justify-center items-center  border-2 border-solid-[#696A75] rounded-md  px-5 py-3  text-[#696A75] cursor-pointer" onClick={handlerRouter}>
            Load More
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
