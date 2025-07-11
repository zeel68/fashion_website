import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="p-[15px] box-border rounded-md max-w-screen-xxl text-center">
                <div className=" flex justify-between border-t border-[#23232133] py-[10px] text-[#232321]">
                    <div className='font-Open Sans text-[14px] font-medium'>© 2023 - pulstron Dashboard</div>

                    <ul className='flex font-Open Sans text-[14px] font-medium'>
                        <li className='px-[5px]'>About</li>
                        <li className='px-[5px]'>Careers</li>
                        <li className='px-[5px]'>Policy</li>
                        <li className='px-[5px]'>Contact</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer