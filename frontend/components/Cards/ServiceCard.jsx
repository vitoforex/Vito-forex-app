import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GenericButton } from '..'

const ServiceCard = ({icon, name, benefits}) => {
  return (
    <Link href={'#'}>
         <div className='p-10 w-72 rounded-2xl shadow-4xl bg-[#333] flex flex-col items-center justify-center'>
        <div >
            <FontAwesomeIcon icon={icon} size='xl' className='text-primary'/>
        </div>
        <div className="py-4">
            <h2 className="text-2xl text-white">
                {name}
            </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center flex-col">
                {
                    benefits.map((benefit, idx) => (
                        <p className="text-center text-white py-2" key={idx}>
                            {benefit}
                        </p>
                    ))
                }

                <div className="flex flex-wrap justify-center items-center">
            <GenericButton
              text={"Start Learning"}
              classes={"bg-gradient-to-r from-primary to-secondary text-white"}
            />
          </div>
                
            </div>
    </div>
    </Link>
  )
}

export default ServiceCard