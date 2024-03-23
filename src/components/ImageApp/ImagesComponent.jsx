import { Link } from "react-router-dom";
import { imagesList } from "../../../data/data";

function ImagesComponent() {
  return (
    <div className=" hidden  md:flex md:flex-wrap lg:flex-row md:mx-40 lg:mx-0 lg:justify-center py-10  justify-center  lg:py-14">
      {imagesList.map((image) => (
        <Link href={image.url} key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            width={160}
            height={25}
            className="m-2 md:flex-wrap lg:flex-row lg:mx-10 md:my-5"
          />
        </Link>
      ))}
    </div>
  );
}

export default ImagesComponent;
