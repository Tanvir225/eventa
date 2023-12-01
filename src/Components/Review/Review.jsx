import React from 'react';




const Review = ({ review }) => {
    return (
        <div className='flex justify-center gap-5 container mx-auto mb-10'>
            {
                review && review.map(user =>
                    <div key={user.id} >
                        <div  className="w-1/2 mx-auto md:w-full text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
                            <div className="w-28 py-5 rounded-lg mx-auto">
                                <img src={user.image} alt={`${user.name} image`} className='w-full h-full object-cover' />
                            </div>
                            <div className="p-6 text-center">
                                <p className='text-lg font-semibold'>
                                    {user.name}
                                </p>
                                <p>
                                    {user.reviews}
                                </p>
                            </div>

                        </div>
                    </div>
                )

            }
        </div>
    );
};

export default Review;