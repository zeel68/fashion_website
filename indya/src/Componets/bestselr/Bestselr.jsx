import React from 'react'
import Bestslrprop from './Bestslrprop'
import { Link } from 'react-router-dom'

const Bestselr = () => {
    return (
        <>
            <div className='main py-[15px]'>
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">

                        <div className="flex justify-center py-[15px]">
                            <div className="title ">
                                <h3 className='text-[30px] font-semibold px-[40px] '>
                                    Explore More
                                </h3>
                                <p className='text-[17px] font-semibold leading-[35px]'>Shop our occasion-ready curations</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Link to="/Women-clothing">
                                <Bestslrprop img="./assets/img/bestslr1.jpg" />
                            </Link>
                            <Link to="/Mens">
                                <Bestslrprop img="./assets/img/bestslr2.jpg" />
                            </Link>

                            <Link to="/kids">
                                <Bestslrprop img="./assets/img/bestslr3.jpg" />
                            </Link>

                            <Link to="/Jewellery">
                                <Bestslrprop img="./assets/img/bestslr4.jpg" />
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Bestselr