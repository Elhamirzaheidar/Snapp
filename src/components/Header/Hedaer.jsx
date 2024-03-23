import ImagesComponent from "../ImageApp/ImagesComponent";
import Navbar from "../Navbar/Navbar";
import Content from "./Content";

function Header() {
  return (
    <>
      <Navbar />
      <Content />
      <ImagesComponent />
    </>
  );
}

export default Header;
