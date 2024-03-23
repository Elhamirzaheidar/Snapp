
import { Carousel } from 'flowbite-react';
import image1 from "../../assets/Img/Club.jpg";
import image2 from "../../assets/Img/Market.jpg";
import image3 from "../../assets/Img/Food.jpg";
import image4 from "../../assets/Img/Driver.jpg";
function CarouselDefault() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 ">
      <Carousel slideInterval={5000}>
        <img src={image1} alt="..." />
        <img src={image2}alt="..." />
        <img src={image3}alt="..." />
      <img src={image4}alt="..." />
      </Carousel>
    </div>
  );
}
export default CarouselDefault