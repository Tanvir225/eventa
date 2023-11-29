import backGroundImage from '../../assets/bg_img.jpg'
import Marquee from "react-fast-marquee";
import Lottie from 'lottie-react';
import introAnimation from "../../animation/intro.json"

const Index = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backGroundImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" -mt-20 max-w-lg ">

                    {/* animation icon */}

                    <Lottie animationData={introAnimation} style={{ height: 150 }}></Lottie>

                    {/* intro */}
                    <Marquee className='md:ml-16' speed={150} loop={1}>
                        <h1 className="mb-5 text-4xl  font-bold md:text-5xl">Welcome to <span className='text-yellow-400'>Eventa...</span></h1>
                    </Marquee>

                    {/* form for get data */}

                    <form className='w-full text-yellow-600 font-semibold'>
                        <select className="select w-full select-secondary ">
                            <option disabled selected>Select language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                        </select>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Index;