import {FaArrowCircleRight} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Card = ({data}) => {

    //destructure data
    const {title,image,category,featured,details} = data || {}

    //navigate
    const navigate = useNavigate()
    

    return (
        <div onClick={()=>navigate(`details/${data.id}`)} className="card  bg-base-100 shadow-xl">

            <figure className='h-[30vh] w-full brightness-50  '><img src={image} alt={`${title} image`} className='w-full h-full object-cover ' /></figure>


            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{featured && 'featured'}</div>
                </h2>
                <p>{details && details.slice(0,50)}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge bg-pink-100"><FaArrowCircleRight className='text-pink-500 text-lg '></FaArrowCircleRight></div>
                </div>
            </div>
        </div>
    );
};

export default Card;