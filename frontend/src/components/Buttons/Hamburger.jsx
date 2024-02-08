import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Hamburger = ({open, onClick}) => {
  const transitionAnimationStyles = {
    opacity: '1',
    transition: 'all 0.3s ease-in-out', 
    transform: open ? 'rotate(90deg)' : 'rotate(0deg)', 
  };
  return (
    <button className="z-[150]" onClick={()=>onClick()}>
        {
          open?(
            <FontAwesomeIcon icon={faTimes} style={{height:'40px', width:'40px', fontWeight:'lighter',color:'#fff', ...transitionAnimationStyles}}/>
          ):(
            <FontAwesomeIcon icon={faBars} style={ {color:'#fff', height:'40px', width:'40px', fontWeight:'lighter', ...transitionAnimationStyles}}/>
          )
        }
    </button>
  )
}

export default Hamburger