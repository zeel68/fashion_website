import React from 'react'

const Vouchers = () => {
  return (
    <>
      <div className="max-w-screen-xxl mx-auto px-4 py-10">
        <div className="bg-[#f3f3f3] p-2">
          <h2 className='text-lg font-bold'>My Voucher</h2>

          <table className='w-full'>
            <tr className='text-lg text-[#999] border-b border-[#999] flex justify-between'>
              <th className='p-4'>Vouchers</th>
              <th className='p-4'>Voucher Discount</th>
              <th className='p-4'>Minimum Purchase</th>
              <th className='p-4'>Expiry Date</th>
            </tr>
            <tr className='text-lg flex justify-between bg-white font-bold border border-[#000000] mt-3'>
              <td className='p-3'>Welcome</td>
              <td className='p-3'>₹ 250</td>
              <td className='p-3'>₹ 2000</td>
              <td className='p-3'>15 Aug 2025</td>
            </tr>

          </table>
        </div>
      </div>
    </>
  )
}

export default Vouchers