import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p className="text-2xl font-medium">Loading...</p>
  </div>
  )
}

export default Loader