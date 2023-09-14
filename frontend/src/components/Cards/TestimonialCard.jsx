import React from 'react'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestimonialCard = ({name, testimonial, image}) => {
  return (
   <div className="w-[90%] shadow-2xl rounded-xl bg-[#333] p-6 my-2">
        <div className="">
            <FontAwesomeIcon icon={faQuoteLeft} size='2xl' className='text-primary'/>
        </div>
        <div className="grid grid-cols-3 gap-10 items-center">
            <div className="col-span-2">
                <p className="text-gray-200 py-4 italic">
                   {testimonial}
                </p>
            </div>
            <div className="">
                <img src={image} width={100} height={100} alt='client picture' className='rounded-full'/>
            </div>
        </div>
        <div className="">
            <span className="font-semibold text-white">
                {name}
            </span>
        </div>
   </div>
  )
}

export default TestimonialCard