import React from 'react'

const Spinner = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex py-10 w-96  justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
  </div>
      </div>
    );
}

export default Spinner