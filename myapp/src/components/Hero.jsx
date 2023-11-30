import Addressicon from "@/Utilities/images/address.jsx";
import Githubicon from "@/Utilities/images/Github.jsx";
import Twittericon from "@/Utilities/images/Twitter.jsx";
import Figmaicon from "@/Utilities/images/Figma.jsx";
import sagar from "@/Utilities/images/sagar.png";

export default function () {
  return (
    <div className="container justify-between max-sm:flex-col-reverse">
      <div className="flex flex-col w-[768px] gap-12 dark:text-white">
        <div className=" flex flex-col gap-2">
          <h1 className="text-6xl font-bold">Hi, I’m Sagar 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Addressicon></Addressicon>
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col justify-center items-center w-6 h-6">
              <div className=" w-2 h-2 bg-[#10B981] rounded-3xl"></div>
            </div>
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Githubicon />
          <Twittericon />
          <Figmaicon />
        </div>
      </div>

      <div>
        <img src={sagar.src}></img>
        {/* <PicBackground size = {3} position = {right}/> */}
        {/* <PicBackground background="#E5E7EB" position="right"/> */}
      </div>
    </div>
  );
}
