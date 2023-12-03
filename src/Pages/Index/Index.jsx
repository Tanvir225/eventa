import backGroundImage from '../../assets/bg_img.jpg'
import Marquee from "react-fast-marquee";
import Lottie from 'lottie-react';
import introAnimation from "../../animation/intro.json"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CategoryContext } from '../../Hook/CategoryProvider';




const Index = () => {



    // navigate
    const navigate = useNavigate()

    //get context
    const { selectedCategory, setCategory } = useContext(CategoryContext);


    //function for handle Change
    const handleSelect = (e) => {
        e.preventDefault()
        
        const selectedCategory = e.target.value;
        setCategory(selectedCategory)

        if (selectedCategory) {
            navigate(`/home/${selectedCategory}`)
        }

    }

   




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

                    <form  onChange={handleSelect} className='w-full text-yellow-600 font-semibold'>
                        <select className="select w-full select-secondary " value={selectedCategory}>
                            <option disabled selected value=''>What Are You Looking For</option>
                            <option value={'shopping'}>Shopping</option>
                            <option value={'booking'}>Booking</option>
                            <option value={'car'}>Car</option>
                        </select>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default Index;