import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from "../../assets/Optimized-slider-1.jpg"
import slider2 from "../../assets/Optimized-slider-2.jpg"
import slider3 from "../../assets/slider-3-min.jpg"


const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>


          <div className="hero h-[60vh] md:h-[75vh]  " style={{ backgroundImage: `url(${slider1})` }}>
            <div className="hero-overlay brightness-50 bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <p className="text-4xl -mt-32 text-white font-semibold" > Two hearts, one love, let the <span className="text-yellow-400">adventure begin!</span></p>

              </div>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>


          <div className="hero h-[60vh] md:h-[75vh] " style={{ backgroundImage: `url(${slider2})` }}>
            <div className="hero-overlay brightness-50 bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <p className="text-4xl -mt-32 text-white font-semibold" >A promise of forever. Join us for the <br /> <span className="text-yellow-400">wedding bliss!</span></p>

              </div>
            </div>
          </div>

        </SwiperSlide>

        <SwiperSlide>
          <div className="hero h-[60vh] md:h-[75vh] " style={{ backgroundImage: `url(${slider3})` }}>
            <div className="hero-overlay brightness-50 bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <p className="text-4xl -mt-20 text-white font-semibold" > As two become one, join us in the celebration of <br /><span className="text-yellow-400">Tanvir ❤️ Mukty</span> Love story</p>

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
