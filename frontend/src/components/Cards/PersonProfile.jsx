import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faWhatsapp, faTiktok, faTwitter, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import DavidImage from '../../assets/images/david.png';

const PersonProfile = () => {
  return (
    <div className='p-10 w-72 rounded-2xl shadow-2xl bg-[#333333] flex flex-col items-center justify-center'>
        <div >
            <img objectFit='cover' height={200} width={200} className=' rounded-[50%]' src={DavidImage} alt='profile picture' />
        </div>
        <div className="py-4">
            <h2 className="text-2xl text-white">
                Nsereko David 
            </h2>
        </div>
        <div className="flex flex-wrap">
            {/*
                <div className="py-2 mr-4">
                    <Link to={'#'}>
                        <FontAwesomeIcon size="2xl" icon={faFacebook} className="text-primary hover:text-white transition-all"/>
                    </Link>
                </div>
                <div className="py-2 mx-4">
                    <Link to={'#'}>
                        <FontAwesomeIcon size="2xl" icon={faLinkedin} className="text-primary hover:text-white transition-all"/>
                    </Link>
                </div>
             */}

                <div className="py-2 mx-4">
                    <Link to={'https://wa.me/+256708659816'} target='_blank'>
                        <FontAwesomeIcon size="2xl" icon={faWhatsapp} className="text-primary hover:text-white transition-all"/>
                    </Link>
                </div>
                
            </div>
    </div>
  )
}

export default PersonProfile