import React from 'react'
import { Link } from 'react-router-dom'

const Tredishnalbnr = () => {
    return (
        <>
            <div className='main py-[15px] w-full'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">

                        <div className="bnr">
                            <Link to="/Affiliate">
                                <img className='w-full' src="./assets/img/traditionalbnr.jpg" alt="bnr" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tredishnalbnr