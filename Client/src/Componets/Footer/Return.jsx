import React from 'react'
import Breadcrum from '../Breadcrum/Breadcrum'

const Return = () => {
    return (
        <>
            <div className='main font-[Inter]'>
                <div className="max-w-screen-xxl mx-auto px-[15px] py-[30px] w-[80%]">

                    <Breadcrum current="Return And exchange" />

                    <h1 className='text-[40px] font-bold flex justify-center items-center'>Return And exchange</h1>

                    <div className="flex">
                        <img src="assets/img/return.png" alt="order return" />
                        <img src="assets/img/pickup.png" alt="order return" />
                        <img src="assets/img/delivered.png" alt="order return" />
                        <img src="assets/img/quantity.png" alt="order return" />
                        <img src="assets/img/Refund.png" alt="order return" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Return