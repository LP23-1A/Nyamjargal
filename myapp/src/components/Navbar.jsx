import Sun from "../Utilities/images/Sun-img.jsx";

export default function navbar() {
  return (
    <div className="navbar flex justify-between my-[16px] mx-[80px] px-[32px]">
      <div className="logo text-[30px] font-bold">
        <p>Logoooooooooooo</p>
      </div>
      <div className="navbar-menu flex items-center font-medium">
        <ul className="header--list--container flex">
          {["About", "Work", "Testimonial", "Contact"].map((navItem, index) => {
            return <li key={"key-" + index}>{navItem}</li>;
          })}
        </ul>
        <button className="header--theme">
          <Sun />
        </button>
        <div className="header--cv--button"> Download CV</div>
      </div>
    </div>
  );
}
