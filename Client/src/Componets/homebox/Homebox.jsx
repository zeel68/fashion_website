import React, { useEffect } from 'react';
import Boxprop from './boxprop';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homebox = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <>
            <div className='pt-[60px]' data-aos="fade-up">
                <div className="max-w-screen-xxl mx-auto px-[5px]">
                    <div className="inner-main">

                        <div className="flex justify-center w-full">
                            <Link to="/KurtaSet" className='w-full' >
                                <Boxprop img="./assets/img/homebox1.jpg" />
                            </Link>
                            <Link to="/KurtaSet" className='w-full'>
                                <Boxprop img="./assets/img/homebox2.jpg" />
                            </Link>
                            <Link to="/Lehengas" className='w-full'>
                                <Boxprop img="./assets/img/homebox3.jpg" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Homebox;
