
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Provider from 'react-redux'
import { store } from '../../store/store'
import axios from 'axios'

const PricingCard = ({price, months, title, features, restricted, save, tag, original_price}) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    async function Checkout(){
        if (isLoggedIn === false){
            <Navigate to={'/login'}/>
            return;
        }else{
            let data = {
               price: 'price_1NnLVzCOWoAHqo4JxQvj4wMF',
            }
            const response = await axios.post('/payment/checkout', JSON.stringify(data), {
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            })
            console.log(response)
        }
    }

  return (
    <div className='w-80 shadow-xl p-10 rounded-lg'>
        <div className="">
            <h2 className="uppercase text-lg text-center font-semibold">{title}</h2>
            <h3 className="capitalize text-center font-light py-4">{tag}</h3>
            <div className="flex justify-center items-center pt-4">
                <div className="mr-2 line-through">
                    ${original_price}
                </div>
                <div className="ml-2 bg-primary py-2 px-4 rounded-full ">
                       <span className="text-white">
                        SAVE {save}%
                       </span>
                </div>
            </div>
            <div className="flex justify-center items-center pt-8 pb-4">
                <h2 className="text-black">
                    <span className='text-[16px]'>$ </span>
                    <span className='text-4xl font-bold'>
                        {price}
                    </span>
                    <span className='text-[16px]'>
                        /{months} {months>1?'months':'month'}
                    </span>
                </h2>
            </div>
            <div className="py-4 flex justify-center items-center">
                <button onClick={Checkout} className="font-bold bg-gradient-to-r from-primary to-secondary text-white py-2 px-8">
                    Buy Now
                </button>
            </div>
            <div className="h-[1px] w-full bg-gray-400"></div>
        </div>
        <div className="">
            <h1 className="font-semibold text-2xl py-4">Top Features</h1>
            <div className="flex flex-col">
            {
                features.map((item, idx) => (
                    <div className="flex items-center py-2" key={idx}>
                    <div className="">
                        <FontAwesomeIcon icon={faCheckSquare} size='xl' className='text-primary'/>
                    </div>
                    <div className="ml-2">
                        <span className='text-[13px]'>
                            {item}
                        </span>
                    </div>
                </div>
                ))
            }
            {
                restricted.map((item, idx) => (
                    <div className="flex items-center py-2" key={idx}>
                    <div className="">
                    <FontAwesomeIcon icon={faCircleXmark} size='xl' className='text-gray-300'/>
                    </div>
                    <div className="ml-2">
                        <span className='text-[13px]'>
                            {item}
                        </span>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default PricingCard