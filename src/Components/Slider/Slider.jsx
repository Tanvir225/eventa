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
    <div>
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
          <div className="relative">
            <div className="absolute text-4xl text-white font-semibold z-20 top-[30%] left-[25%]">
              Two hearts, one love, let the <span className="text-yellow-400">adventure begin!</span>
            </div>
            <div>
              <img src={slider1} alt='slider-1' className="brightness-50" />
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div>
            <div className="absolute text-4xl text-white font-semibold z-20 top-[40%] left-[25%]">
              A promise of forever. Join us for the <br /> <span className="text-yellow-400">wedding bliss!</span>
            </div>
            <div>
              <img src={slider2} alt='slider-1' className="brightness-50" />
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>
          <div>
            <div className="absolute text-4xl  text-white font-semibold z-20 top-[40%] left-[20%]">
            As two become one, join us in the celebration of <br /><span className="text-yellow-400">Tanvir ❤️ Mukty</span><br />love story!
            </div>
            <div>
              <img src={slider3} alt='slider-1' className="brightness-50 opacity-70" />
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Slider;
