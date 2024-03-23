import { NavLink } from "react-router-dom";
import { ImageLogo, ImageNamad, InformationFooter} from "../../../data/data";

function Footer() {
  return (
    <div className="FooterWrapper flex flex-wrap md:flex-1 justify-center  lg:justify-center p-5 pb-16 pt-10  md:p-5  text-gray-700">
      {InformationFooter.map((text) => (
        <NavLink
          to={text.url}
          className=" mx-2  md:mx-1 my-2 lg:mx-2 "
          key={text.id}
        >
          {text.text}
        </NavLink>
       
      ))}
   
  
      <div className="imgLogo flex justify-center  my-5  ms-36 sm:ms-40 md:mx-80 lg:mx-96">{ImageLogo.map((img)=>(
     <NavLink to={img.url}  key={img.id} > <img src={img.src} alt={img.alt}  /></NavLink> 
      ))}
      <div className="imgNamad flex flex-wrap justify-start -ms-36 md:-mx-40 px-3 md:px-10 my-10  ">
        {ImageNamad.map((imge)=>(
     <NavLink to={imge.url} key={imge.id} > <img src={imge.src} alt={imge.alt} width={120}  /></NavLink> 
      ))}
        </div></div>

    </div>
    
  );
}

export default Footer;
