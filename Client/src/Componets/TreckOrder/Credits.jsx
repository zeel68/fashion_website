import React from 'react'

const Credits = () => {
  return (
    <>
      <div className="max-w-screen-xxl mx-auto px-4 py-10 font-'Lato', sans-serif">
        <div className="bg-[#f3f3f3] p-2 ">
          <h2 className='text-lg font-bold'>My Credits</h2>

          <div className="bg-white w-[50%] flex justify-center items-center p-6 mt-4">
            <p className='text-gray-700 text-[15px]'>You Have <br />
              <button className='block bg-black text-white py-2 px-10 my-2'>₹  0</button>
              Credits <br />
              in Your Account</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default Credits