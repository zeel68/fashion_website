import React from 'react'
import { Link } from 'react-router-dom'

const Boxbnr = () => {
    return (
        <>
            <div className='main py-[15px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">
                        <div className="flex justify-center p-[25px]">
                            <h3 className='text-[25px] font-bold'>
                                NEW ARRIVALS
                            </h3>
                        </div>

                        <div className="bnr">
                            <Link to="/Mens">
                                <img className='w-full' src="./assets/img/boxbnr.jpg" alt="bnr" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Boxbnr