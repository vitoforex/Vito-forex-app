import React from 'react'
import { GenericButton } from '..'
import { useNavigate } from 'react-router'

const NoPlan = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-center items-center'>
        <div className="text-center">
            <h2 className="font-bold text-xl py-4">You currently have no plan!</h2>
            <p className="text-lg pb-4">Pick a plan to get started</p>
            <GenericButton
                text={"Pick a Plan"}
                classes={"text-white bg-secondary rounded-[0px] py-4 mb-2"}
                onClick={() => navigate("/signals")}
              />
        </div>
    </div>
  )
}

export default NoPlan