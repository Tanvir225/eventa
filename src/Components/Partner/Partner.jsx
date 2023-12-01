import idea from '../../../src/animation/idea.json'
import Lottie from 'lottie-react';




const Partner = () => {
    return (
        <div className='flex gap-5 justify-center items-center container mx-auto'>
            <div className=''>
                <Lottie animationData={idea} className='bg-blue-50 rounded-lg shadow-lg' ></Lottie>
            </div>
            <div className='space-y-5'>
                <p className="font-semibold w-10/12 mx-auto text-lg text-blue-950">Empower your venue, shop, or car with success – join our <span className='text-yellow-500'>Event Management System.</span> and unlock new possibilities for growth and visibility.Together, let's create unforgettable experiences and elevate your business to new heights through our dynamic <span className='text-yellow-500'>Event Management System.</span></p>
                <div className='text-center'>
                    <button className='btn w-10/12 mx-auto bg-[#b76e79] text-white btn-outline'>Login now</button>
                </div>
            </div>
        </div>
    );
};

export default Partner;