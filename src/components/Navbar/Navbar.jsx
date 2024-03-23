import { NavLink } from "react-router-dom";
import { InformationNavbar } from "../../../data/data";

function Navbar() {
  return (
    <div className="wrappers  flex justify-between md:justify-start lg:justify-start   p-5 md:p-8 font-extralight">
      <NavLink to="/" className="sm:-ms-0  md:hidden">
        <img src="../../src/assets/Img/menu_black_24dp.svg" alt="" />{" "}
      </NavLink>
      <NavLink to="/" className="md:ms-5 lg:ms-5 xl:ms-24 2xl:ms-40 ">
        <img src="../../../src/assets/Img/snappTextLogo.svg" alt="" />{" "}
      </NavLink>
      {InformationNavbar.map((text) => (
        <NavLink
          to={text.url}
          className="hidden md:block md:ms-2 lg:ms-7"
          key={text.id}
        >
          {text.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
