import Sun from "../Utilities/images/Sun-img.jsx";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()


  const menuHandler = () => {
      setIsOpen(!isOpen)
  }

  const themeToggle = () => {
      if (theme == 'dark') {
          setTheme('light')
      }
      if (theme == 'light' || theme === 'system') {
          setTheme('dark')
      }
  }
  return (
    <div className="flex container justify-between my-[16px] mx-[80px] px-[32px]">
      <div className="text-[30px] font-bold">
        <p>Logo</p>
      </div>
      <div className="flex items-center font-medium">
        <ul className="flex gap-[16px]">
          {["About", "Work", "Testimonial", "Contact"].map((navItem, index) => {
            return <li key={"key-" + index}>{navItem}</li>;
          })}
        </ul>
        <button className=" p-[6px] mr-4 ml-12" onClick={themeToggle}>
          <Sun />
        </button>
        <div className=" bg-[#111827] rounded-xl py-[6px] px-4 text-white"> Download CV</div>
      </div>
    </div>
  );
}
