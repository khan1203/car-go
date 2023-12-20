import SliderButton from "./SliderButton";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from "../../../assets/images/banner/5.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";

const Bannar = () => {
  return (
    <div>
      <div className="carousel w-full max-h-screen">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full max-h-screen" />
          <SliderButton></SliderButton>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full max-h-screen" />
          <SliderButton></SliderButton>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={img3}
            className="w-full"
          />
          <SliderButton></SliderButton>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img4}
            className="w-full"
          />
          <SliderButton></SliderButton>
        </div>
        {/* <div id="slide4" className="carousel-item relative w-full">
          <img
            src={img5}
            className="w-full"
          />
          <SliderButton></SliderButton>
        </div><div id="slide4" className="carousel-item relative w-full">
          <img
            src={img6}
            className="w-full"
          />
          <SliderButton></SliderButton>
        </div> */}
      </div>
    </div>
  );
};

export default Bannar;
