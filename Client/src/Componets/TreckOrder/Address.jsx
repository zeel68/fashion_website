import React from 'react'

const Address = () => {
  return (
    <>
    <div className="max-w-screen-xxl mx-auto px-4 py-10">
      <div className="bg-[#f3f3f3] p-2 ">
        <h2 className='text-lg font-bold'>My Addresses</h2>

        <div className="w-full bg-white rounded-md p-5 my-3">
          <p className='text-lg pt-4 flex justify-center items-center font-bold'>ADD NEW ADDRESS</p>
          <div className='w-full'>
            <input className='block border-b border-[#999] py-3 w-full text-sm' type="text" placeholder='Full Name' />
            <input className='block border-b border-[#999] py-3 w-full text-sm' type="text" placeholder='Mobile Number' />
            <input className='block border-b border-[#999] py-3 w-full text-sm' type="text" placeholder='conutry' />
            <input className='block border-b border-[#999] py-3 w-full text-sm' type="text" placeholder='pincode' />
            <input className='block border-b border-[#999] py-3 w-full text-sm' type="text" placeholder='Address' />

            <div className="block my-3 text-sm">
              <input className='inline' type="checkbox" placeholder='Full Name' />
              <p className='inline pl-2'>Make this my default address</p>

            </div>
            <a className='flex justify-center items-center bg-[#d3b951] px-4 my-3' href="#">ADD ADDRESS</a>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Address