import React from 'react'

const Gprop = ({ Productimg, pname, price, sales }) => {
    return (
        <>
            <div className="flex p-[5px] items-center">
                <img className="rounded-md object-cover w-[50px] h-[50px]" src={Productimg} alt="product" />
                <div className="ml-[10px]">
                    <p className='text-[16px] font-semibold'>{pname}</p>
                    <div className="text-[14px] mt-[-30px] pl-[190px]">
                        <p className='font-bold text-black'>{price}</p>
                        <p className='text-[#666]'>{sales}</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Gprop