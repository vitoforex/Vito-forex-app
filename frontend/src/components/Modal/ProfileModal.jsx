import React from 'react'
import './modal.css'

const ProfileModal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="modal"  onClick={onClose}>
      <div className="modal-content md:w-[50%] w-[80%] rounded-lg h-[60%] overflow-hidden overflow-y-auto scrollable">
          <div className="">
            <span className="close" onClick={onClose}>&times;</span>
          </div>
          <div className="">
            {children}
          </div>
      </div>
    </div>
  ) : null;
}

export default ProfileModal