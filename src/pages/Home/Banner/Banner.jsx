import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/home/slide1.jpeg";
import img2 from "../../../assets/home/slide2.jpeg";
import img3 from "../../../assets/home/slide3.jpeg";
import img4 from "../../../assets/home/slide4.jpeg";
import img5 from "../../../assets/home/slide5.jpeg";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
    </Carousel>
  );
};

export default Banner;
