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
    <div className="flex justify-between my-[16px] mx-[80px] px-[32px]">
      <div className="text-[30px] font-bold">
        <p>Logo</p>
      </div>
      <div className="flex items-center font-medium">
        <ul className="header--list--container flex">
          {["About", "Work", "Testimonial", "Contact"].map((navItem, index) => {
            return <li key={"key-" + index}>{navItem}</li>;
          })}
        </ul>
        <button className="header--theme" onClick={themeToggle}>
          <Sun />
        </button>
        <div className="header--cv--button"> Download CV</div>
      </div>
    </div>
  );
}
