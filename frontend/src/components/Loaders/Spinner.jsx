import React from 'react'

const Spinner = () => {
    return (<div className="flex h-screen items-center justify-cente">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
  </div>);
}

export default Spinner